import styled from 'styled-components';
import Card from './card';
import badgeOne from "../images/icon-brand-recognition.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`

const Header = styled.h2`
    text-align: center;
    font-weight: 800;
    line-height: 130%;
    font-size: 8vw;
    color: hsl(260, 8%, 14%);
`

const SubHeader = styled.h3`
    text-align: center;
    font-weight: 500;
    width: 320px;
    margin: 5% auto 8% auto;
    color: hsl(257, 7%, 63%)
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
        </Wrapper>
    )
}