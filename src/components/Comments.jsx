/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';

const Comments = ({ resource, deleteComment }) => {
  const dispatch = useDispatch();

  return (
    <>
      {resource.map((item) => {
        return (
          <div className='comment' key={item.id}>
            <img
              src='https://cdn.onlinewebfonts.com/svg/img_527860.png'
              onClick={() => dispatch(deleteComment(item.id))}
            />
            <p className='nick'>{item.author}</p>
            <p>{item.text}</p>
            <p className='time'>{item.date}</p>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
