import { useState } from 'react';
import GlobalStyle from './GlobalStyle.ts';
import Slide from './Slide';

const slides = [
  {
    text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
    avatar: '/assets/images/image-tanya.jpg'
  },
  {
    text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    avatar: '/assets/images/image-john.jpg'
  }
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const numSlides = slides.length;
  return (
    <>
      <GlobalStyle />
      <Slide
        slide={slides[activeSlide]}
        numSlides={numSlides}
        onActiveSlide={setActiveSlide}
      />
    </>
  );
}

export default App;
