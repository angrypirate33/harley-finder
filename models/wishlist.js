const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    motorcycles: [{
        type: Schema.Types.ObjectId, ref: 'Motorcycle'
    }],
    public: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

module.exports = mongoose.model('Wishlist', wishlistSchema)