import "./App.css";

const Links = ["Github", "Twitter", "Instagram", "Frontend Mentor", "LinkedIn"];
function App() {
  return (
    <main className="container">
      <img
        className="avatar"
        src="/images/avatar-jessica.jpeg"
        alt="profile avatar"
      />
      <h1 className="name">Jessica Handall</h1>
      <span className="localization">London, United Kingdom</span>
      <p className="description">"Front-end developer and avid reader"</p>
      {Links.map((item) => {
        return (
          <button className="link" key={item}>
            {item}
          </button>
        );
      })}
    </main>
  );
}

export default App;
