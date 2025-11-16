import "./App.css";
import userData from "../userData.json";
import friends from "../Friends.json";
import transactions from "../Transactions.json"
import FriendList from "../components/FriendList";
import TransactionHistory from "./TransactionHistory";

function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      {/* 1. ödev */}
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="value">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="value">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="value">{stats.likes}</span>
          </li>
        </ul>
      </div>

      {/* 2. ödev */}
      <div className="friend-cards">
        <FriendList friends={friends} />
      </div>

      {/*3.ödev*/}
      
      <TransactionHistory items={transactions} />    
      
    </>
  );
}

export default App;
