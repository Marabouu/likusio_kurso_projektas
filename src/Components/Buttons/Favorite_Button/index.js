import './index.css';

function AddFavorite({ id }) {
  return (
    <button type="submit" className="AddFavorite">
      {this.state.AddFavorite.include(id) ? 'Remove Favorite' : 'Add Favorite'}
    </button>
  );
}

export default AddFavorite;
