import { List, StatWrapper, Title } from "components/Statistics/Statistics.styled";
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrapper>
      <Title>{title}</Title>
      <List>
        {stats.map(({ id, label, percentage }, idx) => {
          return (
            <li key={id} index={idx}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </List>
    </StatWrapper>
  );
};


Statistics.proptype = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    })
}