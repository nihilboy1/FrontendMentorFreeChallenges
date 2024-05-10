import "./App.css";

function App() {
  return (
    <main className="container">
      <img
        className="illustration"
        src="\illustration-article.svg"
        alt="illustration"
      />
      <div className="tag">
        <span className="tagtext">Learning</span>
      </div>
      <span className="date">Published 21 Dec 2023</span>
      <h1 className="title">HTML & CSS foundations</h1>
      <p className="description">
        These languages are the backbone of every website, defining structure,
        content, and presentation
      </p>
      <div className="authorContainer">
        <img className="avatar" src="/image-avatar.webp" alt="avatar image" />
        <span className="author">Greg Hooper</span>
      </div>
    </main>
  );
}

export default App;
