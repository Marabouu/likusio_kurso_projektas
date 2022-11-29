import './index.css';

function AddFavorite({ id, favorites }) {
  return (
    <button type="button" className="AddFavorite">
      {favorites.includes(id) ? 'Remove Favorite' : 'Add Favorite'}
    </button>
  );
}

export default AddFavorite;
