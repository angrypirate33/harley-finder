import sendRequest from "./send-request";

const BASE_URL = '/api/wishlists'

export function getAllWishlists() {
    return sendRequest(BASE_URL)
}

export function getWishlistById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function createWishlist(wishlistData) {
    return sendRequest(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(wishlistData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function updateWishlist(id, wishlistData) {
    return sendRequest(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(wishlistData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function  deleteWishlist(id) {
    return sendRequest(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
}