import { fetchWithResponse } from "./fetcher.jsx"


export const getAllProperties = () => {
    return fetchWithResponse('properties',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}