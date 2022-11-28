import './index.css';

function Header({ imgSrc, iconAlt }) {
  return (
    <header className="App-header">
      <img src={imgSrc} alt={iconAlt} className="Header-logo" />
      <button type="submit" className="signInButton">
        Sign In
      </button>
    </header>
  );
}

export default Header;
