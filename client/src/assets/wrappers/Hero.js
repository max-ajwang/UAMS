import styled from 'styled-components';
import img from '../images/main.png';

const Wrapper = styled.section`
  .hero {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    /* background-image: url(${img}); */
    /* background: linear-gradient(
      to right,
      var(--primary-100),
      var(--primary-1000)
    ); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0em 1.5em;
    margin-top: var(--nav-height);
  }

  h1 {
    color: var(--black);
    font-weight: 700;
    span {
      color: var(--primary-1000);
    }
    margin-bottom: 1.5rem;
  }

  .info p {
    line-height: 2;
    color: var(--white);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .register-link {
    margin-right: 1rem;
  }

  .btn {
    padding: 0.75rem 1rem;
  }

  @media (min-width: 992px) {
    .hero {
      padding: 0em 5em;
    }

    .info {
      margin-top: 10em;
    }

    .info p {
      font-size: large;
    }
  }
`;

export default Wrapper;
