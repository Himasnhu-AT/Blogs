import { useEffect, useState } from "react";
import axios from "axios";

function Draft(props) {
  const [activeTab, setActiveTab] = useState("Draft");
  const [blogs, setBlogs] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog/search");
        setBlogs(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-custom-black text-gray-100 p-4 sm:p-8">
      <div className="max-w-full sm:max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-8">
          <div className="flex justify-between  sm:w-[823px]">
            <div>
            <span
              className={`cursor-pointer text-gray-500 text-[16px] sm:text-[20px] font-mono mr-6 sm:mr-20 pb-2 border-b-2 ${
                activeTab === "Draft" ? "border-pink-500 text-white" : "border-transparent text-gray-700"
              }`}
              onClick={() => handleTabClick("Draft")}
            >
              Draft
            </span>
            <span
              className={`cursor-pointer text-gray-500 text-[16px] sm:text-[20px] font-mono mr-4 pb-2 border-b-2 ${
                activeTab === "Published" ? "border-pink-500 text-white" : "border-transparent text-gray-700"
              }`}
              onClick={() => handleTabClick("Published")}
            >
              Published
            </span>
            </div>
                <a href="/createPost"><button className="text-center  bg-blue-500 cursor-pointer px-2 py-1  sm:text-2xl hover:bg-blue-600 w-[87px] sm:h-[37px] text-white sm:ml-[80px] rounded-3xl font-mono">Post</button></a>

          </div>
        </div>

        {/* Dynamic blog rendering */}
        {activeTab === "Draft" ? (
          <div>
            {blogs
              .filter((blog) => blog.review !== "approved") 
              .map((blog) => (
                <div
                  key={blog._id}
                  className="mb-6 bg-card-black h-auto sm:h-[180px] w-full sm:w-[853px] rounded-lg overflow-hidden shadow-lg relative "
                >
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div className="sm:w-2/3 pt-6 pl-6">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold mb-2 text-white">
                        {blog.title}
                      </h2>
                      <p className="text-white mb-4 w-full sm:w-[460px] h-auto font-mono">
                        {blog.content.substring(0, 100)}...
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm font-mono">last edited {new Date(blog.date).toLocaleDateString()}</span>
                        <a href="/UpdatePost"><button className="bg-blue-500 cursor-pointer hover:bg-blue-600 w-[70px] sm:w-[87px] h-[27px] text-white ml-4 sm:ml-[80px] rounded-3xl font-mono">
                          View
                        </button>
                        </a>
                      </div>
                    </div>
                    <div className="w-full p-3 sm:w-[270px] h-[160px] sm:h-[180px] mt-4 sm:mt-0 flex-shrink-0 relative">
                      <div className="hidden sm:block absolute inset-0 bg-gradient-to-l from-black via-transparent to-[#151825] rounded-r-lg z-10"></div>
                      <img
                        src={blog.image}
                        alt="Draft Image"
                        className="w-full h-full object-fill rounded-r-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div>
            {blogs
              .filter((blog) => blog.review === "approved")
              .map((blog) => (
                <div
                  key={blog._id}
                  className="mb-6 bg-card-black h-auto sm:h-[180px] w-full sm:w-[853px] rounded-lg overflow-hidden shadow-lg relative "
                >
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div className="sm:w-2/3 pt-6 pl-6">
                      <h2 className="text-xl sm:text-2xl font-mono font-bold mb-2 text-white">
                        {blog.title}
                      </h2>
                      <p className="text-white mb-4 w-full sm:w-[460px] h-auto font-mono">
                        {blog.content.substring(0, 100)}...
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm font-mono">published {new Date(blog.date).toLocaleDateString()}</span>
                       <a href="/UpdatePost"> <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 w-[70px] sm:w-[87px] h-[27px] text-white ml-4 sm:ml-[80px] rounded-3xl font-mono">
                          View
                        </button>
                        </a>
                      </div>
                    </div>
                    <div className="w-full p-3 sm:w-[270px] h-[160px] sm:h-[180px] mt-4 sm:mt-0 flex-shrink-0 relative">
                      <div className="hidden sm:block absolute inset-0 bg-gradient-to-l from-black via-transparent to-[#151825] rounded-r-lg z-10"></div>
                      <img
                        src={blog.image}
                        alt="Published Image"
                        className="w-full h-full object-fill rounded-r-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Draft;
