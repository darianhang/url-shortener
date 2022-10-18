import styled from 'styled-components';
import hero from "../images/illustration-working.svg"

const Logo = styled.img`
    padding: 30px 0 0 30px
`

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    overflow-x: hidden;
`

const HeroImg = styled.img`
    width: 150%;
    padding: 10%;
`

const HeroTitle = styled.h1`
    text-align: center;
    font-weight: 800;
    line-height: 130%;
    font-size: 10vw;
    color: hsl(260, 8%, 14%);
`

const HeroSubtitle = styled.h3`
    text-align: center;
    font-weight: 500;
    width: 320px;
    margin: 5% auto 8% auto;
    color: hsl(257, 7%, 63%)
`

const HeroBtn = styled.button`
    border: none;
    border-radius: 32px;
    width: 50%;
    height: 60px;
    margin: 0 auto 0 auto;
    background-color: hsl(180, 66%, 49%);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
`

export default function Hero() {
    return (
        <HeroWrapper>
            <HeroImg src={hero}></HeroImg>
            <HeroTitle>
                More than just <br /> shorter links
            </HeroTitle>
            <HeroSubtitle>
                Build your brands recognition and get detailed insights on how your links are performing.
            </HeroSubtitle>
            <HeroBtn>Get Started</HeroBtn>
        </HeroWrapper>
    )
}