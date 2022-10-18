import styled from 'styled-components';
import mobilebg from "../images/bg-boost-mobile.svg"
import React from 'react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 150px;
    margin: 5% auto 5% auto;
    border-radius: 12px;
    background-color: #FFFFFF;
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    margin: 0 auto 0 auto;
    border-radius: 12px 12px 0 0;
    border-bottom: 1px solid #808080;
`

const ShortLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto 0 auto;
`

const OgLink = styled.div`
    margin-left: 5%;
    font-weight: 600;
    color: hsl(260, 8%, 14%);
    font-size: 16px;
`

const ShortLink = styled.div`
    margin-left: 5%;
    font-weight: 500;
    color: hsl(180, 66%, 49%);
    font-size: 16px;
`

const CopyBtn = styled.button`
    border: none;
    border-radius: 5px;
    width: 90%;
    height: 35px;
    margin: 3% auto 0 auto;
    background-color: hsl(180, 66%, 49%);
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
`

export default function LinkCard(props) {
    return (
        <Wrapper>
            <LinkWrapper>
                <OgLink>{props.ogLink}</OgLink>
            </LinkWrapper>
            <ShortLinkWrapper>
                <ShortLink>{props.shortLink}</ShortLink>
                <CopyBtn>Copy</CopyBtn>
            </ShortLinkWrapper>
        </Wrapper>
    )
}