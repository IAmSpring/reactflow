import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeProps } from './types';

interface ClientNodeData {
  label: string;
  description: string;
  location: string;
  products: string[];
  requirements: {
    quality: string;
    delivery: string;
    certifications: string[];
  };
}

export const ClientNode: React.FC<NodeProps<ClientNodeData>> = ({ data, isHorizontal }) => {
  return (
    <div style={{
      padding: '10px',
      borderRadius: '3px',
      border: '1px solid #4CAF50',
      background: 'white',
      minWidth: '250px',
      position: 'relative'
    }}>
      <Handle
        type="source"
        position={isHorizontal ? Position.Right : Position.Bottom}
        style={{ background: '#555' }}
      />
      <div className="node-header">
        <h3>{data.label}</h3>
        <div className="node-subtitle">{data.location}</div>
      </div>
      <div className="node-content">
        <p>{data.description}</p>
        <div className="node-section">
          <strong>Products:</strong>
          <ul>
            {data.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
        <div className="node-section">
          <strong>Requirements:</strong>
          <ul>
            <li>Quality: {data.requirements.quality}</li>
            <li>Delivery: {data.requirements.delivery}</li>
            <li>Certifications: {data.requirements.certifications.join(', ')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 