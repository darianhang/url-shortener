import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center ;
    width: 85%;
    height: 260px;
    padding: 5%;
    border-radius: 15px;
    margin-top: 10%;
    margin-bottom: 10%;
    @media screen and (min-width: 600px) {
        width: 25vw;
        height: 18vw;
        margin: 12% 0 5% 0;
}
`

const Header = styled.h2`
    text-align: center;
    font-weight: 800;
    line-height: 130%;
    font-size: 5vw;
    color: hsl(260, 8%, 14%);
    margin-top: 15%;
    @media screen and (min-width: 600px) {
        font-size: 1.5vw;
        text-align: left;
}
`

const SubHeader = styled.h3`
    font-size: 1em;
    text-align: center;
    font-weight: 600;
    width: 95%;
    margin: 5% auto 0 auto;
    color: hsl(257, 7%, 63%);
    @media screen and (min-width: 600px) {
        font-size: 1vw;
        text-align: left;
        margin: 5% 0 0 0
}
`

const BadgeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    left:0;
    right:0;
    top: -50px;
    margin-left:auto;
    margin-right:auto;
    width: 100px;
    height: 100px;
    background-color: hsl(257, 27%, 26%);
    border-radius: 50%;
    margin: auto;
    @media screen and (min-width: 600px) {
        width: 6vw;
        height: 6vw;
        top: -3vw;
        right: 12vw;
}
`

const Badge = styled.img`
    width: 50%;
    margin: auto;
`

export default function Card(props) {
    return (
        <Wrapper>
                <BadgeWrapper>
                    <Badge src={props.badge}></Badge>
                </BadgeWrapper>
            <Header>{props.header}</Header>
            <SubHeader>{props.footer}</SubHeader>
        </Wrapper>
    )
}