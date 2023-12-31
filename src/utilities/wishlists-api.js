import sendRequest from "./send-request";

// const BASE_URL = '/api/wishlists'
const BASE_URL = 'https://harley-finder-api.onrender.com/api/wishlists'

export async function getAllWishlists() {
    try {
      const response = await sendRequest(BASE_URL)
      const wishlists = response
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
        const response = await sendRequest(`${BASE_URL}/${id}`, 'PUT', wishlistData)
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed to update wishlist')
    }
}

export async function  deleteWishlist(id) {
    try {
        const response = await sendRequest(`${BASE_URL}/${id}`, 'DELETE')
        return response
    } catch(error) {
        console.log(error)
        throw new Error('Failed to delete wishlist')
    }
}

export async function addMotorcycle(motorcycleId, wishlistId) {
    try {
        const response = await sendRequest(`${BASE_URL}/wishlist/motorcycles`, 'POST', { motorcycleId, wishlistId })
        return response
    } catch (error) {
        console.log(error)
        throw new Error('Failed to add motorcycle to wishlist')
    }
}

export async function removeMotorcycle(motorcycleId, wishlistId) {
    try {
        const response = await sendRequest(`${BASE_URL}/${wishlistId}/motorcycles`, 'DELETE', { motorcycleId })
        return response
    } catch (error) {
        console.log(error)
        throw new Error('Failed to remove motorcycle from wishlist')
    }
}