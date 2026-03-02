import { openDB, DBSchema } from 'idb';

export interface Report {
  id?: number;
  projectId: string;
  projectName: string;
  status: string;
  comments: string;
  photos: string[]; // Base64 strings for simplicity
  timestamp: number;
  synced: number; // 0 for false, 1 for true (IndexedDB requires valid key types)
}

export interface CDFMonitorDB extends DBSchema {
  reports: {
    key: number;
    value: Report;
    indexes: { 'by-synced': number };
  };
}

const DB_NAME = 'cdf-monitor-db';
const DB_VERSION = 1;

export const initDB = async () => {
  return openDB<CDFMonitorDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('reports')) {
        const store = db.createObjectStore('reports', {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('by-synced', 'synced');
      }
    },
  });
};

export const addReport = async (report: Omit<Report, 'id' | 'timestamp' | 'synced'>) => {
  const db = await initDB();
  return db.add('reports', {
    ...report,
    timestamp: Date.now(),
    synced: 0,
  });
};

export const getUnsyncedReports = async () => {
  const db = await initDB();
  return db.getAllFromIndex('reports', 'by-synced', 0);
};

export const markReportSynced = async (id: number) => {
  const db = await initDB();
  const report = await db.get('reports', id);
  if (report) {
    report.synced = 1;
    await db.put('reports', report);
  }
};

export const getAllReports = async () => {
  const db = await initDB();
  return db.getAll('reports');
};
