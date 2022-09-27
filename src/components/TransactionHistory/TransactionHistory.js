import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>{items.type}Type</th>
          <th>{items.amount}Amount</th>
          <th>{items.currency}Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody>
          <tr key={id} type={type} amount={amount} currency={currency}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
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
