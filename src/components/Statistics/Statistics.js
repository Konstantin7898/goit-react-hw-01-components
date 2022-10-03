import PropTypes from 'prop-types';

import {
  Container,
  Label,
  Percentage,
  StatCardList,
  StatList,
  Title,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatCardList
            key={id}
            label={label}
            percentage={percentage}
            color={getRandomHexColor()}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatCardList>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
