'use client'
import React, { useEffect, useState } from 'react';
import { fetchCustomer } from '../services/Customers';
import { Customer } from '../interfaces/AllInterfaces';

const CustomersList: React.FC = () => {
    const [data, setData] = useState<Customer[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const agents = await fetchCustomer();
                setData(agents);
            } catch (error) {
                console.error('Failed to fetch agents:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return (
            <div>
                <span className="loading loading-ring loading-lg"></span>
            </div>
            );
    }

    return (
        <div>
            <h1>Field Agents</h1>
            <ul>
                {data.map(agent => (
                    <li key={agent.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={agent.avatar} alt={agent.name} width="50" height="50" style={{ marginRight: '10px' }} />
                        <div>
                            <div>{agent.name}</div>
                            <div>Created at: {new Date(agent.createdAt).toLocaleString()}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomersList;
