// Sample hardcoded data for network monitoring
export const networkTrafficData = {
  // Time-series data for line chart (hourly traffic)
  hourlyTraffic: [
    { hour: "00:00", traffic: 24, malicious: 2 },
    { hour: "01:00", traffic: 18, malicious: 1 },
    { hour: "02:00", traffic: 15, malicious: 0 },
    { hour: "03:00", traffic: 12, malicious: 0 },
    { hour: "04:00", traffic: 14, malicious: 1 },
    { hour: "05:00", traffic: 16, malicious: 0 },
    { hour: "06:00", traffic: 25, malicious: 0 },
    { hour: "07:00", traffic: 42, malicious: 1 },
    { hour: "08:00", traffic: 68, malicious: 3 },
    { hour: "09:00", traffic: 86, malicious: 5 },
    { hour: "10:00", traffic: 92, malicious: 4 },
    { hour: "11:00", traffic: 95, malicious: 2 },
    { hour: "12:00", traffic: 88, malicious: 1 },
    { hour: "13:00", traffic: 90, malicious: 2 },
    { hour: "14:00", traffic: 93, malicious: 6 },
    { hour: "15:00", traffic: 89, malicious: 3 },
    { hour: "16:00", traffic: 78, malicious: 2 },
    { hour: "17:00", traffic: 65, malicious: 1 },
    { hour: "18:00", traffic: 52, malicious: 0 },
    { hour: "19:00", traffic: 45, malicious: 1 },
    { hour: "20:00", traffic: 36, malicious: 2 },
    { hour: "21:00", traffic: 34, malicious: 3 },
    { hour: "22:00", traffic: 30, malicious: 2 },
    { hour: "23:00", traffic: 28, malicious: 1 }
  ],
  
  // Data for traffic by protocol (pie chart)
  trafficByProtocol: [
    { protocol: "HTTPS", value: 65 },
    { protocol: "HTTP", value: 12 },
    { protocol: "DNS", value: 8 },
    { protocol: "SMTP", value: 6 },
    { protocol: "SSH", value: 5 },
    { protocol: "FTP", value: 2 },
    { protocol: "Other", value: 2 }
  ],
  
  // Data for threat origin by country (for map visualization)
  threatOriginByCountry: [
    { country: "United States", count: 245 },
    { country: "China", count: 187 },
    { country: "Russia", count: 142 },
    { country: "Brazil", count: 86 },
    { country: "India", count: 72 },
    { country: "Nigeria", count: 54 },
    { country: "Germany", count: 48 },
    { country: "United Kingdom", count: 41 },
    { country: "Netherlands", count: 37 },
    { country: "Ukraine", count: 33 }
  ],
  
  // Sample suspicious connections
  suspiciousConnections: [
    { id: 1, sourceIp: "192.168.1.45", destinationIp: "45.227.255.84", port: 443, protocol: "HTTPS", timestamp: "2025-05-17T14:23:45", flags: "Suspicious C2 domain" },
    { id: 2, sourceIp: "192.168.1.102", destinationIp: "103.94.185.12", port: 80, protocol: "HTTP", timestamp: "2025-05-17T13:56:18", flags: "Known malware distribution" },
    { id: 3, sourceIp: "192.168.1.78", destinationIp: "185.176.43.88", port: 23, protocol: "TELNET", timestamp: "2025-05-17T12:41:02", flags: "Botnet communication" },
    { id: 4, sourceIp: "192.168.1.156", destinationIp: "91.121.87.173", port: 25, protocol: "SMTP", timestamp: "2025-05-17T12:23:17", flags: "Phishing campaign" },
    { id: 5, sourceIp: "192.168.1.30", destinationIp: "176.123.5.240", port: 443, protocol: "HTTPS", timestamp: "2025-05-17T11:17:53", flags: "Data exfiltration" }
  ]
};

// Network security metrics
export const networkMetrics = {
  activeConnections: 143,
  monitoredAssets: 78,
  detectedThreats: 17,
  averageResponseTime: "4.3 minutes",
  scanCompletionRate: 92,
  networkPerformance: [
    { segment: "External DMZ", status: "normal", latency: 23 },
    { segment: "Internal Network", status: "normal", latency: 12 },
    { segment: "Cloud Services", status: "degraded", latency: 45 },
    { segment: "Remote Access", status: "normal", latency: 28 }
  ]
};
