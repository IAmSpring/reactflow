import { Node } from '@xyflow/react';

export interface NodeProps<T = any> {
  data: T;
  isHorizontal?: boolean;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface BaseNodeData {
  label: string;
  isHorizontal?: boolean;
  [key: string]: unknown;
}

export interface ButtonNodeData extends BaseNodeData {
  onClick?: () => void;
}

export interface ApiNodeData extends BaseNodeData {
  id: string;
  url: string;
  method: HttpMethod;
  payload?: string;
  dataKey?: string;
  isLoading?: boolean;
  error?: string;
  response?: any;
  output?: any;
  lastRun?: Date;
  executeApiCall?: () => Promise<void>;
  onUpdate?: (data: ApiNodeData) => void;
  input?: any;
}

export interface ScriptNodeData extends BaseNodeData {
  code: string;
  isLoading?: boolean;
  input?: any;
  output?: any;
  error?: string;
  lastRun?: Date;
  onUpdate?: (data: ScriptNodeData) => void;
  executeScript?: () => Promise<void>;
}

export interface CmsNodeData extends BaseNodeData {
  id: string;
  contentType: string;
  endpoint: string;
  filters?: Record<string, any>;
  sort?: string;
  limit?: number;
  apiKey?: string;
  response?: any;
  error?: string;
  lastRun?: Date;
  executeQuery?: () => Promise<void>;
  onUpdate?: (data: CmsNodeData) => void;
}

export interface ProjectMgmtNodeData extends BaseNodeData {
  id: string;
  platform: string;
  projectKey?: string;
  issueType?: string;
  jqlQuery?: string;
  apiToken?: string;
  response?: any;
  error?: string;
  lastRun?: Date;
  executeQuery?: () => Promise<void>;
  onUpdate?: (data: ProjectMgmtNodeData) => void;
}

export interface ClientNodeData extends BaseNodeData {
  description: string;
  location: string;
  products: string[];
  requirements: {
    quality: string;
    delivery: string;
    certifications: string[];
  };
}

export interface ProductNodeData extends BaseNodeData {
  components: string[];
  specifications: {
    dimensions: string;
    material: string;
    finish: string;
  };
}

export interface VendorNodeData extends BaseNodeData {
  location: {
    city: string;
    state: string;
  };
  components: string[];
  capacity: string;
  leadTime: string;
  pricing: {
    price: string;
    unit: string;
  };
  certifications: string[];
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  isBackupVendor?: boolean;
}

export interface VendorNodeProps {
  data: VendorNodeData;
  isConnectable?: boolean;
  selected?: boolean;
}

export type ButtonNodeType = Node<ButtonNodeData>;
export type ApiNodeType = Node<ApiNodeData>;
export type ScriptNodeType = Node<ScriptNodeData>;
export type CmsNodeType = Node<CmsNodeData>;
export type ProjectMgmtNodeType = Node<ProjectMgmtNodeData>;
export type ClientNodeType = Node<ClientNodeData>;
export type ProductNodeType = Node<ProductNodeData>;
export type VendorNodeType = Node<VendorNodeData>;

export type AppNode = ButtonNodeType | ApiNodeType | ScriptNodeType | CmsNodeType | ProjectMgmtNodeType | ClientNodeType | ProductNodeType | VendorNodeType;

export type NodeType = 'button' | 'api' | 'python' | 'javascript' | 'cms' | 'projectMgmt' | 'vendor' | 'client' | 'product';
