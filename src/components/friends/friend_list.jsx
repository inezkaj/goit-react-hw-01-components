import css from './friends.module.css';
import FriendsListItem from './friends_list_item.jsx';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
