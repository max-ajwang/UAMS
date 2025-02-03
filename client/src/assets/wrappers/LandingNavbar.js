import styled from 'styled-components';

const Wrapper = styled.section`
  /*
=============== 
Navbar
===============
*/
  nav {
    background: var(--white);
    box-shadow: var(--shadow-1);
    margin: 0 auto;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--primary-1000);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .nav-toggle:hover {
    color: var(--primary-700);
    transform: rotate(90deg);
  }

  .logoContainer {
    height: 4.015em;
    width: 15.5em;
  }

  .links a {
    color: var(--black);

    font-size: 1.25rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: block;
    padding: 1rem 2rem;
    transition: var(--transition);
  }

  .links a:hover {
    color: var(--primary-1000);
    padding-left: 1.5rem;
    background: transparent;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
    display: flex;
    align-items: center;
  }

  .show-container {
    height: 10rem;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      height: var(--nav-height);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 1em 0.5rem;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

export default Wrapper;
