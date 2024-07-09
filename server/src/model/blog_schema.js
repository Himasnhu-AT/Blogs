const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }],
    image: {
        type: String,
        required: true
    },
    comments: [commentSchema],
    review: {
        type: String,
        enum: ['pending', 'approved', 'update'],
        default: 'pending'
    },
    reviewMessage: {
        type: String
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
