import Notiflix from 'notiflix';
import React, { useState } from 'react';
export const FormMovies = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      Notiflix.Notify.failure(`Enter data in the search field`);
      return;
    }

    onSubmit(searchName);
    setSearchName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchName}
        onChange={handleNameChange}
      />
    </form>
  );
};
