import { useState } from 'react'; // Removed 'React,' from here
import './App.css';

/* --- 1. SVG Icons --- */
const Icons = {
  Activity: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  Clipboard: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>,
  Calendar: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Users: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Heart: ({ color = "currentColor" }) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Plus: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
};

/* --- 2. Screen Components --- */
const Dashboard = () => (
  <div className="fade-in">
    <div className="hero-card">
      <div className="status-pill">LIVE SHIFT</div>
      <h2>Elena Rodriguez</h2>
      <p>ID: #88291 • Room 402</p>
      <div className="hero-actions">
        <button className="btn-white">Clock Out</button>
      </div>
    </div>

    <div className="vitals-section">
      <div className="section-header"><h4>Real-time Vitals</h4> <span className="live-dot"></span></div>
      <div className="vitals-row">
        <div className="vital-item"><Icons.Heart color="#ef4444" /> <div><strong>78</strong><small>BPM</small></div></div>
        <div className="vital-item"><div><strong>120/80</strong><small>BP</small></div></div>
      </div>
    </div>

    <div className="task-list">
      <h4>Today's Tasks</h4>
      <label className="task-card">
        <input type="checkbox" defaultChecked />
        <div className="task-content"><strong>Morning Meds</strong><p>Completed 8:00 AM</p></div>
      </label>
      <label className="task-card">
        <input type="checkbox" />
        <div className="task-content"><strong>Physical Therapy</strong><p>Scheduled 2:00 PM</p></div>
      </label>
    </div>
  </div>
);

/* --- 3. Main App --- */
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="mobile-wrapper">
      <header className="app-header">
        <div className="profile-group">
          <div className="user-avatar">CP</div>
          <h3>CarePulse</h3>
        </div>
        <div className="notif-bell"></div>
      </header>

      <main className="main-viewport">
        {activeTab === 'home' && <Dashboard />}
        {activeTab === 'reports' && <div className="placeholder-screen"><h2>Reports History</h2></div>}
        {activeTab === 'schedule' && <div className="placeholder-screen"><h2>Weekly Schedule</h2></div>}
        {activeTab === 'profile' && <div className="placeholder-screen"><h2>Arthur's Profile</h2></div>}
      </main>

      <button className="fab-button"><Icons.Plus /></button>

      <nav className="tab-bar">
        <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>
          <Icons.Activity /><span>Home</span>
        </button>
        <button onClick={() => setActiveTab('reports')} className={activeTab === 'reports' ? 'active' : ''}>
          <Icons.Clipboard /><span>Reports</span>
        </button>
        <button onClick={() => setActiveTab('schedule')} className={activeTab === 'schedule' ? 'active' : ''}>
          <Icons.Calendar /><span>Schedule</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>
          <Icons.Users /><span>Patients</span>
        </button>
      </nav>
    </div>
  );
}