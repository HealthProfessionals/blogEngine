renderBlogs() {
  const { blogs, isLoading, errors } = this.state;

  if (errors.length > 0) {
    // Display all errors
    return (
      <div>
        {errors.map((error, index) => (
          <p key={index}>Error {index + 1}: {error}</p>
        ))}
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div className="blog-grid">
      {blogs.map(blog => (
        <div key={blog.id} className="blog">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
