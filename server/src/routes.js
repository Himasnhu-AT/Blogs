// import authRoutes from "./router/auth.js";
const express = require('express');
const router = express.Router();
function routes(app) {
    app.get("/", (req, res) => {
        res.send("Hello from server");
    });
    router.get('/:id', async (req, res) => {
        try {
            const blog = await Blog.findById(req.params.id);
            if (blog == null) {
                return res.status(404).json({ message: 'Cannot find blog' });
            }
            res.json(blog);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });



    // app.use('/auth', authRoutes);
}




export default routes;