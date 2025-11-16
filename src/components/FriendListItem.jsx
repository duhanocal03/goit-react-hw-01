export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    
       <div className="friend-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
   
  );
}
