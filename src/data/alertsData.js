// Sample hardcoded data for alerts
export const alertsData = [
  {
    id: 1,
    title: "Credentials leaked on darknet forum",
    description: "User credentials for admin@company.com were found in a data dump on a darknet forum.",
    timestamp: "2025-05-17T14:23:00",
    severity: "high",
    source: "DarkWeb Monitor",
    status: "new"
  },
  {
    id: 2,
    title: "Unusual login attempt detected",
    description: "Multiple failed login attempts from IP 192.168.1.45 targeting user accounts.",
    timestamp: "2025-05-17T12:05:00",
    severity: "medium",
    source: "Auth Log Monitor",
    status: "investigating"
  },
  {
    id: 3,
    title: "Potential phishing campaign",
    description: "Company name mentioned in phishing kit sold on underground marketplace.",
    timestamp: "2025-05-16T23:47:00",
    severity: "high",
    source: "Threat Intelligence",
    status: "investigating"
  },
  {
    id: 4,
    title: "API key exposed on GitHub",
    description: "Production API key was found in public GitHub repository.",
    timestamp: "2025-05-16T10:12:00",
    severity: "high",
    source: "Code Scanner",
    status: "resolved"
  },
  {
    id: 5,
    title: "Software vulnerability detected",
    description: "Critical vulnerability found in deployed software version 4.2.1.",
    timestamp: "2025-05-15T16:30:00",
    severity: "medium",
    source: "Vulnerability Scanner",
    status: "mitigated"
  },
  {
    id: 6,
    title: "Suspicious DNS queries",
    description: "Multiple DNS queries to known malicious domains detected from internal network.",
    timestamp: "2025-05-15T09:18:00",
    severity: "medium",
    source: "Network Monitor",
    status: "investigating"
  },
  {
    id: 7,
    title: "Outdated SSL certificate",
    description: "SSL certificate for api.company.com expires in 7 days.",
    timestamp: "2025-05-14T21:35:00",
    severity: "low",
    source: "Certificate Monitor",
    status: "pending"
  },
  {
    id: 8,
    title: "Insider threat discussion",
    description: "Company mentioned in darkweb forum discussing insider recruitment tactics.",
    timestamp: "2025-05-14T14:57:00",
    severity: "high",
    source: "DarkWeb Monitor",
    status: "investigating"
  }
];

// Statistics summary for dashboard
export const alertStats = {
  total: 38,
  new: 12,
  investigating: 8,
  resolved: 18,
  byCategory: {
    "Data Leak": 10,
    "Network Threat": 8,
    "Access Violation": 6,
    "Software Vulnerability": 9,
    "Phishing Attempt": 5
  },
  bySeverity: {
    high: 14,
    medium: 19,
    low: 5
  }
};

// Recent activity timeline data
export const recentActivity = [
  { time: "14:23:00", event: "New high severity alert detected", date: "Today" },
  { time: "13:05:12", event: "Alert #1042 marked as resolved", date: "Today" },
  { time: "09:47:33", event: "Scanning of network segment completed", date: "Today" },
  { time: "08:30:00", event: "Daily threat intelligence update", date: "Today" },
  { time: "23:15:22", event: "Suspicious login attempt blocked", date: "Yesterday" },
  { time: "17:42:10", event: "Vulnerability scan started", date: "Yesterday" }
];
