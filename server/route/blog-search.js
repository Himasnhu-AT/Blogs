import express from 'express';
const router = express.Router();
import {Blog} from '../src/model/blogs.js'; 

router.get("/get/:id",async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId)
            .populate('tags')         
            .populate('comments'); 

        if (blog) {
            res.status(200).json(blog); 
        } else {
            res.status(404).send("Blog not found"); 
        }
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).send("Internal Server Error"); 
    }
});

export default router;
