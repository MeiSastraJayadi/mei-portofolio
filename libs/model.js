import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export function loadGLTFModel(
  pos_x, 
  pos_y,
  mixer,
  scene, 
  name,
  glbPath, 
  options = { recieveShadow : true, castShadow : true}
) {
  const { recieveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load( 
      glbPath, 
      gltf => {
        const obj = gltf.scene;
        obj.name = name;
        obj.position.y = 0; 
        obj.position.x = 0;
        obj.receiveShadow = recieveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);
        mixer.mixer = new THREE.AnimationMixer(obj)
        const clips = gltf.animations;
        // const clip = THREE.AnimationClip.findByName(clips, 'ArmatureAction');
        
        clips.forEach(function(clip) {
          const action = mixer.mixer.clipAction(clip);
          action.play();
        })

        obj.traverse(function(child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = recieveShadow;
          }
        })
        resolve(obj);
      }, 
      undefined, 
      function(error) {
        reject(error)
      }
    )
  })
}
