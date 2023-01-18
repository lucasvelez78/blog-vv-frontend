import Publications from "../components/Publications";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
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
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (load) return <Loader />;

  return (
    <div className="publicacionesLanding">
      <div className="publicacionesHeading">
        <h1>Publicaciones</h1>
      </div>
      <div className="publicacionContent">
        <Publications posts={currentPosts} />
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Posts;
