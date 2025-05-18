import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { networkTrafficData, networkMetrics } from '../data/networkData';

function MonitorPage() {
  const [timeRange, setTimeRange] = useState('24h');
  const [selectedConnection, setSelectedConnection] = useState(null);
  
  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658'];
  
  // Format timestamp to readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Network Monitoring</h1>
        <p className="mt-1 text-sm text-gray-500">
          Real-time traffic analysis and threat detection across your network
        </p>
      </div>
      
      {/* Network Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Active Connections</dt>
              <dd className="text-lg font-semibold text-gray-900">{networkMetrics.activeConnections}</dd>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Monitored Assets</dt>
              <dd className="text-lg font-semibold text-gray-900">{networkMetrics.monitoredAssets}</dd>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-red-100 p-3">
              <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Detected Threats</dt>
              <dd className="text-lg font-semibold text-gray-900">{networkMetrics.detectedThreats}</dd>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-purple-100 p-3">
              <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Avg Response Time</dt>
              <dd className="text-lg font-semibold text-gray-900">{networkMetrics.averageResponseTime}</dd>
            </div>
          </div>
        </div>
      </div>
      
      {/* Time Range Filter */}
      <div className="bg-white shadow rounded-lg p-5 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Network Traffic</h2>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm font-medium ${
                timeRange === '24h' ? 'bg-blue-50 text-blue-700 z-10' : 'bg-white text-gray-700'
              }`}
              onClick={() => setTimeRange('24h')}
            >
              24h
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 text-sm font-medium ${
                timeRange === '7d' ? 'bg-blue-50 text-blue-700 z-10' : 'bg-white text-gray-700'
              }`}
              onClick={() => setTimeRange('7d')}
            >
              7d
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 text-sm font-medium ${
                timeRange === '30d' ? 'bg-blue-50 text-blue-700 z-10' : 'bg-white text-gray-700'
              }`}
              onClick={() => setTimeRange('30d')}
            >
              30d
            </button>
          </div>
        </div>
        
        {/* Network Traffic Line Chart */}
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={networkTrafficData.hourlyTraffic}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="traffic" 
                stroke="#3B82F6" 
                activeDot={{ r: 8 }} 
                name="Total Traffic" 
              />
              <Line 
                type="monotone" 
                dataKey="malicious" 
                stroke="#EF4444" 
                name="Malicious Traffic" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Protocol Distribution Pie Chart */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Traffic by Protocol</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={networkTrafficData.trafficByProtocol}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {networkTrafficData.trafficByProtocol.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Threat Origins Bar Chart */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Threat Origins</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={networkTrafficData.threatOriginByCountry.slice(0, 5)}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Threat Count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Network Segments Status */}
      <div className="bg-white shadow rounded-lg p-5 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Network Segments Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Segment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Latency (ms)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {networkMetrics.networkPerformance.map((segment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {segment.segment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      segment.status === 'normal' ? 'bg-green-100 text-green-800' : 
                      segment.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {segment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {segment.latency} ms
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Suspicious Connections Table */}
      <div className="bg-white shadow rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Suspicious Connections</h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source IP
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination IP
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Port/Protocol
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Flags
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {networkTrafficData.suspiciousConnections.map((connection) => (
                <tr key={connection.id} 
                    className={selectedConnection === connection.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                    onClick={() => setSelectedConnection(connection.id)}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {connection.sourceIp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {connection.destinationIp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {connection.port}/{connection.protocol}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatTimestamp(connection.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {connection.flags}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-2">Investigate</button>
                    <button className="text-red-600 hover:text-red-900">Block</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MonitorPage;
