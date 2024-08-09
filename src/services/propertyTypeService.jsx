import { fetchWithResponse } from "./fetcher.jsx"


export const getAllPropertyTypes = () => {
    return fetchWithResponse('property-types',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}