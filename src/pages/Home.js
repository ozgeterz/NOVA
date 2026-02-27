import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/nova logo.png';
import img1 from '../assets/ÇARŞAFLARI KİLİTLE.png';
import img2 from '../assets/MONTAJ YÖNTEMLERİ.png';
import img3 from '../assets/NOVA İLE ÇARŞAFLARI KİLİTLE.png';
import img4 from '../assets/ÖNCE.png';

const productImages = [img1, img2, img3, img4];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <img src={logo} alt="NOVA Logo" className="hero-logo" />
          <p className="tagline">Evinizin Yeni Nesil Çözüm Ortağı</p>
          <p className="subtitle">Kaliteli, dayanıklı ve pratik ürünlerle hayatınızı kolaylaştırıyoruz</p>
        </div>
      </header>

      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Yüksek Kalite</h3>
            <p>En kaliteli malzemelerden üretilmiş ürünler</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Uzun Ömürlü</h3>
            <p>Yıllarca kullanabileceğiniz dayanıklı tasarımlar</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Hızlı Teslimat</h3>
            <p>Siparişleriniz en kısa sürede kapınızda</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💯</div>
            <h3>Müşteri Memnuniyeti</h3>
            <p>%100 müşteri memnuniyeti garantisi</p>
          </div>
        </div>
      </section>

      <section className="products">
        <h2 className="section-title">Ürünlerimiz</h2>
        <div className="product-grid">
          <div className="product-card">
            <Link to="/carsaf-aparati" className="carousel-link">
              <div className="product-carousel">
                <button className="carousel-btn carousel-prev" onClick={(e) => { e.preventDefault(); prevSlide(); }}>‹</button>
                <div className="carousel-track">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                      <img src={img} alt={`Çarşaf Aparatı ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-btn carousel-next" onClick={(e) => { e.preventDefault(); nextSlide(); }}>›</button>
                <div className="carousel-dots">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); setCurrentSlide(index); }}
                    />
                  ))}
                </div>
              </div>
            </Link>
            <div className="product-info">
              <h3>Çarşaf Aparatı</h3>
              <p className="product-description">
                Çarşaflarınızı düzenli ve yerinde tutan pratik çözüm. 
                Artık çarşaflarınız kaybolmayacak!
              </p>
              <ul className="product-features">
                <li>Kolay kullanım</li>
                <li>Dayanıklı malzeme</li>
                <li>Tüm yatak tiplerine uyumlu</li>
                <li>Çarşafları sabit tutar</li>
              </ul>
              <Link to="/carsaf-aparati" className="product-link">
                Detaylı İncele →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-nova">
        <h2 className="section-title">Neden NOVA?</h2>
        <div className="why-content">
          <p>
            NOVA olarak, günlük hayatınızı kolaylaştıracak yenilikçi ve kaliteli ürünler sunuyoruz. 
            Her ürünümüz, müşterilerimizin ihtiyaçları düşünülerek özenle seçilmiş ve test edilmiştir.
          </p>
          <p>
            Kalite standartlarımızdan asla ödün vermez, müşteri memnuniyetini her şeyin üstünde tutarız. 
            NOVA ile eviniz daha düzenli, işleriniz daha kolay!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
