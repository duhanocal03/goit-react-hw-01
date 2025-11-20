import styles from "./friends.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      
      <p
        className={
          isOnline
            ? `${styles.status} ${styles.online}`
            : `${styles.status} ${styles.offline}`
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
