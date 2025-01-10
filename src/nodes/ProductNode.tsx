import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeProps } from './types';

interface ProductNodeData {
  label: string;
  components: string[];
  specifications: {
    dimensions: string;
    material: string;
    finish: string;
  };
}

export const ProductNode: React.FC<NodeProps<ProductNodeData>> = ({ data, isHorizontal }) => {
  return (
    <div style={{
      padding: '10px',
      borderRadius: '3px',
      border: '1px solid #9C27B0',
      background: 'white',
      minWidth: '250px',
      position: 'relative'
    }}>
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
        <div className="node-section">
          <strong>Components:</strong>
          <ul>
            {data.components.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </div>
        <div className="node-section">
          <strong>Specifications:</strong>
          <ul>
            <li>Dimensions: {data.specifications.dimensions}</li>
            <li>Material: {data.specifications.material}</li>
            <li>Finish: {data.specifications.finish}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 