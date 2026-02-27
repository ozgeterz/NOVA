import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

function PlierSet() {
  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <Link to="/">Ana Sayfa</Link> / <span>5'li Pense Seti</span>
      </nav>

      <div className="product-container">
        <div className="product-main">
          <div className="product-image-large">
            <div className="image-placeholder-large">🔧</div>
          </div>

          <div className="product-details">
            <h1>5'li Profesyonel Pense Seti</h1>
            <div className="product-rating">
              ⭐⭐⭐⭐⭐ <span className="review-count">(243 değerlendirme)</span>
            </div>
            
            <div className="price-section">
              <span className="price">₺299,90</span>
              <span className="old-price">₺449,90</span>
              <span className="discount-badge">%33 İndirim</span>
            </div>

            <p className="product-intro">
              Profesyonel kalitede 5'li pense seti ile her türlü tamir ve montaj işinizi 
              kolayca halledin. Evde, atölyede veya arabada vazgeçilmez yardımcınız!
            </p>

            <div className="features-section">
              <h3>Ürün Özellikleri</h3>
              <ul className="feature-list">
                <li>🔨 5 farklı pense tipi - Her iş için uygun araç</li>
                <li>💎 Paslanmaz çelik gövde - Ömür boyu dayanıklılık</li>
                <li>🤲 Ergonomik saplar - Rahat ve güvenli kullanım</li>
                <li>⚡ Profesyonel kalite - Ustalar tarafından onaylı</li>
                <li>🎯 Hassas kavrama - Mükemmel tutuş gücü</li>
                <li>🛡️ Korozyona dayanıklı - Paslanmaz yapı</li>
                <li>💼 Taşıma çantası - Düzenli saklama</li>
                <li>🔧 Çok amaçlı kullanım - Elektrik, tesisat, oto tamir</li>
              </ul>
            </div>

            <div className="technical-specs">
              <h3>Teknik Özellikler</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Malzeme:</td>
                    <td>Krom Vanadyum Çelik (Cr-V)</td>
                  </tr>
                  <tr>
                    <td>Sap Malzemesi:</td>
                    <td>TPR Kaplı Ergonomik Tutacak</td>
                  </tr>
                  <tr>
                    <td>Set İçeriği:</td>
                    <td>Kombine Pense, Kargaburun, Düz Pense, Pense Maşa, Diagonal Pense</td>
                  </tr>
                  <tr>
                    <td>Boyutlar:</td>
                    <td>6" - 8" arası çeşitli boyutlar</td>
                  </tr>
                  <tr>
                    <td>Garanti:</td>
                    <td>3 Yıl NOVA Garantisi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="buy-button">Sepete Ekle</button>
            <button className="wishlist-button">Favorilere Ekle ♥</button>
          </div>
        </div>

        <div className="product-description-section">
          <h2>Ürün Açıklaması</h2>
          <p>
            NOVA 5'li Profesyonel Pense Seti, ev ve iş yerlerinde kullanılmak üzere 
            tasarlanmış yüksek kaliteli bir el aleti setidir. Krom vanadyum çelikten 
            üretilen penseler, üstün dayanıklılık ve uzun ömür sunar.
          </p>
          <p>
            Set içerisinde 5 farklı pense tipi bulunur: Kombine pense, kargaburun pense, 
            düz pense, pense maşa ve diagonal pense. Her biri farklı işler için optimize 
            edilmiştir ve birlikte kullanıldığında neredeyse her türlü işi yapabilirsiniz.
          </p>
          <p>
            Ergonomik TPR kaplı saplar, uzun süreli kullanımlarda bile konfor sağlar ve 
            elin kaymasını önler. Profesyonel kullanıcılar ve hobi meraklıları için 
            ideal olan bu set, pratik taşıma çantası ile birlikte gelir.
          </p>

          <h3>Set İçeriği Detayları</h3>
          <ul>
            <li><strong>Kombine Pense (8"):</strong> Kesme, tutma ve bükme işleri için</li>
            <li><strong>Kargaburun Pense (8"):</strong> Dar alanlara erişim için uzun burunlu</li>
            <li><strong>Düz Pense (6"):</strong> Hassas tutma ve montaj işleri için</li>
            <li><strong>Pense Maşa (7"):</strong> Kablo sıyırma ve kesme için</li>
            <li><strong>Diagonal Pense (6"):</strong> Tel ve kablo kesme için</li>
          </ul>

          <h3>Kullanım Alanları</h3>
          <ul>
            <li>Elektrik tesisatı işleri</li>
            <li>Su tesisatı ve sıhhi tesisat</li>
            <li>Otomotiv tamiri</li>
            <li>Mobilya montajı</li>
            <li>Elektronik tamir</li>
            <li>Genel ev tamiri</li>
            <li>Hobi ve el işleri</li>
          </ul>

          <h3>Neden NOVA Pense Seti?</h3>
          <p>
            NOVA olarak, sadece kaliteli ürünler sunmakla kalmaz, aynı zamanda müşteri 
            memnuniyetini de ön planda tutarız. Pense setimiz, profesyonel standartlarda 
            üretilmiş ve sıkı kalite kontrolünden geçmiştir.
          </p>
          <p>
            3 yıl garantimiz, ürün kalitemize olan güvenimizin bir göstergesidir. 
            Paslanmaz çelik yapısı sayesinde yıllarca kullanabilir, korozyona karşı 
            endişe duymadan saklayabilirsiniz.
          </p>
        </div>

        <div className="customer-reviews">
          <h2>Müşteri Yorumları</h2>
          
          <div className="review">
            <div className="review-header">
              <strong>Ahmet B.</strong>
              <span className="review-rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Profesyonel bir elektrikçi olarak bu seti kullanıyorum. Kalitesi gerçekten 
              çok iyi, fiyatına göre mükemmel. Kesinlikle tavsiye ederim."
            </p>
          </div>

          <div className="review">
            <div className="review-header">
              <strong>Fatma S.</strong>
              <span className="review-rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Eşime aldım, çok memnun kaldı. Evdeki küçük tamiratlar için harika. 
              Taşıma çantası da çok pratik."
            </p>
          </div>

          <div className="review">
            <div className="review-header">
              <strong>Can T.</strong>
              <span className="review-rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Fiyat/performans olarak piyasadaki en iyi set. Sapları çok rahat, 
              uzun süre kullanınca bile el yorulmuyor. NOVA'ya teşekkürler!"
            </p>
          </div>
        </div>

        {/* Form kaldırıldı - ürün gizli */}
      </div>
    </div>
  );
}

export default PlierSet;
