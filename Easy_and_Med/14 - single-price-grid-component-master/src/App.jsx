import './index.css'

function App() {
  return (
    <div id="main_container">
      <header id="header_box">
        <h1 id="header_title">Join our community</h1>
        <h2 id="header_subtitle">30-day, hassle-free money back guarantee</h2>
        <p id="header_paragraph">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </header>
      <section id='bot_section_box'>
        <main id="main_box">
          <h1 id="main_box_title">Monthly Subscription</h1>
          <h2 id="main_box_subtitle">
            <span id="main_box_subtitle_price">$29</span> per month
          </h2>
          <p id="main_box_paragraph">Full access for less than $1 a day</p>
          <button id="main_box_button">Sign Up</button>
        </main>
        <footer id="footer_box">
          <h1 id="footer_title">Why Us</h1>
          <p className="footer_item">Tutorials by industry experts</p>
          <p className="footer_item">Peer &amp; expert code review</p>
          <p className="footer_item">Coding exercises</p>
          <p className="footer_item">Access to our GitHub repos</p>
          <p className="footer_item">Community forum</p>
          <p className="footer_item">Flashcard decks</p>
          <p className="footer_item">New videos every week</p>
        </footer>
      </section>
    </div>
  )
}

export default App
