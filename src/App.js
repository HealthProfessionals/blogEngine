import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    blogs: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch('https://blogsengine.onrender.com/api/blogs') 
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => this.setState({ blogs: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBlogs() {
    const { blogs, isLoading, error } = this.state;

    if (error) {
      return <p>Error: {error.message}</p>;
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello from Render!</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <main>
          {this.renderBlogs()}
        </main>
      </div>
    );
  }
}

export default App;
