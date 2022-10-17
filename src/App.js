import styled from 'styled-components';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import Shortener from './components/shortener';
import LinkCard from './components/link-card';

const Wrapper = styled.div`
  background-image: linear-gradient(#efefef, #efefef);
  background-position: 0 100px;
`

const Bg = styled.div`
`

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Wrapper>
        <Bg/>
        <Shortener />
        <LinkCard />
      </Wrapper>
    </div>
  );
}

export default App;
