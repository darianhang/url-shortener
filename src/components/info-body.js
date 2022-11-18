import styled from 'styled-components';
import Card from './card';
import badgeOne from "../images/icon-brand-recognition.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 5% 0;
`

const Header = styled.h2`
    text-align: center;
    font-weight: 800;
    line-height: 130%;
    font-size: 8vw;
    color: hsl(260, 8%, 14%);
    margin: 0 0 0 0;
    @media screen and (min-width: 600px) {
        font-size: 3vw;
}
`

const SubHeader = styled.h3`
    text-align: center;
    font-weight: 500;
    width: 320px;
    margin: 5% auto 15% auto;
    color: hsl(257, 7%, 63%);
    @media screen and (min-width: 600px) {
        font-size: 1.8vw;
        margin: 2% auto 0 auto;
        width: 50%;
}
`

export default function InfoBody() {
    return (
        <Wrapper>
            <Header>Advanced Statistics</Header>
            <SubHeader>Track how your links are performing across the web with our advanced statistics dashboard</SubHeader>
            <Card 
                badge={badgeOne}
                header="Brand Recognition"
                footer="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            />
            <Card 
                badge={badgeOne}
                header="Detailed Records"
                footer="Gain insights into who  is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Card 
                badge={badgeOne}
                header="Fully Customizable"
                footer="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
        </Wrapper>
    )
}