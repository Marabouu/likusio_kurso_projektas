import './index.css';

function Footer({ imgSrc1, imgSrc2, imgSrc3, imgSrc4, iconAlt }) {
  return (
    <footer className="App-footer">
      <p>We care about your entertainment. Copyright © 2019-2021 felix.com</p>
      <div>
        <img src={imgSrc1} alt={iconAlt} className="icon" />
        <img src={imgSrc2} alt={iconAlt} className="icon" />
        <img src={imgSrc3} alt={iconAlt} className="icon" />
        <img src={imgSrc4} alt={iconAlt} className="icon" />
      </div>
    </footer>
  );
}

export default Footer;
