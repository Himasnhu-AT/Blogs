import mongoose, { Schema } from "mongoose";
import User from "./user.js"; 

const TagSchema = new mongoose.Schema({
  name: {  
    type: String,
    required: true
  }
});

const CommentSchema = new mongoose.Schema({
  user: {  
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {  
    type: String,
    required: true
  },
  date: {  
    type: Date,
    default: Date.now
  }
});

const BlogSchema = new mongoose.Schema({
  title: {  
    type: String,
    required: true
  },
  content: {  
    type: String,
    required: true
  },
  tags: [{  
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    default: null
  }],
  image: {  
    type: String,
    required: true
  },
  comments: [{  
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    default: null
  }],
  review: {  
    type: String,
    enum: ['pending', 'approved', 'update'],
    default: 'pending'
  },
  reviewMessage: {  
    type: String,
    default: null
  }
});

const Blog = mongoose.model('Blog', BlogSchema);
const Comment = mongoose.model('Comment', CommentSchema);
const Tag = mongoose.model('Tag', TagSchema);

export { Blog, Tag, Comment, User };
