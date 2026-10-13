import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
export default function Auth({ mode }) {
  const { login } = useApp(); const nav = useNavigate()
  const [f, setF] = useState({ name: '', email: '', password: '', role: 'citizen' })
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (!f.email.includes('@') || f.password.length < 6) return setErr('Enter a valid email and a password of at least 6 characters.')
    login({ name: f.name || f.email.split('@')[0], email: f.email, role: f.role }); nav('/dashboard')
  }
  return (
    <section className="auth"><form className="card form" onSubmit={submit}>
      <h2>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h2>
      {mode === 'register' && <label>Full name<input value={f.name} onChange={set('name')} required /></label>}
      <label>Email<input type="email" value={f.email} onChange={set('email')} required /></label>
      <label>Password<input type="password" value={f.password} onChange={set('password')} required /></label>
      <label>Role (demo only)<select value={f.role} onChange={set('role')}><option value="citizen">Citizen</option><option value="admin">Admin</option><option value="officer">Department Officer</option></select></label>
      {err && <p className="error">{err}</p>}
      <button className="btn btn-primary">{mode === 'login' ? 'Log in' : 'Create account'}</button>
      <p className="muted">{mode === 'login' ? <>New here? <Link to="/register">Create an account</Link></> : <>Have an account? <Link to="/login">Log in</Link></>}</p>
    </form></section>
  )
}
