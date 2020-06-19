import React from 'react';
import faker from 'faker'
const CommentDetail = ()=>{
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="asdfasd" />
        </a>
        <div className="content">
          <a href="/" className="author">Matt</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            How artistic!
          </div>
          <div className="actions">
            <a href="/" className="reply">Reply</a>
          </div>
        </div>
      </div>
    )
}

export default CommentDetail