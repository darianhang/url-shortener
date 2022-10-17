import styled from 'styled-components';
import logo from "../images/logo.svg"

const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
`

const Logo = styled.img`
    padding: 30px 0 0 30px
`

const Hamburger = styled.div`

`

export default function NavBar() {
    return (
        <NavigationBar>
            <Logo src={logo}></Logo>
            <Hamburger>
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>  
            </Hamburger>
        </NavigationBar>
    )
}