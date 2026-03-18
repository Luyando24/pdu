export const PROJECTS = [
    { 
        id: 1, 
        name: "Kyawama Road Upgrade", 
        budget: "ZMW 12.5M", 
        spent: "ZMW 8.2M", 
        contractor: "ZamBuild Ltd", 
        progress: 65, 
        status: "Ongoing",
        ward: "Solwezi Central",
        category: "Infrastructure",
        milestones: [
            { label: "Site Mobilization", date: "Jan 12", done: true },
            { label: "Excavation", date: "Feb 05", done: true },
            { label: "Paving Phase 1", date: "Mar 20", done: false },
        ]
    },
    { 
        id: 2, 
        name: "Matero Central Market Shelter", 
        budget: "ZMW 4.2M", 
        spent: "ZMW 4.2M", 
        contractor: "City Group", 
        progress: 100, 
        status: "Completed",
        ward: "Kabitaka",
        category: "Market",
        milestones: [
            { label: "Foundation", date: "Dec 10", done: true },
            { label: "Roofing", date: "Jan 15", done: true },
            { label: "Commissioning", date: "Feb 28", done: true },
        ]
    },
    { 
        id: 3, 
        name: "George Clinic Water Reticulation", 
        budget: "ZMW 2.8M", 
        spent: "ZMW 1.1M", 
        contractor: "AquaSafe", 
        progress: 30, 
        status: "Delayed",
        ward: "Kyawama",
        category: "Health",
        milestones: [
            { label: "Pipe Procurement", date: "Feb 01", done: true },
            { label: "Installation", date: "Mar 15", done: false },
        ]
    },
];
