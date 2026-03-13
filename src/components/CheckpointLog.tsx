'use client';

import React, { useState, useEffect } from 'react';

interface LogEntry {
  timestamp: string;
  agent: string;
  action: string;
  status: 'SUCCESS' | 'PROCESS' | 'INFO';
  detail: string;
}

const CheckpointLog: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [index, setIndex] = useState(0);

  const baseLogs: LogEntry[] = [
    { timestamp: 'T+0.001s', agent: 'SemanticParser-v4', action: 'INIT_CRAWL', status: 'SUCCESS', detail: 'Target document identified.' },
    { timestamp: 'T+0.045s', agent: 'NLP-Extractor', action: 'SCHEMA_VALIDATION', status: 'SUCCESS', detail: 'JSON-LD structure verified.' },
    { timestamp: 'T+0.122s', agent: 'Llama-Indexer', action: 'VECTOR_EMBEDDING', status: 'PROCESS', detail: 'Generating 1536d text embeddings...' },
    { timestamp: 'T+0.250s', agent: 'Logic-Checker', action: 'CONSISTENCY_CHECK', status: 'SUCCESS', detail: 'Linear narrative logical flow: 98%.' },
    { timestamp: 'T+0.410s', agent: 'AgentMagnet-Core', action: 'CHECKPOINT_SAVED', status: 'SUCCESS', detail: 'Metadata synchronized with Global Index.' },
  ];

  useEffect(() => {
    if (index < baseLogs.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, baseLogs[index]]);
        setIndex(prev => prev + 1);
      }, 400 + Math.random() * 800);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="checkpoint-container">
      <div className="checkpoint-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="checkpoint-title">AI AGENT COLLABORATION LOG (Entire-v1)</span>
      </div>
      <div className="checkpoint-body">
        {logs.map((log, i) => (
          <div key={i} className="log-line">
            <span className="log-time">[{log.timestamp}]</span>
            <span className={`log-status status-${log.status.toLowerCase()}`}>{log.status}</span>
            <span className="log-agent">{log.agent}</span>
            <span className="log-action">{log.action}:</span>
            <span className="log-detail">{log.detail}</span>
          </div>
        ))}
        {index < baseLogs.length && (
          <div className="log-line cursor-line">
            <span className="typing-cursor">_</span>
          </div>
        )}
      </div>

      <style jsx>{`
        .checkpoint-container {
          background: #0a0a0c;
          border: 1px solid #222;
          border-radius: 8px;
          margin: 40px 0;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 0.85rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .checkpoint-header {
          background: #1a1a1e;
          padding: 10px 15px;
          border-bottom: 1px solid #222;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .terminal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        .checkpoint-title {
          color: #888;
          font-weight: bold;
          margin-left: 10px;
          letter-spacing: 0.5px;
        }
        .checkpoint-body {
          padding: 15px;
          min-height: 180px;
          max-height: 300px;
          overflow-y: auto;
          color: #d1d1d1;
          line-height: 1.6;
        }
        .log-line {
          margin-bottom: 4px;
          animation: fadeIn 0.3s ease-out;
        }
        .log-time { color: #555; margin-right: 12px; }
        .log-status { 
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 0.7rem;
          margin-right: 10px;
          font-weight: bold;
        }
        .status-success { color: #27c93f; border: 1px solid rgba(39, 201, 63, 0.3); }
        .status-process { color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.3); }
        .status-info { color: #888; border: 1px solid #444; }
        .log-agent { color: #facc15; margin-right: 10px; }
        .log-action { color: #3b82f6; margin-right: 8px; }
        .log-detail { color: #eee; }
        
        .typing-cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background: #3b82f6;
          animation: blink 1s infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CheckpointLog;
