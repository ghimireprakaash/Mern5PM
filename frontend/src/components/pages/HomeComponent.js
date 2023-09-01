import React, { useEffect } from "react";
import HeaderComponents from "../layouts/HeaderComponents";
import FooterComponents from "../layouts/FooterComponents";
import { Link } from "react-router-dom";

export default function HomeComponent() {
  const [news, setNews] = React.useState([]);

  const getNews = async () => {
    try {
      const response = await fetch("http://localhost:8000/news");
      const data = await response.json();

      setNews(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="container">
      <HeaderComponents />
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images4.alphacoders.com/131/1319447.jpeg"
              className="d-block w-100"
              alt="Omen"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/247/884/7/valorant-sage-valorant-riot-games-hd-wallpaper-preview.jpg"
              className="d-block w-100"
              alt="Neon"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/3911025.jpg"
              className="d-block w-100"
              alt="Jett"
            />
          </div>
        </div>
      </div>
      <div className="card-layout mt-3">
        <div className="row">
          {news &&
            news.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 shadow-sm">
                  <img src={item.image} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link to={`/${item._id}`} className="btn btn-primary">
                      Visit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <FooterComponents />
    </div>
  );
}
