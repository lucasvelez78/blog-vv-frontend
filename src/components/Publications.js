function Publications({ posts }) {
  return (
    <div className="publicaciones-row">
      {posts &&
        posts.map((post) => {
          return (
            <div className="post">
              <video preload="auto" width={120} height={100} controls>
                <source
                  src={`${process.env.REACT_APP_SERVER_URL}${post.videos[0]}`}
                />
              </video>
              <div className="post-description">
                <h6>{post.name}</h6>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Publications;
