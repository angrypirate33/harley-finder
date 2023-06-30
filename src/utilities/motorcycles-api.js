import sendRequest from "./send-request";

const BASE_URL = '/api/motorcycles'

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