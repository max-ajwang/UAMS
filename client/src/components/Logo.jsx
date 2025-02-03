/*import logo from '../assets/images/logo.svg';*/
import logo from '../assets/images/logo.png';
import Wrapper from '../assets/wrappers/Logo';

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="leverpapers" className="logo" />
    </Wrapper>
  );
};

export default Logo;
