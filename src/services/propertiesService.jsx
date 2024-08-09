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

export const postNewProperty = (propertyData) => {
    return fetchWithResponse('properties',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(propertyData)
    })
}

