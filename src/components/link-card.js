import styled from 'styled-components';
import mobilebg from "../images/bg-boost-mobile.svg"
import React from 'react';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 85%;
height: 200px;
margin: 5% auto 5% auto;
border-radius: 12px;
background-color: #FFFFFF;
`

export default function LinkCard(props) {
    return (
        <Wrapper>
            <div>Hello</div>
            <h1>{props.shortLink}</h1>
        </Wrapper>
    )
}