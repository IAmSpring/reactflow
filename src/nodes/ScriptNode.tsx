import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeProps, ScriptNodeData } from './types';

export const ScriptNode: React.FC<NodeProps<ScriptNodeData>> = ({ data, isHorizontal }) => {
  return (
    <div className="node script-node">
      <Handle
        type="target"
        position={isHorizontal ? Position.Left : Position.Top}
        style={{ background: '#555' }}
      />
      <Handle
        type="source"
        position={isHorizontal ? Position.Right : Position.Bottom}
        style={{ background: '#555' }}
      />
      <div className="node-header">
        <h3>{data.label}</h3>
      </div>
      <div className="node-content">
        <pre style={{ 
          margin: '10px 0',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          <code>{data.code}</code>
        </pre>
        {data.output && (
          <div style={{ marginTop: '10px' }}>
            <strong>Output:</strong>
            <pre style={{ 
              margin: '5px 0',
              padding: '8px',
              backgroundColor: '#e8f5e9',
              borderRadius: '4px',
              maxHeight: '100px',
              overflow: 'auto'
            }}>
              <code>{JSON.stringify(data.output, null, 2)}</code>
            </pre>
          </div>
        )}
        {data.error && (
          <div style={{ 
            marginTop: '10px',
            padding: '8px',
            backgroundColor: '#ffebee',
            borderRadius: '4px',
            color: '#c62828'
          }}>
            {data.error}
          </div>
        )}
        {data.lastRun && (
          <div style={{ 
            marginTop: '5px',
            fontSize: '0.8em',
            color: '#666'
          }}>
            Last run: {new Date(data.lastRun).toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
}; 