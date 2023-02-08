import Publications from "../components/Publications";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [load, setLoad] = useState(true);

  // Get Medias from DB

  const getAllMedias = () => {
    axios
      .get("media/all")
      .then((result) => {
        let reversedArray = result.data.reverse();
        setPosts(reversedArray);
        setLoad(false);
      })
      .catch((error) => {
        setPosts([]);
        console.log(error);
        alert("Error");
      });
  };

  useEffect(() => {
    getAllMedias();
  }, []);

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage + 1;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (load) return <Loader />;

  return (
    <div className="posts-landing">
      <div className="posts-heading">
        <h1>Publicaciones</h1>
      </div>
      <div className="publicacionContent">
        <div className="main-post">
          <div>
            <div className="main-post-description">
              <h1>{posts[0].name}</h1>
              {/* <p>{post.content}</p> */}
            </div>
            <video
              preload="auto"
              width={580}
              height={480}
              controls
              className="video"
            >
              <source src={`http://localhost:3001${posts[0].videos[0]}`} />
            </video>
          </div>
        </div>
        <div className="all-posts">
          <Publications posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Posts;
