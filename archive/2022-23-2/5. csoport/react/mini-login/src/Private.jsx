/* eslint-disable react/prop-types */
const Private = ({logout, username}) => {
  return (
    <div>
      <h1>Szia, {username}!</h1>
      <div>Formázott tartalom</div>
      <button className="logoutBtn" onClick={logout}>Kijelentkezés</button>
    </div>
  );
};

export default Private;
