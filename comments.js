// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create a new express app
const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.json());
app.use(cors());

// Create a comments object to store comments
const commentsByPostId = {};

// Route handler for GET request
app.get('/posts/:id/comments', (req, res) => {
    // Send back comments for a given post id
    res.send(commentsByPostId[req.params.id] || []);
});

// Route handler for POST request
app.post('/posts/:id/comments', (req, res) => {
    // Generate a random id for the comment
    const commentId = randomBytes(4).toString('hex');
    // Get the content from the request body
    const { content } = req.body;
    // Get the post id from the request parameters
    const postId = req.params.id;
    // Get the comments for a given post id
    const comments = commentsByPostId[postId] || [];
    // Add a new comment to the comments object
    comments.push({ id: commentId, content });
    // Add the comments to the comments object
    commentsByPostId[postId] = comments;
    // Send back the comments to the user
    res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});