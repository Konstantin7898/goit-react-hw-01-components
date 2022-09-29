import PropTypes from 'prop-types';
import {
  Thead,
  TransHistory,
  TableHeadEl,
  TableItems,
  TableBody,
  TableInfo,
} from './TransationHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransHistory>
      <Thead>
        <TableHeadEl>
          <TableItems>{items.type}Type</TableItems>
          <TableItems>{items.amount}Amount</TableItems>
          <TableItems>{items.currency}Currency</TableItems>
        </TableHeadEl>
      </Thead>
      {items.map(({ id, type, amount, currency }) => (
        <TableBody>
          <TableHeadEl key={id} type={type} amount={amount} currency={currency}>
            <TableInfo>{type}</TableInfo>
            <TableInfo>{amount}</TableInfo>
            <TableInfo>{currency}</TableInfo>
          </TableHeadEl>
        </TableBody>
      ))}
    </TransHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
