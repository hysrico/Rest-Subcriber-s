const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subcriberdToChannel: {
        type: String,
        required: true
    },
    subscriberDate: {
        type: Date,
        required: true, 
        default: Date.now
    }
})

modules.exports = mongoose.model('Subscriber', subscribersSchema)