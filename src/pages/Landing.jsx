import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/mock'
const features = [
  ['📍','Location-Based Reporting','Pin the exact issue location for precise reporting.'],
  ['📋','Real-Time Tracking','Track your complaint from submission to resolution.'],
  ['🛡️','Role-Based Access','Dedicated dashboards for Citizens, Admins and Officers.'],
  ['👥','Community Upvoting','Upvote issues that matter and help prioritize them.'],
  ['🔔','Smart Notifications','Get notified at every step of the process.'],
  ['📈','Analytics Dashboard','Admins see trends and department performance.'],
]
const steps = [
  ['Report Issue','Citizens report civic issues with details, photos and location.'],
  ['Admin Verifies','Municipal admin verifies the complaint and prioritizes it.'],
  ['Assign Department','The complaint goes to the right department and officer.'],
  ['Issue Resolved','The officer resolves it and the citizen gives feedback.'],
]
export default function Landing() {
  return (<>
    <section className="hero"><div className="container center">
      <span className="pill">India's Smart Civic Platform</span>
      <h1>Your Voice,<br />Your <span className="grad">City's Change</span></h1>
      <p className="lead">Report civic issues, track resolutions, and hold your municipality accountable. Charan bridges the gap between citizens and government departments.</p>
      <div className="row"><Link to="/report" className="btn btn-accent">Report an Issue →</Link><a href="#how" className="btn btn-outline">How it Works</a></div>
    </div></section>
    <div className="marquee"><div className="track">{[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((c, i) => <span key={i} className="chip">{c}</span>)}</div></div>
    <section id="features" className="section"><div className="container center">
      <span className="pill">Features</span><h2>Everything You Need for Smart Civic Governance</h2>
      <div className="grid g3">{features.map(([i, t, d]) => <div className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
    <section id="how" className="section cream"><div className="container center">
      <span className="pill">Process</span><h2>How It Works</h2>
      <div className="grid g4">{steps.map(([t, d], i) => <div className="card step" key={t}><div className="num">0{i + 1}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
    <section className="cta"><div className="container center"><h2>Ready to Make Your City Better?</h2>
      <p>Join citizens who are actively improving their neighborhoods through Charan.</p>
      <Link to="/register" className="btn btn-accent">Start Reporting Now →</Link></div></section>
  </>)
}
