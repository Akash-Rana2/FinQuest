import { useState } from 'react'

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>
const Spark = () => <span className="spark" aria-hidden="true">✦</span>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [choice, setChoice] = useState(null)

  const makeChoice = (answer) => {
    setChoice(answer)
    window.setTimeout(() => setChoice(null), 2300)
  }

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />

        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="FinQuest home">
            <span className="brand-mark"><span>F</span></span>
            <span>FinQuest</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>Our impact</a>
            <a href="#simulator" onClick={() => setMenuOpen(false)}>Simulator</a>
          </div>
        </nav>

        <div className="hero-content wrap">
          <div className="hero-copy">
            <div className="eyebrow light"><span className="eyebrow-dot" /> Financial confidence, made for everyone</div>
            <h1>Every money choice<br />can become a <em>superpower.</em></h1>
            <p className="hero-description">FinQuest turns real-life financial moments into a friendly game—so every player can learn, choose, and grow with confidence.</p>
            <div className="hero-actions">
              <a className="text-link" href="#how-it-works">See how it works <span>↓</span></a>
            </div>
          </div>

          <div className="game-stage" aria-label="FinQuest game preview">
            <div className="sun-disc" aria-hidden="true"><span>✦</span></div>
            <div className="hero-card card-back" aria-hidden="true"><small>QUEST MAP</small><span>03 / 07</span><div className="map-route"><b /><b /><b /><b /></div></div>
            <div className="hero-card game-card">
              <div className="card-top"><span className="tiny-label"><Spark /> TODAY'S QUEST</span><span className="coin">₹</span></div>
              <div className="story-illustration">
                <div className="story-house"><i /><i /><i /></div>
                <div className="story-person"><span /><i /><b /></div>
                <div className="story-plant"><i /><i /><i /></div>
                <div className="story-ground" />
              </div>
              <h3>The repair decision</h3>
              <p>Your home needs a repair. How do you pay for it?</p>
              <div className="choice-grid">
                <button onClick={() => makeChoice('great')} className={choice === 'great' ? 'selected good' : ''}>Use my emergency fund</button>
                <button onClick={() => makeChoice('okay')} className={choice === 'okay' ? 'selected' : ''}>Take a quick loan</button>
              </div>
              {choice && <div className={`choice-feedback ${choice}`}>{choice === 'great' ? 'Smart move! Savings protect your goals.' : 'Let’s compare the interest before deciding.'}</div>}
              <div className="progress"><span>YOUR JOURNEY</span><div><i /><i /><i /><i /></div><b>4 of 7</b></div>
            </div>
            <div className="float-chip chip-top"><span>↗</span> Confidence +12</div>
            <div className="float-chip chip-bottom"><span>✦</span> New skill unlocked</div>
          </div>
        </div>

        <div className="hero-bottom wrap">
          <p>Built for the moments that matter</p>
          <div className="topic-list"><span>Saving</span><i /><span>Borrowing</span><i /><span>Investing</span><i /><span>Planning</span></div>
          <a href="#how-it-works" aria-label="Scroll to learn more">Explore <span>↓</span></a>
        </div>
      </section>

      <section className="intro wrap" id="challenge">
        <div className="section-tag"><span>01</span> THE CHALLENGE</div>
        <div className="intro-grid">
          <h2>When financial knowledge<br />is out of reach, <em>choice is too.</em></h2>
          <div className="intro-copy">
            <p>For many people in rural and historically excluded communities, financial learning is hard to access, hard to understand, and rarely built around everyday realities.</p>
            <p>That gap can leave families vulnerable to misinformation and unfair financial practices—especially when the stakes are high.</p>
            <a className="under-link" href="#solution">Why it matters <Arrow /></a>
          </div>
        </div>
        <div className="stat-strip">
          <div><strong>1 idea</strong><span>made practical</span></div>
          <div><strong>Many choices</strong><span>explored safely</span></div>
          <div><strong>Everyday life</strong><span>at the centre</span></div>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="wrap">
          <div className="how-heading">
            <div>
              <div className="section-tag"><span>02</span> HOW IT WORKS</div>
              <h2>Learn by living the <em>choice.</em></h2>
            </div>
            <p>FinQuest makes financial learning active, memorable, and ready for real life.</p>
          </div>
          <div className="learning-loop" aria-label="FinQuest learning journey: face a situation, make a choice, face the consequences, learn from the outcome, then repeat with a new level and new situations.">
            <div className="loop-path" aria-hidden="true"><span /></div>
            <article className="journey-step step-situation">
              <span className="step-number">01</span>
              <div className="step-icon situation-icon"><i>?</i></div>
              <h3>Face a financial<br />situation</h3>
              <p>Step into a real-life money moment.</p>
            </article>
            <article className="journey-step step-choice">
              <span className="step-number">02</span>
              <div className="step-icon choice-icon">⇄</div>
              <h3>Make a choice<br />based on it</h3>
              <p>Explore the options in front of you.</p>
            </article>
            <article className="journey-step step-consequence">
              <span className="step-number">03</span>
              <div className="step-icon consequence-icon">↗</div>
              <h3>Face the<br />consequences</h3>
              <p>See how that decision plays out.</p>
            </article>
            <article className="journey-step step-learn">
              <span className="step-number">04</span>
              <div className="step-icon learn-icon">✦</div>
              <h3>Learn from the<br />outcome</h3>
              <p>Take a practical insight with you.</p>
            </article>
            <article className="journey-step step-repeat">
              <span className="step-number">05</span>
              <div className="step-icon repeat-icon">↻</div>
              <h3>Repeat. New level.<br />New situations.</h3>
              <p>Try different choices. Grow every time.</p>
            </article>
          </div>
          <p className="loop-note"><span>✦</span> A safe place to practice decisions before life asks for one.</p>
        </div>
      </section>

      <section className="solution-section" id="solution">
        <div className="wrap solution-grid">
          <div className="solution-visual">
            <div className="visual-rings" aria-hidden="true"><i /><i /><i /></div>
            <div className="lesson-card lesson-one"><span>01</span><div><b>Face a moment</b><small>A situation you might recognise</small></div><em>?</em></div>
            <div className="lesson-card lesson-two"><span>02</span><div><b>Make a choice</b><small>Explore without fear</small></div><em>→</em></div>
            <div className="lesson-card lesson-three"><span>03</span><div><b>Learn from it</b><small>Build money confidence</small></div><em>✦</em></div>
            <div className="solution-sun" aria-hidden="true">✦</div>
          </div>
          <div className="solution-copy">
            <div className="section-tag pale"><span>03</span> THE SOLUTION</div>
            <h2>Practice life’s choices.<br /><em>Own the outcome.</em></h2>
            <p>FinQuest is a choice-based financial literacy game. Players step into real financial situations, make a decision, see what happens next, and take the learning into real life.</p>
            <p>There are no lectures or jargon. Just a safe space to build the habit of making thoughtful financial decisions.</p>
          </div>
        </div>
      </section>

      <section className="quest-section wrap" id="start">
        <div className="quest-header"><div><div className="section-tag"><span>04</span> A QUEST FOR EVERYONE</div><h2>Small steps. <em>Real confidence.</em></h2></div><p>Choose the path that feels familiar, then discover the possibility in every decision.</p></div>
        <div className="quest-cards">
          <article className="quest-card mango"><span className="number">01</span><div className="quest-icon"><div className="pig">₹</div></div><p className="card-kicker">START WITH</p><h3>The savings habit</h3><p>Turn little amounts into a safety net for what matters most.</p></article>
          <article className="quest-card mint"><span className="number">02</span><div className="quest-icon home-icon"><i /><b /></div><p className="card-kicker">KNOW YOUR OPTIONS</p><h3>The borrowing choice</h3><p>Understand loans, interest, and how to ask the right questions.</p></article>
          <article className="quest-card lilac"><span className="number">03</span><div className="quest-icon seed">✦</div><p className="card-kicker">GROW WITH TIME</p><h3>The future fund</h3><p>See how patient, informed investing can create possibility.</p></article>
        </div>
      </section>

      <section className="simulator-section" id="simulator">
        <div className="wrap simulator-grid">
          <div className="simulator-copy"><div className="section-tag light-tag"><span>05</span> EXPLORE THE MARKETS</div><h2>Meet the stock market,<br /><em>without the risk.</em></h2><p>Our interactive Stock Market Simulator makes first steps in investing feel less intimidating. Test a strategy, follow a story, and learn how markets move—using virtual money.</p></div>
          <div className="market-window">
            <div className="window-bar"><span /><span /><span /><b>FinQuest Market</b><em>•••</em></div>
            <div className="market-content"><div className="market-top"><div><small>YOUR PORTFOLIO</small><strong>₹ 12,840.50</strong><span className="positive">↗ 6.24% this month</span></div><button>+ Add money</button></div><div className="chart"><div className="chart-labels"><span>14K</span><span>12K</span><span>10K</span><span>8K</span></div><svg viewBox="0 0 470 175" preserveAspectRatio="none" aria-label="Portfolio growth chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#F6C84C" stopOpacity=".42"/><stop offset="1" stopColor="#F6C84C" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0,145 C28,140 35,115 58,120 S95,92 120,105 S147,130 168,105 S197,76 224,95 S260,55 283,72 S313,78 333,42 S364,76 385,59 S420,26 470,18 L470,175 L0,175 Z"/><path className="line" d="M0,145 C28,140 35,115 58,120 S95,92 120,105 S147,130 168,105 S197,76 224,95 S260,55 283,72 S313,78 333,42 S364,76 385,59 S420,26 470,18"/></svg></div><div className="stock-row"><span className="stock-logo">S</span><div><b>Sunrise Co.</b><small>SUNR</small></div><strong>₹ 1,240</strong><em>+4.8%</em></div></div>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="wrap"><div className="impact-heading"><div className="section-tag"><span>06</span> IMPACT THAT REACHES FURTHER</div><h2>Confidence grows.<br /><em>Communities move forward.</em></h2></div><div className="impact-grid"><article><div className="impact-icon people">●●●</div><h3>Social impact</h3><p>Financial knowledge made simple and reachable for communities that are usually left out.</p></article><article><div className="impact-icon growth">↗</div><h3>Economic impact</h3><p>Fintechs and banks gain inclusive, digital, vernacular tools to reach new users—thoughtfully.</p></article><article><div className="impact-icon language">अ A</div><h3>Built to belong</h3><p>Familiar stories, local context, and clear language make every lesson feel possible.</p></article></div></div>
      </section>

      <section className="final-cta"><div className="cta-sparkles" aria-hidden="true"><i>✦</i><i>✦</i><i>✦</i></div><div className="wrap"><p className="cta-kicker">ONE SMALL CHOICE CAN CHANGE A LOT</p><h2>Ready to make money<br /><em>make sense?</em></h2><p>Start your FinQuest today. Learn by doing, grow by choosing.</p><a className="button button-sun" href="https://forms.gle/wQYUegd99puVweLRA" target="_blank" rel="noreferrer">Apply Now <Arrow /></a></div></section>

      <footer><div className="wrap footer-content"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span>F</span></span><span>FinQuest</span></a><p>Every choice is a chance to grow.</p><span>© 2026 FinQuest</span></div></footer>
    </main>
  )
}

export default App
