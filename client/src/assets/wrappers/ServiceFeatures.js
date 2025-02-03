import styled from 'styled-components';

const Wrapper = styled.section`
  .serviceFeatures {
    background-color: var(--primary-1000);
    box-shadow: var(--shadow-4);
  }
  .serviceInfo {
    /* background-color: var(--primary-900); */
    padding: 1em 4em 1em 4em;
  }

  .feature {
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-4);
    padding: 0.5em;
    margin: 1em;
    background-color: var(--white);
  }

  h2 {
    padding: 1em 0;
    font-weight: 600;
    text-align: center;
  }

  h4 {
    color: var(--primary-1000);
    margin: 1em auto;
    font-weight: 600;
  }

  p {
    line-height: 2;
    letter-spacing: var(--letter-spacing);
  }

  @media (min-width: 992px) {
    .serviceFeatures {
    }

    .serviceInfo {
      display: flex;
      gap: 2em;
    }

    h2 {
      text-align: center;
      padding: 0 auto;
    }

    .feature {
      float: left;
      width: 33.33%;
    }
  }
`;

export default Wrapper;
