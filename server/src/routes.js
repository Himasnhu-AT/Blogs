// import authRoutes from "./router/auth.js";
import getBlogById from "../route/blog-search.js"
function routes(app) {
    app.get("/", (req, res) => {
        res.send("Hello from server");
    });
    // app.use('/auth', authRoutes);
    
    app.use("/blogs",getBlogById)
}

export default routes;