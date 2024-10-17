import React, { useState, useRef } from 'react';
import { uniqueId } from 'lodash';
import { useDispatch } from 'react-redux';
import { actions } from '../reducers/commentSlice';

const Form = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const nameInput = useRef();
  const textInput = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (name && text) {
      dispatch(
        actions.addComment({
          author: name,
          text: text,
          date: new Date().toLocaleString(),
          id: uniqueId(),
        }),
      );
      setName('');
      setText('');
      nameInput.current.blur();
      textInput.current.blur();
    } else {
      alert('Введите текст в оба поля');
    }
  };

  return (
    <form
      action='/'
      method='POST'
      className='add_comment'
      onSubmit={handleSubmit}
    >
      <input
        className='nick_name'
        placeholder='Nickname:'
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        ref={nameInput}
      />
      <input
        className='add_text'
        placeholder='Write smth:'
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        ref={textInput}
      />
      <button type='submit'>Добавить</button>
    </form>
  );
};

export default Form;
