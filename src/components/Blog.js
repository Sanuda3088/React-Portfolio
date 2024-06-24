import { BookOpenIcon } from '@heroicons/react/20/solid';
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container" id='blog'>
      <h1 className="blog-heading">
        My <span className="highlight">BLOG</span>
      </h1>
      <div className="blog-grid">
        <div className="blog-item">
          <div className="image-wrapper">
            <img src="/images/blog1.jpg" className="blog-image" alt="blog1" />
          </div>
          <div className="blog-content">
            <a  rel="noopener noreferrer" href='https://medium.com/@sanudasenod446/dive-into-flutter-building-beautiful-apps-without-breaking-a-sweat-6d5a3e30bb31' target='_blank'>
            <div className="blog-date">December 10, 2023</div>
            <div className="icon-wrapper">
              <BookOpenIcon className="blog-icon" />
              <p className="read-text">Read</p>
            </div>
            </a>
          </div>
        </div>

        <div className="blog-item">
          <div className="image-wrapper">
            <img src="/images/blog2.jpg" className="blog-image" alt="blog1" />
          </div>
          <div className="blog-content">
            <a rel="noopener noreferrer" href='https://medium.com/@sanudasenod446/chatgpt-4-0-the-revolutionary-future-of-conversational-ai-a5a04c253d94' target='_blank'>
            <div className="blog-date">March 11, 2023</div>
            <div className="icon-wrapper">
              <BookOpenIcon className="blog-icon" />
              <p className="read-text">Read</p>
            </div>
            </a>
          </div>
        </div>


        <div className="blog-item">
          <div className="image-wrapper">
            <img src="/images/blog3.jpg" className="blog-image" alt="blog1" />
          </div>
          <div className="blog-content">
            <a rel="noopener noreferrer" href='https://medium.com/@sanudasenod446/computational-power-evaluation-throughout-history-a-journey-through-time-5463960d8707' target='_blank'>
            <div className="blog-date">February 27, 2023</div>
            <div className="icon-wrapper">
              <BookOpenIcon className="blog-icon" />
              <p className="read-text">Read</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
