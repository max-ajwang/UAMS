import Wrapper from '../assets/wrappers/ServiceFeatures';

const ServiceFeatures = () => {
  return (
    <Wrapper>
      <div className="serviceFeatures">
        <h2>Service Features</h2>
        <div className="serviceInfo">
          <div className="feature">
            <h4>24/7 Support</h4>
            <p>
              Our support works around the clock for the best customer
              experience. You can make an inquiry at any time.
            </p>
          </div>

          <div className="feature">
            <h4>Plagiarism Report</h4>
            <p>
              Request a plagiarism report for your paper and we will provide it
              instantly at zero cost.
            </p>
          </div>

          <div className="feature">
            <h4>Unlimited Revisions</h4>
            <p>
              Our writers work on unlimited revision at no extra charges. We
              will make the necessary changes on your paper in the shortest time
              possible.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ServiceFeatures;
