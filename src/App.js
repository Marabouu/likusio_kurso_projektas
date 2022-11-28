import React from 'react';

import './index.css';
import Header from './Components/Header';
import HeaderLogo from './images/header_logo.png';
import HeroLogo from './images/hero_logo.jpeg';

class App extends React.Component {
  state = {
    issues: [],
    loading: false,
    error: false,
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
    const { loading, error, issues } = this.state;
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
            {issues.map(({ image, title, description }) => (
              <div className="free-movie-container">
                <img src={image} className="movies-logo"></img>
                <div className="free-movies-container--dsc">
                  <h2>{title}</h2>
                  <p className="description">{description}</p>
                  <button type="submit" className="Favorite-Button">
                    Favorite
                  </button>
                </div>
              </div>
            ))}

            {error && <p>Failed to Load content!</p>}
          </div>
        </body>
      </div>
    );
  }
}

export default App;
