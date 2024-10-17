import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Comments from './Comments.jsx';
import { actions } from '../reducers/commentSlice';
import Form from './Form.jsx';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const itemsStorage = localStorage.getItem('resource');
    if (itemsStorage) dispatch(actions.setComments(JSON.parse(itemsStorage)));
  }, []);

  const { comments } = useSelector((state) => state.commentReducer);

  return (
    <div>
      <Comments resource={comments} deleteComment={actions.deleteComment} />
      <Form />
    </div>
  );
};

export default App;
