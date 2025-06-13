// Copyright 2017-2025 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * Debug logger utility for tracking referendum state changes
 * Logs are saved to localStorage and can be exported to a file
 */

// Store logs with timestamps
const logs: {
  timestamp: string;
  type: 'api' | 'component' | 'userAction' | 'autoEvent';
  message: string;
  data?: unknown;
}[] = [];

// Maximum number of logs to keep in memory
const MAX_LOGS = 1000;

/**
 * Log an event
 */
// This initial log will help verify if the TypeScript version is being used
console.log('%c DEMOCRACY DEBUG LOGGER INITIALIZED (TS Version)', 'background: #222; color: #bada55; font-size: 14px;');

export function logEvent (type: 'api' | 'component' | 'userAction' | 'autoEvent', message: string, data?: unknown): void {
  const timestamp = new Date().toISOString();
  const logEntry = { data, message, timestamp, type };

  // Add to memory
  logs.push(logEntry);

  // Trim if necessary
  if (logs.length > MAX_LOGS) {
    logs.shift();
  }

  // Also log to console with distinctive styling
  if (type === 'userAction') {
    console.log(`%c [USER ACTION] ${timestamp} - ${message}`, 'background: #2c3e50; color: #e74c3c; font-weight: bold;', data);
  } else if (type === 'autoEvent') {
    console.log(`%c [AUTO EVENT] ${timestamp} - ${message}`, 'background: #2c3e50; color: #f39c12; font-weight: bold;', data);
  } else if (type === 'api') {
    console.log(`%c [API] ${timestamp} - ${message}`, 'background: #2c3e50; color: #3498db; font-weight: bold;', data);
  } else {
    console.log(`%c [COMPONENT] ${timestamp} - ${message}`, 'background: #2c3e50; color: #2ecc71; font-weight: bold;', data);
  }

  // Store in localStorage
  try {
    localStorage.setItem('democracy-debug-logs', JSON.stringify(logs));
  } catch (e) {
    console.warn('Failed to store logs in localStorage', e);
  }
}

/**
 * Log an API event
 */
export function logApi (message: string, data?: unknown): void {
  logEvent('api', message, data);
}

/**
 * Log a component event
 */
export function logComponent (message: string, data?: unknown): void {
  logEvent('component', message, data);
}

/**
 * Log a user action (like clicking the expand button)
 */
export function logUserAction (message: string, data?: unknown): void {
  logEvent('userAction', message, data);
}

/**
 * Log an automatic event (something happening without user interaction)
 */
export function logAutoEvent (message: string, data?: unknown): void {
  logEvent('autoEvent', message, data);
}

/**
 * Track the last time a user action was performed
 */
let lastUserAction = Date.now();

export function recordUserAction (): void {
  lastUserAction = Date.now();
}

export function isAutoEvent (): boolean {
  // If it's been more than 5 seconds since the last user action,
  // consider this an automatic event
  return Date.now() - lastUserAction > 5000;
}

/**
 * Export logs to a file
 */
export function exportLogs (): boolean {
  console.warn('EXPORTING LOGS (TS): Starting export process');

  try {
    // Log the current state before export
    console.log('Current logs count:', logs.length);

    // Create the download file
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const filename = `democracy-logs-${timestamp}.json`;
    const logsText = JSON.stringify(logs, null, 2);

    console.log('Created logs JSON with size:', logsText.length);

    // Create blob and download link
    const blob = new Blob([logsText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    // Set download attributes and append to document
    a.href = url;
    a.download = filename;
    a.textContent = 'Download Logs';
    a.style.display = 'none';
    document.body.appendChild(a);

    // Trigger download
    console.log('Triggering download of file:', filename);
    a.click();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      console.log('Export complete and resources cleaned up');
    }, 1000);

    return true;
  } catch (error) {
    console.error('ERROR EXPORTING LOGS:', error);

    return false;
  }
}

/**
 * Clear logs
 */
export function clearLogs (): void {
  logs.length = 0;
  localStorage.removeItem('democracy-debug-logs');
}

/**
 * Add a debug UI to the page
 * This should be called once at the app root level
 */
export function createDebugUI (): HTMLDivElement {
  const container = document.createElement('div');

  container.style.position = 'fixed';
  container.style.bottom = '10px';
  container.style.right = '10px';
  container.style.zIndex = '9999';
  container.style.background = '#f0f0f0';
  container.style.border = '1px solid #ccc';
  container.style.padding = '10px';
  container.style.borderRadius = '5px';

  const exportButton = document.createElement('button');

  exportButton.textContent = 'Export Logs';
  exportButton.onclick = exportLogs;

  const clearButton = document.createElement('button');

  clearButton.textContent = 'Clear Logs';
  clearButton.style.marginLeft = '10px';
  clearButton.onclick = clearLogs;

  const logCount = document.createElement('div');

  logCount.textContent = `Logs: ${logs.length}`;
  logCount.style.marginTop = '5px';

  // Update log count every second
  setInterval(() => {
    logCount.textContent = `Logs: ${logs.length}`;
  }, 1000);

  container.appendChild(exportButton);
  container.appendChild(clearButton);
  container.appendChild(logCount);

  document.body.appendChild(container);

  return container;
}

// Create an object to track expanded referendums
const expandedReferendums: Record<string, boolean> = {};

export function setReferendumExpanded (id: string, expanded: boolean): void {
  expandedReferendums[id] = expanded;
  logEvent('component', `Referendum ${id} expansion state changed`, { expanded });
}

export function isReferendumExpanded (id: string): boolean {
  return !!expandedReferendums[id];
}
