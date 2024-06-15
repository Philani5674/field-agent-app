export interface RequestOptions {
    method: string;
    headers?: HeadersInit;
    body?: any;
  }

  export interface Customer {
    createdAt: string;
    name: string;
    avatar?: string;
    id: string;
  }
  