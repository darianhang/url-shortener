import styled from 'styled-components';
import mobilebg from "../images/bg-boost-mobile.svg"
import React from 'react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 200px;
    margin: 20% auto 5% auto;
    border-radius: 12px;
    background-color: hsl(257, 27%, 26%);
    background-image: url(${mobilebg});
    background-position: center;
    background-size: cover;
`
const LinkInput = styled.input`
    width: 80%;
    height: 25%;
    margin: 10% auto 5% auto;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    &:focus {
        outline-color: hsl(0, 87%, 67%);
        outline-width: 2px;
        outline-style: solid;
    }
    padding: 5%;
`

const LinkBtn = styled.button`
    width: 80%;
    height: 25%;
    margin: 5% auto 10% auto;
    border: none;
    border-radius: 5px;
    background-color: hsl(180, 66%, 49%);
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
`

export default function Shortener() {

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

    function poop() {
        console.log(link)
        console.log(validURL(link))
    }

    function shorten(link) {
        console.log(link)
        if (validURL(link)) {
            fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then((response) => response.json())
            .then((data) => console.log(data.result.short_link));
        }
        else {
            console.log("Please enter a valid URL")
        }
    }

    return (
        <Wrapper>
            <LinkInput value={link} onChange={(e) => setLink(e.target.value)}></LinkInput>
            <LinkBtn onClick={() => shorten(link)}>Shorten It!</LinkBtn>
        </Wrapper>
    )
}