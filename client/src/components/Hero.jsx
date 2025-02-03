import Wrapper from '../assets/wrappers/Hero';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="info">
          <h1>
            Request for<span> Paybills </span>and <span> Account Numbers </span>{' '}
            <br />
            from your favorite Bank & TelCo
          </h1>
          <p>Create an account to explore.</p>
          <Link to="/login" className="btn register-link">
            Create an Account to continue
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
