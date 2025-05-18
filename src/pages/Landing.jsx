import { useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  const [currentTab, setCurrentTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Cyber Threat Detection System
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-blue-100">
              Proactive defense against emerging cyber threats with real-time monitoring and alerts
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Go to Dashboard
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  to="/alerts"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
                >
                  View Alerts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              className={`${
                currentTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setCurrentTab('overview')}
            >
              Overview
            </button>
            <button
              className={`${
                currentTab === 'features'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setCurrentTab('features')}
            >
              Features
            </button>
            <button
              className={`${
                currentTab === 'howItWorks'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setCurrentTab('howItWorks')}
            >
              How It Works
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {currentTab === 'overview' && (
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protect Your Digital Assets</h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Problem Statement</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>
                      Cyber threats are evolving rapidly, especially in underground networks like the dark web. 
                      Most organizations and individuals lack real-time visibility into potential breaches, 
                      leaked credentials, or emerging threats targeting them specifically.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Our Solution</h3>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>
                      We're building a Cyber Threat Detection System that continuously monitors various 
                      threat sources, detects relevant cyber risks (like leaked data, credentials, 
                      or targeted mentions), and alerts users via a centralized dashboard with optional notifications.
                    </p>
                    <p className="mt-3">
                      Our platform provides a user-friendly interface to visualize threats, 
                      manage alerts, and take action before breaches occur. We combine 
                      real-time monitoring with intelligent analysis to prioritize alerts 
                      that matter most to your organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'features' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Real-time Monitoring</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Continuous scanning of dark web, paste sites, and known threat channels for mentions of your assets or credentials.
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Smart Alerts</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Prioritized notifications based on threat severity, with customizable alert thresholds to reduce noise.
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Visual Analytics</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Interactive dashboards with trend analysis, threat categorization, and visual attack patterns.
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Historical Tracking</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Long-term tracking of threat patterns and security incidents to identify recurring vulnerabilities.
                    </div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Easy Configuration</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Simple setup to monitor specific domains, keywords, and digital assets with minimal configuration.
                    </div>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Response Guidance</h3>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Actionable recommendations for each alert type to help security teams respond effectively.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'howItWorks' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-6 py-5">
                  <ol className="relative border-l border-gray-200">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                        <svg className="w-3.5 h-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                      <h3 className="font-medium leading-tight text-gray-900">Continuous Monitoring</h3>
                      <p className="text-sm text-gray-500 mt-2">Our system scans various sources including dark web forums, paste sites, leaked databases, and malicious infrastructure for mentions of your organization's digital assets.</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                        <svg className="w-3.5 h-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                      <h3 className="font-medium leading-tight text-gray-900">Threat Analysis</h3>
                      <p className="text-sm text-gray-500 mt-2">Detected mentions are analyzed using AI algorithms to determine if they represent actual threats and to categorize their severity level.</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                        <svg className="w-3.5 h-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <h3 className="font-medium leading-tight text-gray-900">Alert Generation</h3>
                      <p className="text-sm text-gray-500 mt-2">Real-time alerts are created for confirmed threats, with priority levels assigned based on potential impact and confidence scores.</p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white">
                        <svg className="w-3.5 h-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <h3 className="font-medium leading-tight text-gray-900">Remediation Support</h3>
                      <p className="text-sm text-gray-500 mt-2">Security teams receive actionable information and guidance on how to respond to each type of threat, helping to mitigate risks before they escalate.</p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Ready to get started?</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Explore our dashboard to see how our Cyber Threat Detection System can help protect your organization.</p>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Go to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
