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
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
