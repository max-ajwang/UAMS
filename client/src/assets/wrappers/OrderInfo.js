import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .order-label {
    font-size: 1rem;
    color: var(--primary-300);
    text-transform: capitalize;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }
  .order-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`;
export default Wrapper;
