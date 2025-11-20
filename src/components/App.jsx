import "./App.css";
import userData from "../userData.json";
import Profile from "../components/Profile/profile.jsx";
import friends from "../Friends.json";
import transactions from "../Transactions.json";
import FriendList from "../components/FriendList/FriendList.jsx";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory.jsx";

function App() {
  return (
    <>
      {/* 1.ödev */}
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* 1.ödev bitiş */}

      {/* 2. ödev */}
      <div className="friend-cards">
        <FriendList friends={friends} />
      </div>
      {/* 2. ödev bitiş */}

      {/*3.ödev*/}
      <TransactionHistory items={transactions} />    
      {/* 3.ödev bitiş */}
    </>
  );
}

export default App;
