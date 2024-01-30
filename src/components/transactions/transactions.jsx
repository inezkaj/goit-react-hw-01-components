import css from './transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  const transactionItem = items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionItem}</tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
