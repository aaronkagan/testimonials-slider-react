import { useEffect } from 'react';
import styled from 'styled-components';

interface SlideType {
  text: string;
  name: string;
  title: string;
  avatar: string;
}

interface SlideProps {
  slide: SlideType;
  numSlides: number;
  onActiveSlide: (callback: (prevVal: number) => number) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, numSlides, onActiveSlide }) => {
  function handleButtonPrev() {
    onActiveSlide((prevVal: number) => (prevVal > 0 ? prevVal - 1 : prevVal));
  }
  function handleButtonNext() {
    onActiveSlide((prevVal: number) =>
      prevVal < numSlides - 1 ? prevVal + 1 : prevVal
    );
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') handleButtonPrev();
    if (e.key === 'ArrowRight') handleButtonNext();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <StyledMain>
      <div className="col-left-wrapper">
        <div className="col-left">
          <p className="text">&ldquo; {slide.text} &rdquo;</p>
          <p className="person">
            <span className="name">{slide.name}</span>{' '}
            <span className="title">{slide.title}</span>
          </p>
        </div>
      </div>

      <div className="col-right-wrapper">
        <div className="col-right">
          <img
            className="avatar"
            src={slide.avatar}
            alt={slide.name}
          />

          <div className="buttons">
            <img
              className="button"
              src="/assets/images/icon-prev.svg"
              alt="Previous"
              onClick={handleButtonPrev}
            />

            <img
              className="button"
              src="/assets/images/icon-next.svg"
              alt="Next"
              onClick={handleButtonNext}
            />
          </div>
        </div>
      </div>
    </StyledMain>
  );
};

export default Slide;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  min-height: 100vh;

  .col-left-wrapper {
    display: flex;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/pattern-quotes.svg');
      background-repeat: no-repeat;
      background-size: 14%;
      left: 44%;
      top: -10%;

      position: absolute;
    }

    .col-left {
      text-align: center;
      width: 85%;
      max-width: 450px;

      .text {
        font-size: 1.8rem;
        line-height: 2.4rem;
        font-weight: 300;
        color: var(--dark-blue);
        margin-bottom: 1.9rem;
      }

      .person {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;

        .name {
          color: var(--dark-blue);
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 2rem;
          margin-bottom: -0.5rem;
        }

        .title {
          color: var(--grayish-blue);
          line-height: 2.8rem;
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }
  }

  .col-right-wrapper {
    background-image: url('/assets/images/pattern-bg.svg');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    padding-top: 5.4rem;
  }

  .col-right {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 25.4rem;
    }
    .buttons {
      border-radius: 9999px;
      width: 8rem;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      padding: 1.4rem 1.7rem;
      transform: translate(0, -50%);
      box-shadow: 0 10px 60px hsl(240, 11.475409836065579%, 80%);
    }

    .button {
      cursor: pointer;
    }
  }

  @media all and (min-width: 1400px) {
    flex-direction: row;
    gap: 0rem;

    .col-left-wrapper {
      .col-left {
        text-align: start;
        width: 100%;
        max-width: 90rem;
        transform: translateX(20rem);

        .text {
          font-size: 3.2rem;
          line-height: 4.4rem;
          margin-bottom: 3.2rem;
        }

        .person {
          flex-direction: row;
          align-items: center;
          margin-bottom: 0;
          gap: 1rem;

          .name {
            margin-bottom: 0;
            font-size: 2rem;
            line-height: 3.8rem;
          }

          .title {
            font-size: 2rem;
            line-height: 3.8rem;
          }
        }
      }
    }

    .col-right-wrapper {
      .col-right {
        .avatar {
          width: 100%;
          max-width: 56rem;
        }

        .buttons {
          transform: translate(-200%, -50%);
        }
      }
    }
  }
`;
