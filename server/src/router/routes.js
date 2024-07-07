// import authRoutes from "./router/auth.js";
import { createBlog, reviewBlog } from "../controllers/blog-review.js";
import newsRoutes from "./newsletter.js";
function routes(app) {
    app.get("/", (req, res) => {
        res.send("Hello from server");
    });

    // app.use('/auth', authRoutes);
    app.use("/newsletter", newsRoutes);
    app.use("/admin/blog/review/:id", reviewBlog);

    //for testing
    app.use("/admin/blog", createBlog);
}

export default routes;