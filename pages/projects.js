import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-items";
import Acacia from '../public/images/acacia.png'; 
import Cars from '../public/images/cars.png'; 
import Tours from '../public/images/tour.png'; 
import Porto from '../public/images/portofolio.png'; 
import Layout from "../components/layouts/out";

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id={'acacia'} href={'https://github.com/MeiSastraJayadi/acacia'} title={'Acacia'} thumbnail={Acacia}>
              A lightweight router to work with net/http in Golang
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'cars'} href={'https://www.kaggle.com/code/meisastrajayadi/vehicles-detections-with-tensorflow'} title={'Cars Recognition with Tensorflow'} thumbnail={Cars}>
              Simple vehicle recognition with Tensorflow
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'tours'} href={'https://madetourandtravel.000webhostapp.com/'} title={'Made Tour and Travel'} thumbnail={Tours}>
              A website for tour and travel purposes
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'portofolio'} href={'/'} title={'My Portofolio Site'} thumbnail={Porto}>
              My personal portofolio site
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
    
  )
}

export default Projects;
