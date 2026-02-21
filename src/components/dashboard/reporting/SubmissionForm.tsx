"use client";

import { UploadCloud, CheckCircle2, AlertTriangle } from "lucide-react";
import styles from "./SubmissionForm.module.css";
import { useState } from "react";

export default function SubmissionForm({ projectId }: { projectId: string }) {
    const [progress, setProgress] = useState(38); // Default to match mock

    if (!projectId) return null;

    return (
        <div className={styles.formContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Submit Progress Update</h2>
                <span className={styles.forProject}>For: {projectId}</span>
            </div>

            <form className={styles.form} onSubmit={e => e.preventDefault()}>

                {/* Row 1: Reporting Date & Status Dropdown */}
                <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Report Date</label>
                        <input type="date" className={styles.input} defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Overall Status Indicator</label>
                        <select className={styles.select} defaultValue="delayed">
                            <option value="on-track">✓ On Track</option>
                            <option value="delayed">⚠️ Delayed</option>
                            <option value="critical">⛔ Critical / Blocked</option>
                        </select>
                    </div>
                </div>

                {/* Row 2: Physical Progress Slider */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Physical Progress (%)</label>
                    <div className={styles.sliderContainer}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={e => setProgress(Number(e.target.value))}
                            className={styles.slider}
                        />
                        <span className={styles.sliderValue}>{progress}%</span>
                    </div>
                    <p className={styles.helperText}>Update the estimated physical completion of the project phases.</p>
                </div>

                {/* Row 3: Financials */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Financial Utilization (ZMW)</label>
                    <div className={styles.currencyInput}>
                        <span>K</span>
                        <input type="number" className={styles.input} placeholder="e.g. 10500000" defaultValue={10500000} />
                    </div>
                </div>

                {/* Row 4: Narrative / Remarks */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Execution Remarks / Constraints</label>
                    <textarea
                        className={styles.textarea}
                        rows={4}
                        placeholder="Provide context on recent milestones, challenges encountered, or reasons for delay..."
                        defaultValue="Material shortage (cement) halting foundation work. Contractor has paused operations awaiting supply from regional depot. Need intervention with supplier."
                    />
                </div>

                {/* Risk Escalation Box */}
                <div className={styles.riskBox}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" defaultChecked className={styles.checkbox} />
                        <span className={styles.checkboxText}>
                            <strong>Escalate to PDU Risk Register</strong>
                            <span>Flag this project for immediate executive review due to severe blockages.</span>
                        </span>
                    </label>
                </div>

                {/* Photographic Evidence */}
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Photographic Evidence</label>
                    <div className={styles.uploadArea}>
                        <UploadCloud size={32} className={styles.uploadIcon} />
                        <span className={styles.uploadPrimary}>Click to upload or drag and drop</span>
                        <span className={styles.uploadSecondary}>SVG, PNG, JPG or GIF (max. 5MB per file)</span>
                        <button type="button" className={styles.uploadBtn}>Select Files</button>
                    </div>
                    <ul className={styles.fileList}>
                        <li className={styles.fileItem}>
                            <CheckCircle2 size={14} className={styles.fileIcon} />
                            <span>foundation_site_oct12.jpg (2.4 MB)</span>
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <button type="button" className={styles.btnGhost}>Save as Draft</button>
                    <button type="submit" className={styles.btnPrimary}>Submit to PDU</button>
                </div>
            </form>
        </div>
    );
}
