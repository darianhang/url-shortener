import styled from 'styled-components';
import mobilebg from "../images/bg-boost-mobile.svg"
import React from 'react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    height: 220px;
    margin: 20% auto 5% auto;
    border-radius: 12px;
    background-color: hsl(257, 27%, 26%);
    background-image: url(${mobilebg});
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 600px) {
        margin: 5% auto 5% auto;
        height: 150px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
}
`

const InputWarpper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60px;
    @media screen and (min-width: 600px) {
        position: relative;
        height: 100%;
        justify-content: center;
        width: 58vw;
        margin: 0 2% 0 0;
}
`

const LinkInput = styled.input`
    width: 80%;
    height: 60px;
    margin: 0 auto 1.5% auto;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    &:focus {
        outline-color: hsl(0, 87%, 67%);
        outline-width: 2px;
        outline-style: solid;
    }
    padding: 5%;
    @media screen and (min-width: 600px) {
        margin: 0 5% 0 0;
        width: 100%;
        height: 50px;
        padding: 0 0 0 5%;
}
`

const LinkBtn = styled.button`
    width: 80%;
    height: 25%;

    border: none;
    border-radius: 5px;
    background-color: hsl(180, 66%, 49%);
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
    transition: all 650ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;

&:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

}

&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

@media screen and (min-width: 600px) {
    margin: 0 0 0 0;
    width: 20%;
    height: 50px;
}
`

const UrlAlert = styled.p`
    color: hsl(0, 87%, 67%);
    font-weight: 400;
    padding: 0.5% 0 0 11%;
    font-size: 14px;
    @media screen and (min-width: 600px) {
    position: absolute;
    padding-top: 0;
    top: 110px;
    left: -6.3vw;
}
    
`

export default function Shortener(props) {

    function validURL(str) {
        let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

    const [link, setLink] = React.useState("")
    const [urlAlert, setUrlAlert] = React.useState("")

    function Alert(err) {
        setUrlAlert(err)
    }

    function shorten(link) {
        console.log(link)
        if (validURL(link)) {
            fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((response) => {
                if (response.ok) {
                    Alert("")
                    return response.json();
                  }
                  throw new Error('Something went wrong');
                })  .then((data) => props.setShort((current) => [...current, {shortLink: data.result.short_link, longLink: link}]));
            }
        else {
            console.log("Please enter a valid URL")
            Alert("Please enter a valid URL")
        }
    }

    return (
        <Wrapper>
            <InputWarpper>
                <LinkInput placeholder='Shorten a link here...' value={link} onChange={(e) => setLink(e.target.value)}></LinkInput>
                <UrlAlert>{urlAlert}</UrlAlert>
            </InputWarpper>
            <LinkBtn onClick={() => shorten(link)}>Shorten It!</LinkBtn>
        </Wrapper>
    )
}