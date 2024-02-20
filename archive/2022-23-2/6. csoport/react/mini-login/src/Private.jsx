/* eslint-disable react/prop-types */
const Private = ({logout, loggedInUser}) => {
  return (
    <div>
      <h1>Szia, {loggedInUser}!</h1>
      <div>Formázott tartalom</div>
      <button onClick={logout} className="logoutBtn">Kijelentkezés</button>
    </div>
  );
};

export default Private;
