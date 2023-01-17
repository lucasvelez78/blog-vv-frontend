function Publications({ posts }) {
  return (
    <div className="publicaciones-row">
      {posts.map((post) => (
        <div className="otrasPublicacionesItem">
          <img src={post.img} alt="publicacion"></img>
          <div className="otrasPublicacionesTitle">
            <p>{post.title}</p>
          </div>
        </div>
      ))}{" "}
    </div>
  );
}

export default Publications;
