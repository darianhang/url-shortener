import styled from 'styled-components';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import Shortener from './components/shortener';
import LinkCard from './components/link-card';
import InfoBody from './components/info-body';
import React from 'react';
import ActionCall from './components/action-call';
import Footer from './components/footer';

const Wrapper = styled.div`
  background-image: linear-gradient(#efefef, #efefef);
  background-position: 0 100px;
`

const Bg = styled.div`
`

function App() {
  const [shortLinks, setShortLinks] = React.useState([])
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Wrapper>
        <Bg />
        <Shortener 
          setShort={setShortLinks}
        />
        {shortLinks.map((x) => {
          return (
            <LinkCard
              ogLink={x.longLink}
              shortLink={x.shortLink}
            />
          )
        })}
        <InfoBody />
        <ActionCall />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
