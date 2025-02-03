import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <img src={img} alt="not found" />
        <h3>page not found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to="/dashboard">back home</Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h3>something went wrong</h3>
    </div>
  );
};

export default Error;
