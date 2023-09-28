import { List, StatWrapper} from "components/Statistics/Statistics.styled";
import PropTypes from 'prop-types'
import { getRandomHexColor } from '../../helpers/getRandomHexColor';

export const Statistics = ({ stats }) => {
  return (
    <StatWrapper>
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{backgroundColor: getRandomHexColor()}}>
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