import PropTypes from 'prop-types';
import {
  BlockFlexOne,
  InfoFilm,
  BlockInfoFilm,
  TitleFilm,
} from '../MovieDetails/MovieDetails.Styled';
export const FilmInfo = ({
  infoMovie: { newGenres, title, overview, imageMovie, userScore },
}) => {
  return (
    <BlockFlexOne>
      <img src={imageMovie} alt={imageMovie} />
      <BlockInfoFilm>
        <TitleFilm>{title}</TitleFilm>
        <InfoFilm>User Score {userScore}%</InfoFilm>
        <h2>Overview</h2>
        <InfoFilm>{overview}</InfoFilm>
        <h2>Genres</h2>
        <InfoFilm>{newGenres}</InfoFilm>
      </BlockInfoFilm>
    </BlockFlexOne>
  );
};

FilmInfo.propTypes = {
  infoMovie: PropTypes.shape({
    newGenres: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    imageMovie: PropTypes.string,
    userScore: PropTypes.number,
  }).isRequired,
};
