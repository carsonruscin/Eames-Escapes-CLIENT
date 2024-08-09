import { fetchWithResponse } from "./fetcher.jsx"


export const getAllAmenities = () => {
    return fetchWithResponse('amenities',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
}