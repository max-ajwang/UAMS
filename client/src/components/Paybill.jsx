import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Order';
import PaybillInfo from './PaybillInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Paybill = ({ _id, name, contact, ID_number, bank_telco, createdAt }) => {
  const date = day(createdAt).format('MMM Do, YYYY, HH:mm:ss');

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{_id}</h5>
          <p>Name: {name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <PaybillInfo label="name " text={name} />
          <PaybillInfo label="contact: " text={contact} />
          <PaybillInfo label="ID Number " text={ID_number} />
          <PaybillInfo label="Bank Or TelCo: " text={bank_telco} />
        </div>

        <footer className="actions">
          <Link to={`../edit-paybill/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-paybill/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Paybill;
