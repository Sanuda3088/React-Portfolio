import { BookOpenIcon } from '@heroicons/react/20/solid';
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">
        My <span className="highlight">BLOG</span>
      </h1>
      <div className="blog-grid">
        <div className="blog-item">
          <div className="image-wrapper">
            <img src="/images/b1.jpg" className="blog-image" alt="blog1" />
          </div>
          <div className="blog-content">
            <div className="blog-date">December 10, 2023</div>
            <div className="icon-wrapper">
              <BookOpenIcon className="blog-icon" />
              <p className="read-text">Read</p>
            </div>
          </div>
        </div>
        <div className="blog-item"></div>
        <div className="blog-item"></div>
      </div>
    </div>
  );
}

export default Blog;
