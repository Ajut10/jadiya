const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },

    image:{
        type:String,
        default: ''
    
    },
    images:[{
       type: String,
        
    }],
    price:{
        type:Number,
        default: 0
    },
    brand:{
        type:String,
        default:''
        
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    countInStock:{
        type: Number,
        required: true,
        min:0,
        max:255
    }
})

module.exports = mongoose.model('Product', productSchema)

