import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    blogs: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    console.log('Component did mount'); // Add this log

    fetch('http://hugolyons.pythonanywhere.com/blogs')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        console.log('Data received:', data); // Add this log
        this.setState({ blogs: data, isLoading: false });
      })
      .catch(error => {
        console.error('Error:', error); // Log the error
        this.setState({ error: 'Error: There was an error loading the data.', isLoading: false }); // Set the error message in state
      });
  }

  renderBlogs() {
    const { blogs, isLoading, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>; // Display the error message from state
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
            <p>{blog.summary}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    console.log('Render method'); // Add this log

    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to the Blog!</p>
        </header>
        <main>
          {this.renderBlogs()}
        </main>
      </div>
    );
  }
}

export default App;
