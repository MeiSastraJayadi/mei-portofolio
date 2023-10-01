import { Box, 
  Container, 
  Heading, Image, 
  SimpleGrid, 
  useColorModeValue} from "@chakra-ui/react";
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
import Tensorflow from '../public/images/tensorflow-original.svg'
import Css from '../public/images/css3-original.svg';
import Html from '../public/images/html5-original.svg';
import Laravel from '../public/images/laravel-plain.svg'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
            bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} px={8} py={4}
            borderRadius={'lg'} color={useColorModeValue('blackAlpha.700', 'white')}
            marginBottom={6}
        >
          Hello, I am a FullStack Developer from Bali
        </Box>
        <Box display={{ md:'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant={"page-title"}>
              I Made Mei Sastra Jayadi
            </Heading>
            <p>Student / Developer</p>
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
              src="/images/mei.jpeg"
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
            Hi, I am Mei. I am a Balinese Developer. 
            I ussualy develop a web application or mobile application.
            I very interested on data science, backend development, and mobile development field 
            . I love to play guitar and love to listen rock music.
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
            <BioYear>2021 - Present</BioYear>
            Study in Institut Bisnis dan Teknologi Indonesia (INSTIKI)
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
            Tech Stack
          </Heading>
        </Section>
        <SimpleGrid columns={[2, 2, 2]} gap={2} align="center">
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
            <GridItem title={'Tensorflow'} thumbnail={Tensorflow}>
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
            <GridItem title={'CSS'} thumbnail={Css}>
            </GridItem>
          </Section>
          <Section>
            <GridItem title={'HTML'} thumbnail={Html}>
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
    
  )
}

export default Page;
