"use client";

import { useState, useEffect } from 'react';
import styles from './Report.module.css';
import { addReport, getAllReports, markReportSynced, Report } from '@/lib/db';
import { Camera, CheckCircle, RefreshCw, Upload, Wifi, WifiOff, ArrowLeft, Home, Plus, History, User, Settings, LogOut, MapPin, ChevronDown, Bell, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../../components/ThemeContext';

// Mock Data
const PROJECTS = [
  { id: 'p1', name: 'Chililabombwe Clinic Renovation' },
  { id: 'p2', name: 'Kasama Road Construction' },
  { id: 'p3', name: 'Lusaka School Expansion' },
  { id: 'p4', name: 'Chipata Water Project' },
  { id: 'p5', name: 'Mongu Market Upgrade' },
];

const LOCATIONS = {
  districts: ['Lusaka', 'Ndola', 'Kitwe', 'Livingstone'],
  constituencies: ['Lusaka Central', 'Kabwata', 'Munali', 'Mandevu']
};

type Tab = 'home' | 'report' | 'history' | 'profile';

export default function ReportPage() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isOnline, setIsOnline] = useState(true);
  const [reports, setReports] = useState<Report[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  
  // User Context
  const [district, setDistrict] = useState('Lusaka');
  const [constituency, setConstituency] = useState('Lusaka Central');
  
  // Form State
  const [projectId, setProjectId] = useState('');
  const [status, setStatus] = useState('on-track');
  const [comments, setComments] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    loadReports();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const loadReports = async () => {
    try {
      const data = await getAllReports();
      setReports(data.sort((a, b) => b.timestamp - a.timestamp));
    } catch (error) {
      console.error("Failed to load reports", error);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setPhotos(prev => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectId) return;

    const project = PROJECTS.find(p => p.id === projectId);
    
    await addReport({
      projectId,
      projectName: project?.name || 'Unknown',
      status,
      comments,
      photos,
    });

    setProjectId('');
    setStatus('on-track');
    setComments('');
    setPhotos([]);
    
    await loadReports();
    setActiveTab('history');
    
    if (navigator.onLine) {
      syncReports();
    }
  };

  const syncReports = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    
    try {
      const currentReports = await getAllReports();
      const unsynced = currentReports.filter(r => r.synced === 0);
      
      for (const report of unsynced) {
        await new Promise(resolve => setTimeout(resolve, 800));
        if (report.id) {
          await markReportSynced(report.id);
        }
      }
      
      await loadReports();
    } catch (error) {
      console.error("Sync failed", error);
    } finally {
      setIsSyncing(false);
    }
  };

  const pendingCount = reports.filter(r => r.synced === 0).length;

  return (
    <div className={styles.container}>
      {/* App Bar */}
      <header className={styles.appBar}>
        <div className={styles.appBarLeft}>
          <div className={styles.locationSelector}>
             <span className={styles.locationLabel}>Current Location</span>
             <div className={styles.locationValue}>
               <MapPin size={14} className={styles.locationIcon} />
               <span>{district}, {constituency}</span>
               <ChevronDown size={14} />
             </div>
          </div>
        </div>
        <div className={styles.appBarRight}>
           <div className={`${styles.statusBadge} ${isOnline ? styles.online : styles.offline}`}>
             {isOnline ? <Wifi size={12} /> : <WifiOff size={12} />}
           </div>
           <button className={styles.iconBtn}>
             <Bell size={20} />
             <span className={styles.notifDot}></span>
           </button>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className={styles.tabContent}>
            <div className={styles.greetingSection}>
              <h1>Hello, Officer</h1>
              <p>Here's what's happening in <strong>{constituency}</strong> today.</p>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statCardPrimary}>
                <div className={styles.statIcon}><CheckCircle size={20} /></div>
                <div className={styles.statInfo}>
                  <span className={styles.statNumber}>{reports.length}</span>
                  <span className={styles.statLabel}>Reports Submitted</span>
                </div>
              </div>
              <div className={styles.statCardSecondary}>
                 <div className={styles.statIcon}><Upload size={20} /></div>
                 <div className={styles.statInfo}>
                   <span className={styles.statNumber}>{pendingCount}</span>
                   <span className={styles.statLabel}>Pending Sync</span>
                 </div>
              </div>
            </div>

            <div className={styles.sectionHeader}>
              <h3>Quick Actions</h3>
            </div>
            
            <div className={styles.actionGrid}>
              <button className={styles.actionCard} onClick={() => setActiveTab('report')}>
                <div className={`${styles.actionIcon} ${styles.iconBlue}`}>
                  <Plus size={24} />
                </div>
                <span>New Report</span>
              </button>
              <button className={styles.actionCard} onClick={syncReports} disabled={isSyncing}>
                <div className={`${styles.actionIcon} ${styles.iconGreen}`}>
                  <RefreshCw size={24} className={isSyncing ? "animate-spin" : ""} />
                </div>
                <span>Sync Data</span>
              </button>
              <button className={styles.actionCard} onClick={() => setActiveTab('history')}>
                <div className={`${styles.actionIcon} ${styles.iconOrange}`}>
                  <History size={24} />
                </div>
                <span>History</span>
              </button>
            </div>

            <div className={styles.sectionHeader}>
               <h3>Recent Activity</h3>
               <button className={styles.seeAllBtn} onClick={() => setActiveTab('history')}>See All</button>
            </div>

            <div className={styles.recentList}>
              {reports.slice(0, 3).map(report => (
                <div key={report.id} className={styles.miniReportItem}>
                   <div className={`${styles.statusDot} ${styles[report.status]}`}></div>
                   <div className={styles.miniReportInfo}>
                     <h4>{report.projectName}</h4>
                     <span>{new Date(report.timestamp).toLocaleDateString()}</span>
                   </div>
                   <div className={styles.miniReportStatus}>
                      {report.synced === 1 ? <CheckCircle size={14} color="#1DB954" /> : <Upload size={14} color="#F5A623" />}
                   </div>
                </div>
              ))}
              {reports.length === 0 && <p className={styles.emptyText}>No recent activity</p>}
            </div>
          </div>
        )}

        {/* REPORT TAB */}
        {activeTab === 'report' && (
          <div className={styles.tabContent}>
            <h2 className={styles.pageTitle}>New Report</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Project Name</label>
                <div className={styles.selectWrapper}>
                  <select 
                    value={projectId}
                    onChange={(e) => setProjectId(e.target.value)}
                    required
                  >
                    <option value="">Select Project</option>
                    {PROJECTS.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className={styles.selectIcon} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Status Update</label>
                <div className={styles.statusOptions}>
                  {['on-track', 'at-risk', 'delayed', 'completed'].map(s => (
                    <button
                      key={s}
                      type="button"
                      className={`${styles.statusChip} ${status === s ? styles.activeChip : ''} ${styles[s]}`}
                      onClick={() => setStatus(s)}
                    >
                      {s.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Observations</label>
                <textarea 
                  className={styles.textarea}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Type your observations here..."
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Evidence</label>
                <div className={styles.photoUpload}>
                  <label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handlePhotoUpload}
                      capture="environment"
                    />
                    <div className={styles.uploadPlaceholder}>
                      <Camera size={24} />
                      <span>Tap to Capture</span>
                    </div>
                  </label>
                  {photos.map((src, idx) => (
                    <div key={idx} className={styles.photoPreview}>
                      <img src={src} alt="Preview" />
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className={styles.submitFab} disabled={!projectId}>
                Submit Report
              </button>
            </form>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTab === 'history' && (
          <div className={styles.tabContent}>
             <h2 className={styles.pageTitle}>History</h2>
             <div className={styles.historyList}>
               {reports.map((report) => (
                  <div key={report.id} className={styles.historyCard}>
                    <div className={styles.cardHeader}>
                      <span className={`${styles.badge} ${styles[report.status]}`}>
                        {report.status.replace('-', ' ')}
                      </span>
                      <span className={styles.date}>
                        {new Date(report.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <h3>{report.projectName}</h3>
                    <p>{report.comments}</p>
                    <div className={styles.cardFooter}>
                       <div className={styles.syncState}>
                         {report.synced === 1 ? (
                           <> <CheckCircle size={14} color="#1DB954"/> <span>Synced</span> </>
                         ) : (
                           <> <Upload size={14} color="#F5A623"/> <span>Pending</span> </>
                         )}
                       </div>
                       {report.photos.length > 0 && <span>{report.photos.length} Photos</span>}
                    </div>
                  </div>
               ))}
               {reports.length === 0 && (
                 <div className={styles.emptyState}>
                   <History size={48} opacity={0.2} />
                   <p>No history available</p>
                 </div>
               )}
             </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className={styles.tabContent}>
            <div className={styles.profileHeader}>
               <div className={styles.profileAvatar}>
                 <User size={40} />
               </div>
               <h3>Field Officer</h3>
               <p>officer@cdfmonitor.gov.zm</p>
            </div>
            
            <div className={styles.menuList}>
               <div className={styles.menuItem}>
                 <div className={styles.menuIcon}><MapPin size={20} /></div>
                 <div className={styles.menuText}>
                   <span>Region</span>
                   <small>{district}, {constituency}</small>
                 </div>
               </div>
               <div className={styles.menuItem}>
                 <div className={styles.menuIcon}><Settings size={20} /></div>
                 <span>Settings</span>
               </div>
               <div className={styles.menuItem} onClick={toggleTheme}>
                 <div className={styles.menuIcon}>
                   {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                 </div>
                 <div className={styles.menuText}>
                   <span>Appearance</span>
                   <small>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</small>
                 </div>
               </div>
               <div className={styles.menuItem} onClick={syncReports}>
                 <div className={styles.menuIcon}><RefreshCw size={20} /></div>
                 <span>Force Sync</span>
               </div>
               <div className={`${styles.menuItem} ${styles.danger}`}>
                 <div className={styles.menuIcon}><LogOut size={20} /></div>
                 <span>Log Out</span>
               </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <button 
          className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
          <span>Home</span>
        </button>
        <button 
          className={`${styles.navItem} ${activeTab === 'report' ? styles.active : ''}`}
          onClick={() => setActiveTab('report')}
        >
          <Plus size={24} strokeWidth={activeTab === 'report' ? 2.5 : 2} />
          <span>Report</span>
        </button>
        <button 
          className={`${styles.navItem} ${activeTab === 'history' ? styles.active : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <History size={24} strokeWidth={activeTab === 'history' ? 2.5 : 2} />
          <span>History</span>
        </button>
        <button 
          className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={24} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}
