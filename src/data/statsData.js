// Dashboard statistics data
export const statsData = {
  // Summary cards data
  summaryCards: [
    {
      title: "Total Alerts",
      value: "38",
      change: "+12%",
      trend: "up",
      period: "last 7 days"
    },
    {
      title: "Active Threats",
      value: "17",
      change: "-3%",
      trend: "down",
      period: "last 7 days"
    },
    {
      title: "Monitored Assets",
      value: "78",
      change: "+5",
      trend: "up",
      period: "this month"
    },
    {
      title: "Avg Response Time",
      value: "4.3m",
      change: "-15%",
      trend: "down", // Down is good for response time
      period: "last 7 days"
    }
  ],
  
  // Threat detection performance over last 30 days
  threatDetectionStats: [
    { date: "2025-04-18", detected: 3, mitigated: 2 },
    { date: "2025-04-19", detected: 2, mitigated: 3 },
    { date: "2025-04-20", detected: 1, mitigated: 2 },
    { date: "2025-04-21", detected: 4, mitigated: 1 },
    { date: "2025-04-22", detected: 5, mitigated: 3 },
    { date: "2025-04-23", detected: 2, mitigated: 4 },
    { date: "2025-04-24", detected: 1, mitigated: 2 },
    { date: "2025-04-25", detected: 3, mitigated: 1 },
    { date: "2025-04-26", detected: 2, mitigated: 3 },
    { date: "2025-04-27", detected: 1, mitigated: 1 },
    { date: "2025-04-28", detected: 0, mitigated: 1 },
    { date: "2025-04-29", detected: 4, mitigated: 2 },
    { date: "2025-04-30", detected: 3, mitigated: 3 },
    { date: "2025-05-01", detected: 2, mitigated: 2 },
    { date: "2025-05-02", detected: 1, mitigated: 3 },
    { date: "2025-05-03", detected: 3, mitigated: 1 },
    { date: "2025-05-04", detected: 4, mitigated: 2 },
    { date: "2025-05-05", detected: 5, mitigated: 4 },
    { date: "2025-05-06", detected: 6, mitigated: 3 },
    { date: "2025-05-07", detected: 4, mitigated: 5 },
    { date: "2025-05-08", detected: 3, mitigated: 4 },
    { date: "2025-05-09", detected: 2, mitigated: 3 },
    { date: "2025-05-10", detected: 1, mitigated: 2 },
    { date: "2025-05-11", detected: 2, mitigated: 1 },
    { date: "2025-05-12", detected: 3, mitigated: 2 },
    { date: "2025-05-13", detected: 4, mitigated: 3 },
    { date: "2025-05-14", detected: 5, mitigated: 4 },
    { date: "2025-05-15", detected: 3, mitigated: 5 },
    { date: "2025-05-16", detected: 4, mitigated: 3 },
    { date: "2025-05-17", detected: 2, mitigated: 4 }
  ],
  
  // Threat types breakdown
  threatTypesData: [
    { type: "Data Breach", count: 14, severity: "high" },
    { type: "Malware", count: 11, severity: "high" },
    { type: "Phishing", count: 9, severity: "medium" },
    { type: "DDoS", count: 6, severity: "medium" },
    { type: "Insider Threat", count: 4, severity: "high" },
    { type: "Suspicious Login", count: 12, severity: "medium" },
    { type: "API Vulnerability", count: 8, severity: "medium" },
    { type: "Credential Leak", count: 10, severity: "high" },
    { type: "Misconfiguration", count: 7, severity: "low" },
    { type: "Other", count: 5, severity: "low" }
  ],

  // Protection status by system
  protectionStatus: [
    { system: "Web Application", status: "protected", vulnerabilities: 0 },
    { system: "Email Gateway", status: "protected", vulnerabilities: 1 },
    { system: "Network Perimeter", status: "protected", vulnerabilities: 0 },
    { system: "User Accounts", status: "vulnerable", vulnerabilities: 7 },
    { system: "Databases", status: "partially protected", vulnerabilities: 3 },
    { system: "Cloud Services", status: "protected", vulnerabilities: 2 },
    { system: "IoT Devices", status: "vulnerable", vulnerabilities: 12 },
    { system: "Mobile Devices", status: "partially protected", vulnerabilities: 5 }
  ]
};
