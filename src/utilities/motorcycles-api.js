import sendRequest from "./send-request";

// const BASE_URL = '/api/motorcycles'
const BASE_URL = 'https://harley-finder-api.onrender.com/api/motorcycles'

export async function getMotorcycles() {
    try {
        const response = await sendRequest(BASE_URL)
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed to fetch motorcycles')
    }
}

export async function getMotorcycle(id) {
    try {
        const response = await sendRequest(`${BASE_URL}/${id}`)
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed to fetch motorcycle')
    }
}

export async function getUniqueModels() {
    try {
        const response = await sendRequest(`${BASE_URL}/models`)
        return response
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch unique models')
    }
}

export async function getModelsBySearch(searchTerm = '') {
    try {
        const response = await sendRequest(`${BASE_URL}/searchmodels?search=${searchTerm}`)
        return response
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch models by search term')
    }
}

export async function searchMotorcycles(criteria) {
    try {
        const response = await sendRequest(`${BASE_URL}/search`, 'POST', criteria)
        return response
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch motorcycles')
    }
}