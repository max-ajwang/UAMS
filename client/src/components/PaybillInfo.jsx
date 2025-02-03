import React from 'react';
import Wrapper from '../assets/wrappers/OrderInfo';

const PaybillInfo = ({ label, text }) => {
  return (
    <Wrapper>
      <span className="order-label">{label}</span>
      <span className="order-text">{text}</span>
    </Wrapper>
  );
};

export default PaybillInfo;
