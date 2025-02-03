import styled from 'styled-components';

const Wrapper = styled.section`
  .howItWorksSection {
    background-color: var(--white);
    min-height: 100vh;
    /* using flex because of better browser support */
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .howItWorksContainer {
    margin: 0em 0em 0em 0em;
    padding: -15em 0em 2em 0em;
  }

  h2 {
    margin: 0.2em 0em 0.25em 0em;
    font-weight: 600;
    text-align: center;
  }

  .step {
    background-color: var(--primary-1000);
    padding: 1rem 1.5rem;
    width: var(--min-width);
    border: 2px solid var(--grey);
    margin: 1rem 4rem 1rem 4rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-3);
  }
  .step h5 {
    text-transform: none;
    line-height: 1.5;
  }
  .step p {
    color: var(--black);
    margin-bottom: 0;
    margin-top: 0.5rem;
    letter-spacing: var(--letter-spacing);
    line-height: 1.5;
  }
  .step header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .step header h5 {
    margin-bottom: 0;
  }
  .step-btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--grey);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--red);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }

  @media screen and (min-width: 992px) {
    .howItWorksSection {
      display: grid;
    }

    h2 {
      text-align: center;
      padding: 0 auto;
    }
  }
`;

export default Wrapper;
