const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//http://localhost:5000/api/post (GET)

router.get('/', async (request, response) => {
const posts = await Post.find({})
response.status(200).json(posts)
})

router.post('/', async (request, response) => {
const postData = {
    title: request.body.title,
    text: request.body.text
}

const post = new Post(postData)
await post.save()

response.status(201).json(post)

})

router.delete('/:postId', async (request, response) => {
await Post.remove({_id: request.params.postId})
response.status(200).json({
    message: 'Удалено'
})

})






module.exports = router