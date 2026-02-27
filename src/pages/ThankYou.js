import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  const location = useLocation();
  const orderData = location.state?.orderData || {};

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="success-icon">
          <div className="checkmark-circle">
            <span className="checkmark">✓</span>
          </div>
        </div>

        <h1 className="thank-you-title">Teşekkürler!</h1>
        <p className="thank-you-subtitle">
          Siparişiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
        </p>

        <div className="delivery-info">
          <div className="delivery-icon">📦</div>
          <p className="delivery-text">
            Siparişiniz <strong>1 gün içinde kargoya verilecektir</strong>
          </p>
        </div>

        {orderData.firstName && (
          <div className="order-summary">
            <h2 className="summary-title">Sipariş Özeti</h2>
            
            <div className="summary-section">
              <h3>Müşteri Bilgileri</h3>
              <div className="summary-row">
                <span className="summary-label">Ad Soyad:</span>
                <span className="summary-value">{orderData.firstName} {orderData.lastName}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Telefon:</span>
                <span className="summary-value">+90 {orderData.phone}</span>
              </div>
            </div>

            <div className="summary-section">
              <h3>Teslimat Adresi</h3>
              <div className="summary-row">
                <span className="summary-label">İl / İlçe:</span>
                <span className="summary-value">{orderData.province} / {orderData.district}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Adres:</span>
                <span className="summary-value">{orderData.address}</span>
              </div>
            </div>

            <div className="summary-section">
              <h3>Ürün Bilgisi</h3>
              <div className="summary-row product-row">
                <span className="summary-label">Ürün:</span>
                <span className="summary-value product-name">{orderData.product}</span>
              </div>
            </div>
          </div>
        )}

        <div className="thank-you-actions">
          <Link to="/" className="home-button">
            Ana Sayfaya Dön
          </Link>
          <Link to="/carsaf-aparati" className="continue-button">
            Alışverişe Devam Et
          </Link>
        </div>

        <div className="contact-info">
          <p>Sorularınız için bize ulaşabilirsiniz:</p>
          <p className="contact-details">
            📧 info@nova.com.tr | 📞 0850 123 45 67
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
