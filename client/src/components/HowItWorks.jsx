import React, { useState } from 'react';
import data from './HowItWorksData';
import SingleStep from './HowItWorksSteps';
import Wrapper from '../assets/wrappers/HowItWorks';

const HowItWorks = () => {
  const [steps, setSteps] = useState(data);
  return (
    <Wrapper>
      <div className="container">
        <div className="howItWorksSection">
          <h2>How It Works</h2>
          <section className="howItWorksContainer">
            {steps.map((step) => {
              return <SingleStep key={step.id} {...step}></SingleStep>;
            })}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
export default HowItWorks;
