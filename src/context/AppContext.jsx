import { createContext, useContext, useState } from 'react'
import { seedComplaints } from '../data/mock'
const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)
export function AppProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('charan_user') || 'null'))
  const [complaints, setComplaints] = useState(seedComplaints)
  const login = (u) => { setUser(u); localStorage.setItem('charan_user', JSON.stringify(u)) }
  const logout = () => { setUser(null); localStorage.removeItem('charan_user') }
  const addComplaint = (c) => setComplaints(p => [{ ...c, id: Date.now(), status: 'Reported', votes: 0, department: null, owner: user.email }, ...p])
  const upvote = (id) => setComplaints(p => p.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c))
  const update = (id, patch) => setComplaints(p => p.map(c => c.id === id ? { ...c, ...patch } : c))
  return <Ctx.Provider value={{ user, login, logout, complaints, addComplaint, upvote, update }}>{children}</Ctx.Provider>
}
