import sendRequest from "./send-request";

const BASE_URL = '/api/wishlists'

export async function getAllWishlists() {
    try {
      const response = await sendRequest(BASE_URL)
      const wishlists = response.data
      return wishlists
    } catch (error) {
      console.log(error)
      throw new Error('Failed to fetch wishlists')
    }
  }

export async function getWishlistById(id) {
    try {
        const response = await sendRequest(`${BASE_URL}/${id}`)
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed to fetch wishlist by ID')
    }
}

export async function createWishlist(wishlistData) {
    try {
        const response = await sendRequest(BASE_URL, 'POST', wishlistData)
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed ot create wishlist')
    }
}

export async function updateWishlist(id, wishlistData) {
    try {
        return sendRequest(`${BASE_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(wishlistData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(error) {
        console.log(error)
        throw new Error('Failed to update wishlist')
    }
}

export async function  deleteWishlist(id) {
    try {
        const response = sendRequest(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        })
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed to delete wishlist')
    }
}