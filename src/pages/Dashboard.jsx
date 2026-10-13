import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import StatusBadge from '../components/StatusBadge'
import { DEPARTMENTS } from '../data/mock'
export default function Dashboard() {
  const { user, complaints, upvote, update } = useApp()
  const role = user.role
  const list = role === 'officer' ? complaints.filter(c => c.status === 'Assigned') : complaints
  const count = (s) => complaints.filter(c => c.status === s).length
  return (
    <section className="container page">
      <div className="head"><div><h2>Hello, {user.name}</h2><p className="muted">{role === 'citizen' ? 'Issues in your city' : role === 'admin' ? 'Review and route complaints' : 'Complaints assigned to your department'}</p></div>
        {role === 'citizen' && <Link to="/report" className="btn btn-accent">Report an issue</Link>}</div>
      {role === 'admin' && <div className="grid g4 stats">{['Reported','Verified','Assigned','Resolved'].map(s => <div className="card" key={s}><p className="muted">{s}</p><div className="big">{count(s)}</div></div>)}</div>}
      {list.length === 0 && <div className="card"><p>No complaints here yet.</p></div>}
      <div className="stack">{list.map(c => (
        <article className="card item" key={c.id}>
          <div><h3>{c.title}</h3><p className="muted">{c.category} · {c.location}</p><p>{c.description}</p>
            {c.department && <p className="muted">Department: {c.department}</p>}</div>
          <div className="side"><StatusBadge status={c.status} />
            {role === 'citizen' && <button className="btn btn-outline" onClick={() => upvote(c.id)}>▲ {c.votes}</button>}
            {role === 'admin' && c.status === 'Reported' && <button className="btn btn-primary" onClick={() => update(c.id, { status: 'Verified' })}>Verify</button>}
            {role === 'admin' && c.status === 'Verified' && <select defaultValue="" onChange={e => update(c.id, { status: 'Assigned', department: e.target.value })}><option value="" disabled>Assign department</option>{DEPARTMENTS.map(d => <option key={d}>{d}</option>)}</select>}
            {role === 'officer' && <button className="btn btn-primary" onClick={() => update(c.id, { status: 'Resolved' })}>Mark resolved</button>}
          </div>
        </article>))}</div>
    </section>
  )
}
