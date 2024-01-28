import PropTypes from 'prop-types';

export default function FriendsListItem(props) {
  const { avatar, id, isOnline, name } = props.friend;
  let classList = ['status'];

  if (isOnline) {
    classList.push('is-online');
  }

  return (
    <div className="itemFriends" key={id}>
      <li>
        <div className={classList.join(' ')}></div>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </div>
  );
}
FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
};
