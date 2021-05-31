import { useState} from 'react';
import styled from 'styled-components';
import naela from './img/naela.png'
import dafne from './img/dafne.png'
import apostrophe from './img/apostrophe.jpg'
import hotel from './img/hotel.jpeg'
import barkwood from './img/barkwood.jpeg'
import dafne_car from './img/dafne_car.jpg'
import everyone from './img/everyone.jpg'

const story = [
  {
    text: "You know. I've been thinking. Mom's been taking such great care of us. Maybe we should get her something for her birthday. What do you think, Naela?",
    image: dafne
  },
  {
    text: "Yes! Yes! Yes!!!! She's great!!!! Let's do it!!!!!!!!!!! Lick!",
    image: naela
  },
  {
    text: "Wonderful. What do you think Apostrophe?",
    image: dafne
  },
  {
    text: "ZZZZZZZZZZZ...",
    image: apostrophe
  },
  {
    text: "I'll take that as a yes. Earlier I was talking with Apostrophe and he had a good idea. There were some gifts that Mom and Dad didn't get to use last year because of this weird human flu thing that I guess some people had.",
    image: dafne
  },
  {
    text: `So I think we should get them a night at the historic Hotel Northhampton so they can finally use their gift certificate to East Heaven`,
    image: hotel
  },
  {
    text: "YES! YES! YES!! Great idea!!!! I can't wait to go!!!! I'm gonna jump all around!!! And eat a bunch!!! And lick EVERYTHING!!!!!!!!!!!!!",
    image: naela
  },
  {
    text: "Well, here's the thing... I was thinking, and this may be crazy, that maybe, just maybe, they may want us to entertain ourselves sometimes. Maybe we should just let them go on their own...",
    image: dafne
  },
  {
    text: "Impossible!!!!!!! No! No! No!",
    image: naela
  },
  {
    text: "What about if I got us reservations at the swankiest pet hotel in town? The Barkwood Inn Pet Resort!",
    image: barkwood
  },
  {
    text: "That looks AMAZING!! You're the best big sister ever!!!!!!! I love you!!! LICK!!!! LICK!!!! LICK!!!!",
    image: naela
  },
  {
    text: "Great! I'll drive then! Any last thoughts Apostrophe?",
    image: dafne_car
  },
  {
    text: "ZZZZZZZZZZZ...",
    image: apostrophe
  },
  {
    text: "Happy birthday! Love, all of us!!!!",
    image: everyone
  },
]


const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 600px;
  position: relative;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background: #a53ab7;
  color: #52ff48;
  font-weight: bold;
  font-size: 24px;
`;

const Previous = styled.div`
  position: absolute;
  left: 20px;
  top: 10px;
`;

const Next = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;


export const Text = styled.h1`
  width: 100%;
  font-size: 18px;

`;

export const Image = styled.img`
  width: 100%;
`;

// const sceneList = [<Scene1 />, <Scene2 />]

function App() {
  const [currentScene, setCurrentScene] = useState(0)
  return (
    <Container>
      
      <Text>{ story[currentScene].text }</Text>
      <Image src = { story[currentScene].image } />
      <Footer>
        {currentScene > 0 && (
          <Previous onClick={() => setCurrentScene(currentScene - 1)}>Previous!</Previous>
        )}
        {currentScene < story.length - 1 && (
          <Next onClick={() => setCurrentScene(currentScene + 1)}>Next!</Next>
        )}
      </Footer>
    </Container>
  );
}

export default App;
