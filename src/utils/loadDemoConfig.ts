import defaultConfig from '../config/defaultConfig.json';
import supplyChainConfig from '../config/templates/supplyChainConfig.json';

export const loadDemoConfig = (configName = 'default') => {
  switch (configName) {
    case 'supplyChainConfig':
      return supplyChainConfig;
    default:
      return defaultConfig;
  }
}; 