import styled from 'styled-components';

const Wrapper = styled.section`
  .mileStonesContainer {
    padding: 1em 0em 0em 0em;
    display: grid;
    background-color: var(--white);
  }

  h2 {
    padding: 0.5em 0;
    font-weight: 600;
    text-align: center;
  }

  ul {
    padding-top: 0.1em;
    padding-right: 2em;
    padding-left: 2em;
    padding-bottom: 2em;
    margin: 0 auto;
    align-items: center;
  }

  .mileStonesSections {
    margin-bottom: 2em;
  }

  .mileStonesSections li {
    background-color: var(--primary-1000);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    /* object-fit: cover; */
    border: 2px solid var(--grey-900);
    box-shadow: var(--shadow-4);
    text-align: center;
    margin: 1em 0.5em 1em 1em;
    padding: 1.75em 0;
    font-weight: 600;
  }

  h3 {
    margin-bottom: 0.5em;
    font-weight: 600;
  }

  @media (min-width: 992px) {
    ul {
      display: flex;
    }
  }
`;

export default Wrapper;
