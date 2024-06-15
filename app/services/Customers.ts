import { Customer } from '../interfaces/AllInterfaces';
import { get, post, patch, del } from './httpClient';

export async function fetchCustomer(): Promise<Customer[]> {
  return await get<Customer[]>('FieldAgent');
};

export async function createCustomer(customer: Customer): Promise<Customer>  {
  return await post<Customer>('FieldAgent', customer);
};

export async function updateCustomer(id: string, agent: Partial<Customer>): Promise<Customer> {
  return await patch<Customer>(`FieldAgent/${id}`, agent);
};

export async function deleteCustomer(id: string): Promise<void> {
  return await del<void>(`FieldAgent/${id}`);
};
