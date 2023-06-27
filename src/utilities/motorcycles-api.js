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