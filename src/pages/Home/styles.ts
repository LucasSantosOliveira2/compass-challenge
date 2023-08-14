import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0px 30px;
    gap: 30px;
    @media screen and (min-width: 768px) {
        gap: 100px;
        padding: 80px 100px;
 }
`
export const Description = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
    span {
        color: ${(props) => props.theme.colors.background};
    }

    @media screen and (min-width: 768px) {
        font-size: 3rem; 
    }

    @media screen and (min-width: 1024px) {
        font-size: 3.5rem;
    }
`

const moveAnimation = keyframes`
  0%, 100% {
    transform: translateX(20%);
  }
  50% {
    transform: translateX(150%);
  }
  
`

const moveAnimationNew = keyframes`
  0%, 100% {
    transform: translateY(-20%);
  }
  50% {
    transform: translateY(16%);
  }
`

export const Animation = styled.span`
    width: 100%;
    max-width: 65px;
    height: 35px;
    display: inline-flex;
    border-radius: 50px;
    background: #FFEDD0;  
    align-items: center;
    @media screen and (min-width: 768px) {
        max-width: 85px; 
        height: 40px ;
    }
    @media screen and (min-width: 1024px) {
        max-width: 105px;
        height: 55px;
    }
`

export const AnimationBackground = styled(Animation)`
    background: #FFD0D0; 

`

export const Banana = styled.img`
    width: 100%;
    max-width: 26px;
    animation: ${moveAnimation} 2s linear infinite; 
    
    @media screen and (min-width: 768px) {
        max-width: 32px;
    }
    @media screen and (min-width: 1024px) {
        max-width: 37px;
    }
`

export const Apple = styled(Banana)`
    margin: 18px;
    animation: ${moveAnimationNew} 1s linear infinite;
    @media screen and (min-width: 768px) {
        margin: 25px;
    }
    @media screen and (min-width: 1024px) {
        margin: 32px;
    }
`

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`

export const SecondContainer = styled.div`
    display: flex;	
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
`

export const CardContainer = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    align-items: center;

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`


export const CarouselContainer = styled(motion.div)`
    display: none;
    @media screen and (min-width: 1024px) {
        width: 100%;
        display: flex;
        height: 500px;
        overflow: hidden;
        cursor: grab;
        align-items: center;
  }
`
export const ImageCarousel = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  height: 380px;
  pointer-events: none;
`
export const Headling = styled.div`
@media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-150%);
  }
`


export const Inner = styled(motion.div)`
    display: flex;
    gap: 40px;
    cursor: grab;
    animation: ${slideAnimation} 10s linear infinite;
`

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #404040;
`