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
    @media screen and (min-width: 600px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin: 5% 0 0 0;
        padding-top: 5%;
        height: 40vw;
}
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 600px) {
    margin: 0 0 0 10%;
}
`

const HeroImgWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 10%;
    @media screen and (min-width: 600px) {
    width: 100%;
    width: auto;
    justify-self: flex-end;
}

`

const HeroImg = styled.img`
@media screen and (min-width: 600px) {
    position: absolute;
    height: 35vw;
    top: -40px;
    right: -15vw;
}
`

const HeroTitle = styled.h1`
    text-align: center;
    font-weight: 800;
    line-height: 130%;
    font-size: 10vw;    
    color: hsl(260, 8%, 14%);
    @media screen and (min-width: 600px) {
    text-align: left;
    width: 100%;
    font-size: 5vw;
}
`

const HeroSubtitle = styled.h3`
    text-align: center;
    font-weight: ;
    width: 320px;
    margin: 5% auto 8% auto;
    color: hsl(257, 7%, 63%);

    @media screen and (min-width: 600px) {
    text-align: left;
    margin: 0 0 0 0;
    font-size: 1.5vw;
    width: 60%;
}
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

    @media screen and (min-width: 600px) {
    text-align: center;
    margin: 5% 0 8% 0;
    width: 25%;
    height: 5vw;
    font-size: 2vw;
}
`

export default function Hero() {
    return (
        <HeroWrapper>
            <HeroImgWrapper>
                <HeroImg src={hero}></HeroImg>
            </HeroImgWrapper>
            <InfoContainer>
                <HeroTitle>
                    More than just <br /> shorter links
                </HeroTitle>
                <HeroSubtitle>
                    Build your brands recognition and get detailed insights on how your links are performing.
                </HeroSubtitle>
                <HeroBtn>Get Started</HeroBtn>
            </InfoContainer>
        </HeroWrapper>
    )
}