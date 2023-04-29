import { connect, useSelector } from "react-redux";
import "./App.css";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import { getUser } from "./redux/actions/userActions";

function App({ getUser }) {
  const { isLoading, user } = useSelector((state) => state.user);

  const clickHandler = () => {
    const id = Math.floor(Math.random() * 10) + 1;
    getUser(id);
  };

  const renderUserDetail = () => {
    if (!Object.keys(user).length) {
      return null;
    }
    return (
      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>Name:</strong> <span>{user.name}</span>
        </li>
        <li>
          <strong>Username:</strong> <span>{user.username}</span>
        </li>
        <li>
          <strong>Email:</strong> <span>{user.email}</span>
        </li>
        <li>
          <strong>Contact:</strong> <span>{user.phone}</span>
        </li>
        <li>
          <strong>Website:</strong> <span>{user.website}</span>
        </li>
        <li>
          <strong>Address:</strong>{" "}
          <span>
            {user.address.street} {user.address.suite} {user.address.city}{" "}
            {user.address.zipcode}
          </span>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clickHandler} style={{ marginBottom: "10px" }}>
          {isLoading ? "Fetching ..." : "Fetch User"}
        </button>
        <hr />
        {renderUserDetail()}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: getUser(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(App);
