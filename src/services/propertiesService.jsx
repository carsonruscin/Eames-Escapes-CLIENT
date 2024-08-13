import { fetchWithoutResponse, fetchWithResponse } from "./fetcher.jsx"


export const getAllProperties = () => {
    return fetchWithResponse('properties',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}

export const getPropertiesByOwner = () => {
    return fetchWithResponse('properties/by-owner',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}

export const getPropertiesByTypeLuxuryEstate = () => {
    return fetchWithResponse('properties/luxury-estates',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}

export const getPropertiesByTypeRanch = () => {
    return fetchWithResponse('properties/ranches',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}

export const getPropertiesByTypeCottage = () => {
    return fetchWithResponse('properties/cottages',{
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

export const updateProperty = (id, propertyData) => {
    return fetchWithResponse(`properties/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(propertyData)
    })
}

export const deleteProperty = (id) => {
    return fetchWithoutResponse(`properties/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}

