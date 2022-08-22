const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()


// Getting All
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
    } catch { 
      res.status(500).json({ message: err.message })
    }
}) 

// Getting one
router.get('/:id', getSubcriber,  (req, res) => {
    res.json(res.subsciber)
})

// Creating one
router.post('/', (req, res) => {
    const subscriber = new Subscriber ({
        name : req.body.name,
        subscribedToChannel: req.body,subscribedToChannel
    })
    try {
    const newSubscriber = await.subscriber.save()
    rest.status(201).json('newSubscriber')
    } catch (err) {
        rest.status(400).json({ message: err.message })
    }
})

// Updating one
router.patch('/:id', getSubcriber, (req, res) => {
    if (req.body.name != null) {
        res.subsciber.name = req.body.name
    }
    if (req.body.subscribedToChannel != null) {
        res.subsciber.subcribedToChannel = req.body.name
    }
    try {
        const updatedSubscriber = await.res.subscriber.save()
        res.json(updatingSubscriber)
    }   catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getSubcriber, async  (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted Subscriber' })
    }   catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getSubcriber(req, res, next) {
    let subscriber
    try{
        subscriber = await Subsriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(400).json ({ message: 'Cannot find subscriber' })
        }
    }catch (err) {
        return res.status(500).json({ message : err.message })
    }

    res.subscriber = subsciber
    next()
}

module.exports = router