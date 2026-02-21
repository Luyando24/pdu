import { Search, Filter, X, MapPin } from "lucide-react";
import styles from "./MapSidebar.module.css";
import { useState } from "react";

interface MapSidebarProps {
    selectedRegion: string | null;
    onClearRegion: () => void;
}

// Mock projects for the map list
const mockMapProjects = [
    { id: "PRJ-9011", name: "Mwinilunga District Hospital", region: "North-Western", status: "Delayed" },
    { id: "PRJ-8842", name: "Choma–Namwala Water Pipeline", region: "Southern", status: "Critical" },
    { id: "PRJ-3551", name: "Ndola-Lusaka Dual Carriageway", region: "Copperbelt", status: "On Track" },
    { id: "PRJ-1022", name: "Solwezi By-pass Road", region: "North-Western", status: "Critical" },
    { id: "PRJ-7719", name: "Mongu Value Addition Hub", region: "Western", status: "On Track" },
];

export default function MapSidebar({ selectedRegion, onClearRegion }: MapSidebarProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProjects = mockMapProjects.filter(p => !selectedRegion || p.region === selectedRegion);

    return (
        <div className={styles.sidebar}>
            {/* Search & Filters */}
            <div className={styles.controls}>
                <div className={styles.searchBox}>
                    <Search size={16} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search location or project..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>Sector</label>
                    <select className={styles.select}>
                        <option value="all">All Sectors</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="health">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="water">Water & Sanitation</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>Status Toggles</label>
                    <div className={styles.toggles}>
                        <button className={`${styles.toggle} ${styles.onTrack} ${styles.active}`}>On Track</button>
                        <button className={`${styles.toggle} ${styles.delayed} ${styles.active}`}>Delayed</button>
                        <button className={`${styles.toggle} ${styles.critical} ${styles.active}`}>Critical</button>
                    </div>
                </div>
            </div>

            {/* Results List */}
            <div className={styles.resultsContainer}>
                <div className={styles.resultsHeader}>
                    <h3 className={styles.resultsTitle}>
                        {selectedRegion ? `${selectedRegion} Projects` : "National Results"}
                    </h3>
                    <span className={styles.resultsCount}>{filteredProjects.length} found</span>
                    {selectedRegion && (
                        <button className={styles.clearBtn} onClick={onClearRegion}>
                            <X size={14} /> Clear Region
                        </button>
                    )}
                </div>

                <div className={styles.projectList}>
                    {filteredProjects.map(project => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.cardTop}>
                                <span className={styles.pid}>{project.id}</span>
                                <span className={`${styles.badge} ${styles[project.status.replace(" ", "")]}`}>
                                    {project.status}
                                </span>
                            </div>
                            <h4 className={styles.pname}>{project.name}</h4>
                            <div className={styles.pLocation}>
                                <MapPin size={12} />
                                <span>{project.region}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
