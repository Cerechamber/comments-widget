import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const initialState = {
  comments: [
    {
      author: 'Satan',
      text: 'Everlasting Darkness!',
      date: new Date().toLocaleString(),
      id: uniqueId(),
    },
  ],
};

const slice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment({ comments }, { payload }) {
      comments.push(payload);
      localStorage.setItem('resource', JSON.stringify(comments));
    },
    deleteComment({ comments }, { payload }) {
      comments.forEach((item, i) => {
        if (item.id === payload) {
          comments.splice(i, 1);
        }
      });
      localStorage.setItem('resource', JSON.stringify(comments));
    },
    setComments(state, { payload }) {
      state.comments = payload;
    },
  },
});
export const { actions } = slice;
export default slice.reducer;
