import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
export default function Navbar() {
  const { user, logout } = useApp(); const nav = useNavigate()
  return (
    <header className="nav"><div className="container nav-in">
      <Link to="/" className="brand">🏛️ Charan</Link>
      <div className="nav-actions">
        {user ? (<>
          <Link to="/dashboard" className="btn btn-ghost">Dashboard</Link>
          <button className="btn btn-primary" onClick={() => { logout(); nav('/') }}>Log out</button>
        </>) : (<>
          <Link to="/login" className="btn btn-ghost">Login</Link>
          <Link to="/register" className="btn btn-primary">Get Started</Link>
        </>)}
      </div>
    </div></header>
  )
}
