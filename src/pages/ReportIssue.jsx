import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { CATEGORIES } from '../data/mock'
export default function ReportIssue() {
  const { addComplaint } = useApp(); const nav = useNavigate()
  const [f, setF] = useState({ title: '', category: CATEGORIES[0], description: '', location: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const locate = () => navigator.geolocation?.getCurrentPosition(p => setF(s => ({ ...s, location: `${p.coords.latitude.toFixed(5)}, ${p.coords.longitude.toFixed(5)}` })))
  const submit = (e) => { e.preventDefault(); addComplaint(f); nav('/dashboard') }
  return (
    <section className="container page"><form className="card form wide" onSubmit={submit}>
      <h2>Report an issue</h2>
      <label>Title<input value={f.title} onChange={set('title')} required /></label>
      <label>Category<select value={f.category} onChange={set('category')}>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select></label>
      <label>Description<textarea rows="4" value={f.description} onChange={set('description')} required /></label>
      <label>Location<div className="row left"><input value={f.location} onChange={set('location')} placeholder="Area, landmark or coordinates" required /><button type="button" className="btn btn-outline" onClick={locate}>Use my location</button></div></label>
      <label>Photo<input type="file" accept="image/*" /></label>
      <button className="btn btn-accent">Submit complaint</button>
    </form></section>
  )
}
