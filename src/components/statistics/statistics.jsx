import css from './statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  const statsContent = stats.map(({ id, label, percentage }) => (
    <li key={id} className={css.itemStats}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>{statsContent}</ul>
    </section>
  );
}
Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
