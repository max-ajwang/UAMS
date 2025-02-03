import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .authLogo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    height: 7.015em;
    width: 15.5em;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-1000);
  }
  h4 {
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
