import React from 'react';

import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeaderLogo from './images/header_logo.png';
import HeroLogo from './images/hero_logo.jpeg';
import VisaLogo from './images/visa.png';
import MastercardLogo from './images/mastercard.png';
import AmexLogo from './images/amex.png';
import DiscoverLogo from './images/discover.png';
import FavoriteButton from './Components/Buttons/Favorite_Button';

class App extends React.Component {
  state = {
    issues: [],
    movies: [],
    loading: false,
    error: false,
    favorites: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const result = await fetch(
        'https://academy-video-api.herokuapp.com/content/free-items'
      );

      if (result.status >= 400 && result.status <= 599) {
        this.setState({ error: true });
      } else {
        const json = await result.json();
        this.setState({ issues: json });
      }
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, error, issues, movies } = this.state;
    return (
      <div className="App">
        <Header imgSrc={HeaderLogo}></Header>

        <body className="Body-container">
          <div className="Hero-container">
            <p className="p1">Wanna more content ?</p>
            <button type="submit" className="Favorite-Button">
              Get Access
            </button>
          </div>
          <div className="free-movies-container">
            {movies.map(({ image, title, description, favorites, id }) => (
              <div className="free-movie-container">
                <div>
                  <img src={image} className="movies-logo"></img>
                </div>
                <div className="free-movies-container--dsc">
                  <h3>{title}</h3>
                  <p className="description">{description}</p>
                  <FavoriteButton id={id} favorites={favorites} />
                </div>
              </div>
            ))}

            {error && <p>Failed to Load content!</p>}
          </div>
          <Footer
            imgSrc1={VisaLogo}
            imgSrc2={MastercardLogo}
            imgSrc3={AmexLogo}
            imgSrc4={DiscoverLogo}
          ></Footer>
        </body>
      </div>
    );
  }
}

export default App;
