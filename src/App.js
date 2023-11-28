import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    blogs: [],
    isLoading: true,
    errors: [], // Maintain a list of errors
  };

  componentDidMount() {
    console.log('Component did mount');

    fetch('http://hugolyons.pythonanywhere.com/blogs')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          // Get the error message from the response
          return response.text().then(errorMessage => {
            throw new Error(`Network response was not ok. Error message: ${errorMessage}`);
          });
        }
      })
      .then(data => {
        console.log('Data received:', data);
        this.setState({ blogs: data, isLoading: false });
      })
      .catch(error => {
        console.error('Error:', error);
        this.setState(prevState => ({
          errors: [...prevState.errors, error.message], // Add the error to the list of errors
          isLoading: false,
        }));
      });
  }

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
            <p>{blog.summary}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    console.log('Render method');

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
