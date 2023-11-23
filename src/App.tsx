import { useState } from 'react';
import GlobalStyle from './GlobalStyle';

const slides = [
  {
    text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
    avatar: 'src/assets/images/image-tanya.jpg'
  },
  {
    text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    avatar: 'src/assets/images/image-john.jpg'
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

function Slide({ slide, numSlides, onActiveSlide }) {
  console.log(slide.avatar);
  return (
    <main>
      <p>{slide.text}</p>
      <p>
        <span>{slide.name}</span> <span>{slide.title}</span>
      </p>
      <img
        src={slide.avatar}
        alt={slide.name}
      />

      <div className="buttons">
        <button
          onClick={() =>
            onActiveSlide((prevVal) => (prevVal > 0 ? prevVal - 1 : prevVal))
          }
        >
          {'<'}
        </button>

        <button
          onClick={() =>
            onActiveSlide((prevVal) =>
              prevVal < numSlides - 1 ? prevVal + 1 : prevVal
            )
          }
        >
          {'>'}
        </button>
      </div>
    </main>
  );
}

export default App;
