import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1 className="brand-name">NOVA</h1>
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
            <div className="product-image">
              <div className="image-placeholder">🛏️</div>
            </div>
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

          <div className="product-card">
            <div className="product-image">
              <div className="image-placeholder">🔧</div>
            </div>
            <div className="product-info">
              <h3>5'li Pense Seti</h3>
              <p className="product-description">
                Her türlü iş için ihtiyacınız olan profesyonel pense seti. 
                Evinizin vazgeçilmez aracı!
              </p>
              <ul className="product-features">
                <li>5 farklı pense tipi</li>
                <li>Ergonomik tutma sapları</li>
                <li>Paslanmaz çelik</li>
                <li>Taşıma çantası dahil</li>
              </ul>
              <Link to="/pense-seti" className="product-link">
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
