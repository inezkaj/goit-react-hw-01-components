import css from './profile.module.css';
import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={css.avatarProfile} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.labelStat}>Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.labelStat}>Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.labelStat}>Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
