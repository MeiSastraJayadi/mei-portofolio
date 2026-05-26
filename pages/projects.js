import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-items";
import Acacia from '../public/images/acacia.png'; 
import Tours from '../public/images/tour.png'; 
import Porto from '../public/images/portofolio.png'; 
import Layout from "../components/layouts/out";
import Bytelamp from "../public/images/bytelamp-portal.jpg";
import Jobzenix from "../public/images/jobzenix.png";
import Animart from "../public/images/animart.png";
import Biohug from '../public/images/Biohug.svg'; 
import PaymentGateway from '../public/images/solana-payment-gateway.svg'


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
            <ProjectGridItem id={'biohug'} href={'https://biohug.site'} title={'Biohug'} thumbnail={Biohug}>
            A modern, feature-rich <span className="italic">Link-in-Bio</span> page builder that allows users to create beautiful, customizable landing pages for their social media profiles.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'novaGatePay'} href={'https://payment-gateway-apps.vercel.app/dashboard'} title={'Nova Gate Pay'} thumbnail={PaymentGateway}>
            A decentralized payment gateway built on Solana, enabling merchants to register on-chain and accept crypto payments with automatic settlement via smart contracts.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'animart'} href={'https://animart.vercel.app'} title={'Animart'} thumbnail={Animart}>
            Animart is a frontend application built with React to present anime-related information using Jikan API.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'portofolio'} href={'/'} title={'My Portofolio Site'} thumbnail={Porto}>
              My personal portofolio site
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'bytelamp'} href={'https://bytelamp.com'} title={'Bytelamp Portal'} thumbnail={Bytelamp}>
              Bytelamp Portal blends tech insights, dev tools, and affiliate marketing strategies into one platform built for innovation and growth.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'tours'} href={'https://madetourandtravel.000webhostapp.com/'} title={'Made Tour and Travel'} thumbnail={Tours}>
              A website for tour and travel purposes
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id={'jobzenix'} href={'https://jobzenix.site'} title={'Jobzenix'} thumbnail={Jobzenix}>
            Jobzenix.site is an upcoming remote job portal currently under development. The platform is designed to connect talent with global opportunities, focusing on flexibility, accessibility, and the growing demand for remote work.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
    
  )
}

export default Projects;
