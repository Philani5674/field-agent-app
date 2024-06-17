'use client'
import React, { useEffect, useState } from 'react';
import { fetchCustomer } from '../services/Customers';
import { Customer } from '../interfaces/AllInterfaces';

const CustomersList: React.FC = () => {
    const [data, setData] = useState<Customer[] | null>(null);

    async function fetchData() {
        try {
            const customers = await fetchCustomer();
            setData(customers);
        } catch (error) {
            console.error('Failed to fetch agents:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return displayCustomers(data as Customer[] | null);

    function displayCustomers(data: Customer[] | null) {
        if (data) {

            return data.length > 0 ? (
                <div>
                    <h1>customers</h1>
                    <div className='bg-base-200 p-2 rounded-md'>
                        <label className="input input-bordered input-info w-fit flex items-center rounded-xl gap-2">
                            <input type="text" className=" " placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                    <div className='flex items-start flex-wrap gap-4 p-2 rounded-md' >
                        {data.map(agent => (
                            <div key={agent.id} className='flex items-center bg-base-200 p-2 gap-2 rounded-lg'>
                                <div className='mask mask-squircle border-emerald-950 w-14 h-14'>
                                    <img src={agent.avatar} alt={agent.name} width="50" height="50" style={{ marginRight: '10px' }} />
                                </div>
                                <div>
                                    <p >{agent.name}</p>
                                    <span >Created at: {new Date(agent.createdAt).toUTCString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (<div>empty</div>);
            
        } else {
            return displayLoader();
        }

    }
    function displayLoader() {
        return (
            <div className='flex items-center gap-2 w-full'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
};

export default CustomersList;
