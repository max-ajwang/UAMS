import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'Pending Orders (Bidding Stage)',
      count: defaultStats?.bidding || 0,
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bcg: '#fef3c7',
    },
    {
      title: 'Orders in Progress',
      count: defaultStats?.progress || 0,
      icon: <FaCalendarCheck />,
      color: '#083bf3',
      bcg: '#e0e8f9',
    },
    {
      title: 'Completed Orders',
      count: defaultStats?.done || 0,
      icon: <FaBug />,
      color: '#06c238',
      bcg: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
