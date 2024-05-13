const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this product.'],
        },

        quantity: {
            type: Number,
            required: [true, 'Please provide a quantity for this product.'],
            default: 0,
        }, 

        price: {
            type: Number,
            required: [true, 'Please provide a price for this product.'],
            default: 0,
        },

        image: {
            type: String,
            required: false,
        }

    },

    {
        timestamps: true,
    }
    
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;