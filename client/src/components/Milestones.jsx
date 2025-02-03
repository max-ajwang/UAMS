import Wrapper from '../assets/wrappers/Milestones';

const Milestones = () => {
  return (
    <Wrapper>
      <div className="mileStonesContainer">
        <h2>Milestones</h2>
        <ul className="mileStonesSections">
          <li>
            <h3>4.5/5</h3>
            <p>Customer rating</p>
          </li>
          <li>
            <h3>8 </h3>
            <p>Years in business</p>
          </li>
          <li>
            <h3>20+ </h3>
            <p>Countries served</p>
          </li>
          <li>
            <h3>1K+ </h3>
            <p>Writers</p>
          </li>
          <li>
            <h3>200K+ </h3>
            <p>Successful orders</p>
          </li>
          <li>
            <h3>1MM+ </h3>
            <p>Pages written</p>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default Milestones;
