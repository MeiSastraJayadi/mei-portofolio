import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay  } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ title, thumbnail }) => ( 
  <Box w={'50%'} align='center'>
    <LinkBox cursor='none'>
      <Image src={thumbnail} alt={title} className='grid-item-thumbnail'
      loading='lazy'/>
      <Text mt={2}>{title}</Text>
    </LinkBox>
  </Box>
);

export const ProjectGridItem = ({ children, href, id, title, thumbnail }) => ( 
  <Box w="100%" align="center">
    <LinkBox as={NextLink} href={href} target='_blank' cursor={'pointer'}>
      <Image src={thumbnail} 
        alt={title} 
        className='grid-item-thumbnail' 
        placeholder='blur'/> 
      <Box>
        <Text mt={2} fontSize={20} >
          {title}
        </Text>
        <Text fontSize={14}>
          {children}
        </Text>
      </Box>
    </LinkBox>
  </Box>
);


export const GridItemStyle = () => {
  <Global styles={`
        .grid-item-thumbnail {
      border-radius: 12ps;
    }
  `}/>
}

