import Paybill from './Paybill';
import Wrapper from '../assets/wrappers/OrdersContainer';
import { useAllPaybillsContext } from '../pages/AllPaybills';

const PaybillsContainer = () => {
  const { data } = useAllPaybillsContext();
  const { paybills } = data;

  if (paybills.length === 0) {
    return (
      <Wrapper>
        <h2>No paybill requests to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="orders">
        {paybills.map((paybill) => {
          return <Paybill key={paybill._id} {...paybill} />;
        })}
      </div>
    </Wrapper>
  );
};

export default PaybillsContainer;
