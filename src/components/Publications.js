function Publications({ posts }) {
  return (
    <div className="publicaciones-row">
      {posts &&
        posts.map((post) => {
          return (
            <div className="post-container">
              <div className="post">
                <h3>{post.name}</h3>
                <p>{post.content}</p>
                <video preload="auto" width={320} height={240} controls>
                  <source src={`http://localhost:3001${post.videos[0]}`} />
                </video>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Publications;
