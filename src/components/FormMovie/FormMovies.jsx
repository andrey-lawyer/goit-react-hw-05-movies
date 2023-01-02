import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
  BlockForm,
} from './FormMovies.Styled';
export const FormMovies = () => {
  const [searchName, setSearchName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };
  console.log(searchParams);
  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      Notiflix.Notify.failure(`Enter data in the search field`);
      return;
    }
    setSearchParams({ query: searchName });
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
