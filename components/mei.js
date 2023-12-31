import { useState, useEffect, useRef, useCallback } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from "../libs/model";

function easeOutCircle(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const MeiObj = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState(false);
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10, 
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();
  const handleWindowResize = useCallback(() => {
    const { current : container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH)
    }
  }, [renderer])
  
  useEffect(() => {
    const {current: container} = refContainer
    console.log(loading)
    if (container && !renderer) {
      const scW = container.clientWidth  
      const scH = container.clientHeight 

      const rndr = new THREE.WebGLRenderer({
        antialias: true, 
        alpha: true
      })
      rndr.setPixelRatio(window.devicePixelRatio)
      rndr.setSize(scW, scH)
      // renderer.outputColorSpace = THREE.sRGBEncoding
      container.appendChild(rndr.domElement)
      setRenderer(rndr)

      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale, 
        scale, 
        scale, 
        -scale, 
        0.01, 
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)
      console.log('you are in here')
      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      ambientLight.position.x = 30
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, rndr.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)
      const mxr = {mixer : undefined}

      loadGLTFModel(0, 0, mxr, scene, 'mei', '/meiassets.glb', {
        recieveShadow: true,
        castShadow: true 
      }).then(() => {
          animate()
          setLoading(false)
        })
      let req = null;
      let frame = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCircle(frame/120) * Math.PI * 20

          camera.position.y = 5;
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed) 
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed) 
          camera.lookAt(target)
          mxr.mixer.update(0.01);
        } else {
          controls.update()
          mxr.mixer.update(clock.getDelta());
        }

        rndr.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        rndr.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return() => {
      window.addEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
   <Box ref={refContainer} className="mei-obj" 
      m="auto" at={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position={'relative'}
    >
      {
        loading && 
        <Spinner 
            size='xl'
            position='absolute'
            left='50%'
            top='50%'
            ml='calc(0px - var(--spinner-size) / 2)'
            mt='calc(0px - var(--spinner-size))'
        />
      }
    </Box>
  )
}

export default MeiObj;
