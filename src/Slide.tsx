import styled from 'styled-components';

export default function Slide({ slide, numSlides, onActiveSlide }) {
  console.log(slide.avatar);
  return (
    <StyledMain>
      <div className="col-left-wrapper">
        <div className="col-left">
          <p className="text">&ldquo;{slide.text}&rdquo;</p>
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
              src="src/assets/images/icon-prev.svg"
              alt="Previous"
              onClick={() =>
                onActiveSlide((prevVal) =>
                  prevVal > 0 ? prevVal - 1 : prevVal
                )
              }
            />

            <img
              className="button"
              src="src/assets/images/icon-next.svg"
              alt="Next"
              onClick={() =>
                onActiveSlide((prevVal) =>
                  prevVal < numSlides - 1 ? prevVal + 1 : prevVal
                )
              }
            />
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-image: url(src/assets/images/pattern-curve.svg);
  background-repeat: no-repeat;
  background-position-x: 30%;
  background-position-y: 120%;
  min-height: 100vh;

  .col-left-wrapper {
    display: flex;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-image: url(src/assets/images/pattern-quotes.svg);
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
    background-image: url('src/assets/images/pattern-bg.svg');
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
      transform: translateY(-50%);
    }

    .button {
      cursor: pointer;
    }
  }

  @media all and (min-width: 768px) {
    flex-direction: row;
  }

  .col-left-wrapper {
    .col-left {
      text-align: start;
      width: 100%;
      max-width: 60%;

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
`;
