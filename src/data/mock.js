export const CATEGORIES = ['Garbage','Water Leakage','Street Light','Drainage','Traffic','Road Damage']
export const DEPARTMENTS = ['Sanitation','Water Board','Electricity','Public Works','Traffic Police']
export const seedComplaints = [
  { id: 1, title: 'Overflowing bin near bus stop', category: 'Garbage', location: 'MG Road', description: 'Not cleared for a week.', status: 'Reported', votes: 14, department: null, owner: 'citizen@demo.in' },
  { id: 2, title: 'Pipe burst on 5th Cross', category: 'Water Leakage', location: 'Indiranagar', description: 'Water flooding the road.', status: 'Assigned', votes: 31, department: 'Water Board', owner: 'citizen@demo.in' },
  { id: 3, title: 'Street light not working', category: 'Street Light', location: 'Koramangala', description: 'Dark stretch, unsafe at night.', status: 'Verified', votes: 9, department: null, owner: 'other@demo.in' },
  { id: 4, title: 'Large pothole', category: 'Road Damage', location: 'HSR Layout', description: 'Two-wheelers at risk.', status: 'Resolved', votes: 22, department: 'Public Works', owner: 'other@demo.in' },
]
