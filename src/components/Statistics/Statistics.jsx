import PropTypes from 'prop-types';

import {
  List,
  StatWrapper,
  TitleText,
  TitleWrapper,
} from 'components/Statistics/Statistics.styled';
import { getRandomHexColor } from '../../helpers/getRandomHexColor';

export const Statistics = ({ stats, title }) => {
  return (
    <StatWrapper>
      {title && (
        <TitleWrapper>
          <TitleText>{title}</TitleText>
        </TitleWrapper>
      )}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </List>
    </StatWrapper>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
