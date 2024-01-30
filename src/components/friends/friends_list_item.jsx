import css from './friends.module.css';
import PropTypes from 'prop-types';

export default function FriendsListItem(props) {
  const { avatar, id, isOnline, name } = props.friend;

  return (
    <li key={id}>
      <div className={`${css.status} ${isOnline ? css.isOnline : ''}`}> </div>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
};
