import { API_BASE_URL } from "./apiBaseUrl.jsx"

const checkError = (res) => {
  if (!res.ok) {
    throw Error(res.status)
  }
  return res
}

const checkErrorJson = (res) => {
  if (!res.ok) {
    return res.json().then(error => {
      // Create and throw a custom error object
      throw { status: res.status, message: error.message || res.statusText }
    })
  }
  return res.json()
}


const catchError = (err) => {
  console.error('Fetch error:', err)
  if (err.status === 401) {
    console.error('Unauthorized Access - 401')
  }
  if (err.status === 404 || err.status === 400) {
    throw err
  }
}

export const fetchWithResponse = (resource, options) => fetch(`${API_BASE_URL}/${resource}`, options)
  .then(checkErrorJson)
  .catch(catchError)

export const fetchWithoutResponse = (resource, options) => fetch(`${API_BASE_URL}/${resource}`, options)
  .then(checkError)
  .catch(catchError)