import Publications from "../components/Publications";
import Pagination from "../components/Pagination";
import { useState } from "react";
import Loader from "../components/Loader";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [load, setLoad] = useState(false);

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
        <div className="publicacionImg">
          <img src="https://picsum.photos/400/500" alt="publicacion"></img>
        </div>
        {posts && (
          <div className="publicacionText">
            <h1>title</h1>
            <p>content</p>
            <a href="/#">Leer más</a>
          </div>
        )}
      </div>
      <div className="sectionPubl">
        <h4>Otras Publicaciones _______</h4>
        <div className="otrasPublicaciones">
          <div className="publicaciones-row">
            <Publications posts={currentPosts} />
          </div>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Posts;
