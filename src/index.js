import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
      <CommentDetail author="Abhi" />
      </ApprovalCard>
      <CommentDetail author="Sang" />
      <CommentDetail author="Vinni" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))