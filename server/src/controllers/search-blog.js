import Blog from '../model/blog.js';

export async function handleBlogSearch(req, res) {
    const { tags, time, query } = req.query;
    
    try {
        let requiredBlogs = await Blog.find({});

        if (tags) {
            const taglist = tags.split(",");
            requiredBlogs = requiredBlogs.filter(blog =>
                taglist.every(tag => blog.tags.includes(tag))
            );
        }
    
        if (time) {
            requiredBlogs = requiredBlogs.filter(blog =>
                blog.date === time
            );
        }

        if (query) {
            requiredBlogs = requiredBlogs.filter(blog =>
                blog.content.toLowerCase().includes(query.toLowerCase()) ||
                blog.title.toLowerCase().includes(query.toLowerCase())
            );
        }
        
        res.json(requiredBlogs);
    } catch (error) {
        res.status(500).json({ message: "Failed to search blogs based on given params", error });
    }  
}
