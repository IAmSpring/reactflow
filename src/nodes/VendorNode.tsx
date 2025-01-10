import React from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';
import type { VendorNodeProps } from './types';

export const VendorNode = React.memo(({ data, isConnectable = true, selected }: VendorNodeProps) => {
  const handleStyle = { background: '#4CAF50' };
  const isHorizontal = data.isHorizontal;
  const isBackup = data.isBackupVendor;

  return (
    <div style={{
      padding: '10px',
      borderRadius: '3px',
      border: `1px solid ${isBackup ? '#FFA726' : '#2196F3'}`,
      background: 'white',
      minWidth: '250px',
      position: 'relative'
    }}>
      <NodeResizer
        color={isBackup ? '#FFA726' : '#2196F3'}
        isVisible={selected}
        minWidth={250}
        minHeight={100}
        handleStyle={{ width: '8px', height: '8px' }}
        lineStyle={{ border: `1px solid ${isBackup ? '#FFA726' : '#2196F3'}` }}
        keepAspectRatio={false}
      />
      <Handle
        type="target"
        position={isHorizontal ? Position.Left : Position.Top}
        style={handleStyle}
        isConnectable={isConnectable}
      />
      
      <div style={{ marginBottom: '8px' }}>
        <span>🏭 {data.companyName as string}</span>
        {isBackup && (
          <span style={{ 
            marginLeft: '8px', 
            fontSize: '12px',
            backgroundColor: '#FFA726',
            color: 'white',
            padding: '2px 6px',
            borderRadius: '3px'
          }}>
            Backup
          </span>
        )}
      </div>

      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
        📍 {typeof data.location === 'string' ? data.location : `${data.location.city}, ${data.location.state}`}
      </div>

      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
        🔧 Components: {data.components.join(', ')}
      </div>

      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
        ⏱️ Lead Time: {data.leadTime}
      </div>

      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
        💰 Price: {`${data.pricing}`}
      </div>

      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
        📦 Capacity: {data.capacity} units/month
      </div>

      <Handle
        type="source"
        position={isHorizontal ? Position.Right : Position.Bottom}
        style={handleStyle}
        isConnectable={isConnectable}
      />
    </div>
  );
}); 