import styled from 'styled-components';
import mobilebg from "../images/bg-boost-mobile.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    height: 260px;
    background-color: hsl(257, 27%, 26%);
    background-image: url(${mobilebg});
    background-position: center;
    background-size: cover;
`

const Header = styled.h2`
    text-align: center;
    font-weight: 800;
    line-height: 130%;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 5%;
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

export default function ActionCall(props) {
    return (
        <Wrapper>
            <Header>Boost your links today</Header>
            <HeroBtn>Get Started</HeroBtn>
        </Wrapper>
    )
}