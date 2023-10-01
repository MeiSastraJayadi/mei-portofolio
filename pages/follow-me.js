import { Heading, Container, SimpleGrid, List, ListItem, Link, Button, Icon } from "@chakra-ui/react"
import Layout from "../components/layouts/out"
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { FaKaggle } from 'react-icons/fa'
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub
} from 'react-icons/io'


const Follow = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={23} mt={12} mb={5}>
          Follow Me
        </Heading>
        <Section>
          <Heading as={'h3'} variant={'section-title'}>
            Social Media
          </Heading>
          <Paragraph>
            I have some social media account. If you want to know more about me, You can check out my social Media.
            The link is down below. See yaaa.
          </Paragraph>
          <List mt={5}>
            <ListItem>
              <Link href="https://github.com/MeiSastraJayadi/" target="_blank">
                <Button fontSize={15} variant={'ghost'} colorScheme="purple" leftIcon={<Icon as={IoLogoGithub}/>}>
                  @MeiSastraJayadi
                </Button>
              </Link>
              <Link href="https://instagram.com/dekmei.___?igshid=NzZlODBkYWE4Ng==" target="_blank">
                <Button fontSize={15} variant={'ghost'} colorScheme="purple" leftIcon={<Icon as={IoLogoInstagram}/>}>
                  @dekmei.__
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/mei-sastra-jayadi-044625231/" target="_blank">
                <Button fontSize={15} variant={'ghost'} colorScheme="purple" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  Mei Sastra Jayadi
                </Button>
              </Link>
              <Link href="https://www.kaggle.com/meisastrajayadi" target="_blank">
                <Button fontSize={15} variant={'ghost'} colorScheme="purple" leftIcon={<Icon as={FaKaggle}/>}>
                  Mei Sastra Jayadi
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Follow;
