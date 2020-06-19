import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui comments">
      <CommentDetail author="Abhi" />
      <CommentDetail author="Sang" />
      <CommentDetail author="Vinni" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))