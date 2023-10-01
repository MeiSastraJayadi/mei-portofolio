import NextLink from 'next/link';
import {
  Box, 
  Stack, 
  Link, 
  Heading, 
  Menu, 
  MenuItem, 
  MenuList, 
  MenuButton, 
  IconButton, 
  Flex,
  useColorModeValue,
  Container
} from '@chakra-ui/react' 
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from './theme-toggle-button';
import Logo from './logo';

const LinkItem = ({ href, path, children }) => {
  const active = path === href; 
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900')
  return (
      <Link 
        as={NextLink}
        href={href}
        bg={active ? '#5D12D2' : undefined}
        p={2}
        color={active ? '#fff' : inactiveColor}
      >
        {children}
      </Link>
  );
}

const Navbar = props => {
  const { path } = props;
  
  return (
    <Box 
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{backdropFilter:'blur(10px)'}}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW={'container.md'}
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align="center" mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo/>
          </Heading>
        </Flex>
        <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          alignItems={'center'}
          flexGrow={1}
          mt={{base:4, nmd: 0}}
        >
          <LinkItem href={'/'} path={path}>
            About 
          </LinkItem>
          <LinkItem href={'/projects'} path={path}>
            Projects
          </LinkItem>
          <LinkItem href={'/follow-me'} path={path}>
            Follow Me
          </LinkItem>
        </Stack>
        <Box flex={1} align='right'>
          <ThemeToggleButton/>
          <Box ml={2} display={{base: 'inline-block', md:'none'}}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon/>} 
                variant={'outline'} aria-label='Options'/>
              <MenuList>
                {/* <NextLink href={'/'} passHref> */}
                  <MenuItem as={NextLink} href={'/'} passHref>About</MenuItem>
                {/* </NextLink> */}
                {/* <NextLink href={'/works'} passHref> */}
                  <MenuItem as={NextLink} href={'/projects'} passHref>Projects</MenuItem>
                {/* </NextLink> */}
                {/* <NextLink href={'/posts'} passHref> */}
                  <MenuItem as={NextLink} href={'/follow-me'} passHref>Follow Me</MenuItem>
                {/* </NextLink> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar;
