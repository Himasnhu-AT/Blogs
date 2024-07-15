import Blog from "../model/blog.js";
async function getAllBlogs(req, res) {
    try {
        const AllBlogs = await Blog.find({})
        const responseArr = AllBlogs.map((blog) => {
            return ({
                id: blog._id,
                title: blog.title,
                content: blog.content,
                image: blog.image
            });
        });
        res.status(200).send(responseArr);
    } catch (error) {
        res.status(404).send([{ "error": "Error fetching blogs." }]);
    }
}
export default getAllBlogs;
