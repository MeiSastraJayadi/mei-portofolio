import Image from "next/image";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";


const LogoBox = styled.span`
  font-weight:bold; 
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 10px; 
  padding: 18px; 

  &:hover img{
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const GlassesLogo =  `/images/logo.png`;
  
  return (
    <Link href="/">
        <LogoBox>
          <Image src={GlassesLogo} width={40} height={40} alt="Mei Logo"/>
          <Text 
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight={'bold'}>
              Mei Sastra Jayadi
          </Text>
        </LogoBox>
    </Link>
  );
}

export default Logo;
