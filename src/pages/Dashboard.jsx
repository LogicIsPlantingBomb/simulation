import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { statsData } from '../data/statsData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#d0ed57', '#83a6ed'];
const SEVERITY_COLORS = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#10b981'
};

function Dashboard() {
  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Security Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your security posture and recent threat activity.
        </p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.summaryCards.map((card, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-500">{card.title}</h2>
              <span className={`rounded-full p-1 ${card.trend === 'up' 
                ? (card.title === 'Avg Response Time' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800') 
                : (card.title === 'Avg Response Time' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')}`}>
                {card.trend === 'up' ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-3xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs text-gray-500 mt-1">
                {card.change} {card.period}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Threats Detection Chart */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-lg font-medium text-gray-900">Threat Detection Trends</h2>
          <p className="text-sm text-gray-500 mb-4">Last 30 days detection and mitigation</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={statsData.threatDetectionStats.slice(-14)} // Show only last 14 days for readability
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="detected" stroke="#ef4444" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="mitigated" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Threat Types Breakdown */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-lg font-medium text-gray-900">Threat Types</h2>
          <p className="text-sm text-gray-500 mb-4">Distribution of threats by category</p>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={statsData.threatTypesData.sort((a, b) => b.count - a.count).slice(0, 7)} // Top 7 types by count
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="type" type="category" width={100} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="Count">
                  {statsData.threatTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[entry.severity]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Protection Status */}
      <div className="bg-white shadow rounded-lg p-5 mb-8">
        <h2 className="text-lg font-medium text-gray-900">Protection Status</h2>
        <p className="text-sm text-gray-500 mb-4">Current security status by system</p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">System</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vulnerabilities</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {statsData.protectionStatus.map((system, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {system.system}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${system.status === 'protected' ? 'bg-green-100 text-green-800' : 
                         system.status === 'partially protected' ? 'bg-yellow-100 text-yellow-800' : 
                         'bg-red-100 text-red-800'}`}>
                      {system.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {system.vulnerabilities}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900">View details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recent Alerts Preview */}
      <div className="bg-white shadow rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Recent Alerts</h2>
          <a href="/alerts" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            View all alerts
          </a>
        </div>
        <div className="space-y-4">
          {Array(3).fill().map((_, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-md ${
                idx === 0 ? 'alert-high' : idx === 1 ? 'alert-medium' : 'alert-low'
              }`}
            >
              <div className="flex justify-between">
                <h3 className="text-sm font-medium">
                  {idx === 0 ? 'Credentials leaked on darknet forum' : 
                   idx === 1 ? 'Unusual login attempt detected' : 
                   'Outdated SSL certificate'}
                </h3>
                <span className="text-xs font-medium">
                  {idx === 0 ? '14:23' : idx === 1 ? '12:05' : '09:18'}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {idx === 0 ? 'User credentials for admin@company.com were found in a data dump on a darknet forum.' : 
                 idx === 1 ? 'Multiple failed login attempts from IP 192.168.1.45 targeting user accounts.' : 
                 'SSL certificate for api.company.com expires in 7 days.'}
              </p>
              <div className="mt-2 flex space-x-2">
                <button className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 hover:bg-blue-200">
                  View details
                </button>
                <button className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800 hover:bg-green-200">
                  Mark as resolved
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
