import styled from 'styled-components';
import logo from "../images/logo.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-bottom: 15%;
    background-color: hsl(260, 8%, 14%);

    @media screen and (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
        padding: 5% 0 0 0;
}
`

const Logo = styled.img`
    filter: invert(100%);
    width: 30%;
    margin-bottom: 15%;
    margin-top: 15%;
    @media screen and (min-width: 600px) {
        width: 10%;
        margin: 0;
}
`

const LinkContainer = styled.div`
    margin-bottom: 5%;
`

const Header = styled.h2`
    text-align: center;
    font-size: 1.1rem;
    color: #ffffff;
    margin-bottom: 15%;
    @media screen and (min-width: 600px) {
        text-align: left;
}
`

const Link = styled.a`
    display: block;
    text-align: center;
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 15%;
    @media screen and (min-width: 600px) {
        text-align: left;
}
`

export default function Footer(props) {
    return (
        <Wrapper>
            <Logo src={logo}></Logo>
            <LinkContainer>
                <Header>Features</Header>
                <Link>Link Shortening</Link>
                <Link>Branded Links</Link>
                <Link>Analytics</Link>
            </LinkContainer> 
            <LinkContainer>
                <Header>Resources</Header>
                <Link>Blog</Link>
                <Link>Developers</Link>
                <Link>Support</Link>
            </LinkContainer>
            <LinkContainer>
                <Header>Company</Header>
                <Link>About</Link>
                <Link>Our Team</Link>
                <Link>Careers</Link>
                <Link>Contact</Link>
            </LinkContainer>
        </Wrapper>
    )
}