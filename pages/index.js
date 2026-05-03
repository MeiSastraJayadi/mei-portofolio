import { Box, 
  Button, 
  Container, 
  Heading, Image, 
  Link, 
  SimpleGrid, 
  useColorModeValue} from "@chakra-ui/react";
import NextLink from 'next/link';
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Quote from "../components/quote";
import Layout from "../components/layouts/out";
import { BioSection, BioYear } from "../components/bio";
import { GridItem } from "../components/grid-items";
import Python from '../public/images/python-original.svg'
import FastApi from '../public/images/fastapi-original-wordmark.svg';
import Golang from '../public/images/go-original.svg';
import Flutter from '../public/images/flutter-original.svg';
import Typescript from '../public/images/typescript-plain.svg';
import NodeJs from '../public/images/nodejs-line-wordmark.svg';
import Laravel from '../public/images/laravel-plain.svg'
import NuxtImage from "../public/images/nuxtjs-plain.svg";
import NextImage from "../public/images/nextjs-plain.svg";
import Docker from "../public/images/docker-plain.svg";
import Tailwind from "../public/images/tailwindcss-original.svg";
import Nginx from "../public/images/nginx-original.svg";
import Bash from "../public/images/bash-plain.svg";


const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
            bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} px={8} py={4}
            borderRadius={'lg'} color={useColorModeValue('blackAlpha.700', 'white')}
            marginBottom={6}
        >
          Hello, I am a FullStack Developer 
        </Box>
        <Box display={{ md:'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant={"page-title"}>
              I Made Mei Sastra Jayadi
            </Heading>
            <p>Fullstack Developer</p>
          </Box>
          <Box 
            mt={{base : 4, md: 0}}
            ml={{md : 6}}
            align="center"
            flexShrink={0}>
            <Image 
              borderColor='whiteAlpha.800' 
              borderStyle="solid"
              maxWidth="120px"
              display="inline-block"
              borderRadius="full"
              src="/images/mei-profil.jpeg"
              alt="Profile image"
              borderWidth={2}/>
          </Box>
        </Box>
        <Quote/>
        <Section delay={0.1}>
          <Heading as={'h3'} variant={'section-title'}>
            About Me
          </Heading>
          <Paragraph>
          I am a web and software developer with solid full-stack expertise, actively expanding my knowledge in cloud computing and IT infrastructure. 
          With 2 years of professional experience, I have built and maintained scalable applications using Next.js, Nuxt.js, Node.js and PHP as my primary technologies.
          </Paragraph>
          <Paragraph>
          Beyond my technical foundation, I am passionate about designing efficient solutions that bridge functionality and user experience. My journey in tech is driven by curiosity and continuous learning, allowing me to adapt quickly to evolving technologies and industry standards. I aim to grow not only as a developer but also as a problem-solver who can deliver impactful digital solutions.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant={'section-title'}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Bali (Denpasar), Indonesia
          </BioSection>
          <BioSection>
            <BioYear>2021 - 2025</BioYear>
            Graduated from Institut Bisnis dan Teknologi Indonesia (INSTIKI) on 2025
          </BioSection>
          <BioSection>
            <BioYear>2022 - 2023</BioYear>
            Vice Leader of INSTIKI Developer Club
          </BioSection>
          <BioSection>
            <BioYear>2022 - 2023</BioYear>
            Secretary of INSTIKI Computer System Student Association
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant={'section-title'}>
            Career
          </Heading>
          <BioSection>
            <BioYear>2024 - 2026</BioYear>
            Junior PHP Developer - PT Cemarne Balicasa TheEcolodges
          </BioSection>
          <BioSection>
            <BioYear>2022 - Now</BioYear>
            Fullstack Developer - Freelance
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant={'section-title'}>
            Tech Stack
          </Heading>
        </Section>
        <SimpleGrid columns={[2, 2, 2]} gap={2} align="center">
          <Section>
            <GridItem title={'Nuxt.JS'} thumbnail={NuxtImage}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Next.JS'} thumbnail={NextImage}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Node.JS'} thumbnail={NodeJs}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Typescript'} thumbnail={Typescript}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Python'} thumbnail={Python}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'FastApi'} thumbnail={FastApi}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Golang'} thumbnail={Golang}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Flutter'} thumbnail={Flutter}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Laravel'} thumbnail={Laravel}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Docker'} thumbnail={Docker}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Tailwind CSS'} thumbnail={Tailwind}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Nginx'} thumbnail={Nginx}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'Bash Scripting'} thumbnail={Bash}>
            </GridItem>
          </Section>
        </SimpleGrid>
        <Container style={{display: "flex", justifyContent : 'center', marginTop: '10px'}}>
          <Button style={{backgroundColor: "#5D12D2", color : "#fff", display: 'flex', alignItems: 'center'}}>
            <Link as={NextLink} style={{color : "white"}} href="/projects">See Project</Link>
          </Button>
        </Container>
      </Container>
    </Layout>
    
  )
}

export default Page;
