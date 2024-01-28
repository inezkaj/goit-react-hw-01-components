import css from './statistics.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  const statsContent = stats.map(({ id, label, percentage }) => (
    <li key={id} className="itemStats">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  ));

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">{statsContent}</ul>
    </section>
  );
}
Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
