import React from 'react';
import { Link } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import './ProductPage.css';

function SheetHolder() {
  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <Link to="/">Ana Sayfa</Link> / <span>Çarşaf Aparatı</span>
      </nav>

      <div className="product-container">
        <div className="product-main">
          <div className="product-image-large">
            <div className="image-placeholder-large">🛏️</div>
          </div>

          <div className="product-details">
            <h1>Çarşaf Aparatı</h1>
            <div className="product-rating">
              ⭐⭐⭐⭐⭐ <span className="review-count">(127 değerlendirme)</span>
            </div>
            
            <div className="price-section">
              <span className="price">₺149,90</span>
              <span className="old-price">₺199,90</span>
              <span className="discount-badge">%25 İndirim</span>
            </div>

            <p className="product-intro">
              Çarşaflarınızın kaymasına ve dağılmasına son veren yenilikçi çözüm! 
              NOVA Çarşaf Aparatı ile her sabah düzenli bir yatakla uyanın.
            </p>

            <div className="features-section">
              <h3>Ürün Özellikleri</h3>
              <ul className="feature-list">
                <li>🔧 Kolay montaj - Sadece 30 saniyede takılır</li>
                <li>💪 Dayanıklı yapı - Yıllarca kullanım garantisi</li>
                <li>📏 Evrensel uyum - Tüm yatak boyutlarına uyumlu</li>
                <li>🧵 Kumaş dostu - Çarşafınıza zarar vermez</li>
                <li>🔄 Ayarlanabilir - İstediğiniz gerginlikte kullanın</li>
                <li>🌙 Sessiz kullanım - Gece boyunca rahatsız etmez</li>
                <li>🧼 Kolay temizlik - Yıkanabilir malzeme</li>
                <li>📦 4'lü set - Tüm köşeler için yeterli</li>
              </ul>
            </div>

            <div className="technical-specs">
              <h3>Teknik Özellikler</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Malzeme:</td>
                    <td>Premium ABS Plastik + Paslanmaz Çelik</td>
                  </tr>
                  <tr>
                    <td>Renk:</td>
                    <td>Beyaz</td>
                  </tr>
                  <tr>
                    <td>Paket İçeriği:</td>
                    <td>4 Adet Çarşaf Aparatı</td>
                  </tr>
                  <tr>
                    <td>Uyumlu Yatak Boyutları:</td>
                    <td>Tek, Çift, King, Super King</td>
                  </tr>
                  <tr>
                    <td>Garanti:</td>
                    <td>2 Yıl NOVA Garantisi</td>
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
            NOVA Çarşaf Aparatı, modern yaşamın pratik çözümlerinden biri olarak karşınızda. 
            Gece boyunca çarşaflarınızın kayması ve dağılması artık sorun olmayacak. 
            Özellikle hareketli uyuyanlar için ideal olan bu ürün, sabahları düzenli bir 
            yatakla uyanmanızı sağlar.
          </p>
          <p>
            Yüksek kaliteli malzemelerden üretilen çarşaf aparatımız, uzun ömürlü kullanım 
            için tasarlanmıştır. Kumaşa zarar vermeden güvenli bir şekilde tutunur ve 
            istediğiniz gerginlikte ayarlanabilir. Montajı son derece kolaydır ve herhangi 
            bir alet gerektirmez.
          </p>
          <p>
            4'lü set olarak gelen ürün, yatağınızın dört köşesine takılarak çarşafınızı 
            sabit tutar. Beyaz rengi sayesinde her türlü yatak takımıyla uyumludur ve 
            görünmez bir şekilde işlevini yerine getirir.
          </p>

          <h3>Kullanım Alanları</h3>
          <ul>
            <li>Ev yatakları için</li>
            <li>Çocuk odaları için</li>
            <li>Misafir odaları için</li>
            <li>Otel ve pansiyonlar için</li>
            <li>Yurt odaları için</li>
          </ul>

          <h3>Neden NOVA Çarşaf Aparatı?</h3>
          <p>
            Piyasadaki birçok alternatifin aksine, NOVA Çarşaf Aparatı premium malzemelerden 
            üretilmiştir. Ucuz plastik yerine dayanıklı ABS plastik kullanımı, ürünün 
            ömrünü önemli ölçüde artırır. Paslanmaz çelik klipsler, yıllarca kopmadan 
            kullanım sağlar.
          </p>
          <p>
            Müşteri memnuniyeti odaklı yaklaşımımız sayesinde, 2 yıl garanti sunuyoruz. 
            Ürünümüzden memnun kalmayan müşterilerimiz, 30 gün içinde iade edebilir.
          </p>
        </div>

        <div className="customer-reviews">
          <h2>Müşteri Yorumları</h2>
          
          <div className="review">
            <div className="review-header">
              <strong>Ayşe K.</strong>
              <span className="review-rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Harika bir ürün! Çocuklarımın yatağında sürekli çarşaf kayması sorunu vardı. 
              Bu ürünle birlikte sorun tamamen çözüldü. Kesinlikle tavsiye ederim."
            </p>
          </div>

          <div className="review">
            <div className="review-header">
              <strong>Mehmet Y.</strong>
              <span className="review-rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Kaliteli malzeme, kolay kullanım. Fiyat/performans açısından mükemmel. 
              Tüm yataklarımız için aldım."
            </p>
          </div>

          <div className="review">
            <div className="review-header">
              <strong>Zeynep D.</strong>
              <span className="review-rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>
              "Montajı çok kolay, çarşafa hiç zarar vermiyor. Artık sabahları yatağımı 
              toplamak çok daha kolay. Teşekkürler NOVA!"
            </p>
          </div>
        </div>

        <OrderForm 
          productName="Çarşaf Aparatı"
          useCards={true}
          productOptions={[
            {
              name: "4'lü Çarşaf Aparatı",
              description: "Standart yataklar için ideal",
              price: "₺149,90",
              oldPrice: "₺199,90"
            },
            {
              name: "6'lı Çarşaf Aparatı",
              description: "Büyük yataklar için önerilir",
              price: "₺199,90",
              oldPrice: "₺279,90"
            },
            {
              name: "8'li Çarşaf Aparatı",
              description: "King size yataklar için en uygun",
              price: "₺249,90",
              oldPrice: "₺349,90"
            }
          ]}
        />
      </div>
    </div>
  );
}

export default SheetHolder;
