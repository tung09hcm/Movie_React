import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import PropTypes from "prop-types";
function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick() {
        // e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
            <p>Rating {movie.vote_average}</p>
        </div>
    </div>
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired, // ID của phim (bắt buộc)
        title: PropTypes.string.isRequired, // Tên phim (bắt buộc)
        poster_path: PropTypes.string, // Đường dẫn ảnh poster (không bắt buộc)
        release_date: PropTypes.string, // Ngày phát hành (không bắt buộc)
        vote_average: PropTypes.number, // Điểm đánh giá (không bắt buộc)
    }).isRequired,
};
export default MovieCard