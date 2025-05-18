import { useState } from 'react';
import { alertsData, alertStats } from '../data/alertsData';

function Alerts() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter alerts based on selected tab and search term
  const filteredAlerts = alertsData.filter(alert => {
    const matchesTab = selectedTab === 'all' || alert.status === selectedTab;
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });
  
  // Get alert severity count for badges
  const getSeverityCount = (severity) => {
    return alertsData.filter(alert => alert.severity === severity).length;
  };
  
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
        <h1 className="text-2xl font-semibold text-gray-900">Security Alerts</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor and manage security alerts detected by the system.
        </p>
      </div>
      
      {/* Alert Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-blue-100 p-3">
              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Total Alerts</dt>
              <dd className="text-lg font-semibold text-gray-900">{alertStats.total}</dd>
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
              <dt className="text-sm font-medium text-gray-500">High Severity</dt>
              <dd className="text-lg font-semibold text-gray-900">{alertStats.bySeverity.high}</dd>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-yellow-100 p-3">
              <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Medium Severity</dt>
              <dd className="text-lg font-semibold text-gray-900">{alertStats.bySeverity.medium}</dd>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md bg-green-100 p-3">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <dt className="text-sm font-medium text-gray-500">Low Severity</dt>
              <dd className="text-lg font-semibold text-gray-900">{alertStats.bySeverity.low}</dd>
            </div>
          </div>
        </div>
      </div>
      
      {/* Alert Filters */}
      <div className="bg-white shadow rounded-lg p-5 mb-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pl-10 sm:text-sm border-gray-300"
                  placeholder="Search alerts"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Export Report
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <nav className="flex space-x-4">
            <button
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'all' ? 'bg-blue-100 text-blue-800' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedTab('all')}
            >
              All
            </button>
            <button
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'new' ? 'bg-blue-100 text-blue-800' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedTab('new')}
            >
              New
            </button>
            <button
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'investigating' ? 'bg-blue-100 text-blue-800' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedTab('investigating')}
            >
              Investigating
            </button>
            <button
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'resolved' ? 'bg-blue-100 text-blue-800' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setSelectedTab('resolved')}
            >
              Resolved
            </button>
          </nav>
        </div>
      </div>
      
      {/* Alerts List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <li key={alert.id} className="px-6 py-5 hover:bg-gray-50">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-3 w-3 mt-2 rounded-full ${
                    alert.severity === 'high' ? 'bg-red-500' : 
                    alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">{alert.title}</h3>
                      <p className="text-sm text-gray-500">{formatTimestamp(alert.timestamp)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
                    <div className="mt-2 flex">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        alert.severity === 'high' ? 'bg-red-100 text-red-800' : 
                        alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {alert.severity}
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {alert.source}
                      </span>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {alert.status}
                      </span>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 hover:bg-blue-200">
                        View details
                      </button>
                      {alert.status !== 'resolved' && (
                        <button className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800 hover:bg-green-200">
                          {alert.status === 'new' ? 'Start investigation' : 'Mark as resolved'}
                        </button>
                      )}
                      <button className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
                        Assign
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="px-6 py-10 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No alerts found</h3>
              <p className="mt-1 text-sm text-gray-500">
                No alerts match your current filter criteria.
              </p>
            </li>
          )}
        </ul>
        
        {/* Pagination */}
        {filteredAlerts.length > 0 && (
          <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredAlerts.length}</span> of{' '}
                <span className="font-medium">{filteredAlerts.length}</span> results
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Alerts;
