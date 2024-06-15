import { RequestOptions } from "../interfaces/AllInterfaces";
  
  const BASE_URL = 'https://666db7c67a3738f7cacd217d.mockapi.io/store/philani';
  
  export async function httpClient<T>(endpoint: string, options: RequestOptions ): Promise<T> {
    const url = `${BASE_URL}/${endpoint}`;
    const { method, headers, body } = options;
  
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  };
  
  export async function get<T>(endpoint: string): Promise<T> {
    return await httpClient<T>(endpoint, { method: 'GET'});
  };
  
  export async function post<T>(endpoint: string, body: any): Promise<T> {
    return await httpClient<T>(endpoint, { method: 'POST', body });
  };
  
  export async function patch<T>(endpoint: string, body: any): Promise<T> {
    return await httpClient<T>(endpoint, { method: 'PATCH', body });
  };
  
  export async function del<T>(endpoint: string): Promise<T> {
    return await httpClient<T>(endpoint, { method: 'DELETE' });
  };
  