import Notiflix from 'notiflix';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
  BlockForm,
} from './FormMovies.Styled';
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
    <BlockForm>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchName}
          onChange={handleNameChange}
        />
      </SearchForm>
    </BlockForm>
  );
};

FormMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
