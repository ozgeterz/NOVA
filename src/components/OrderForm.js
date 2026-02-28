import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { turkeyData } from '../data/turkeyData';
import './OrderForm.css';

function OrderForm({ productName, productOptions = [], useCards = false }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    province: '',
    district: '',
    address: '',
    product: productOptions.length > 0 ? (useCards ? productOptions[0].name : productOptions[0]) : productName,
    selectedProductIndex: 0
  });

  const [districts, setDistricts] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData({
      ...formData,
      province: selectedProvince,
      district: ''
    });
    setDistricts(turkeyData[selectedProvince] || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.phone || 
        !formData.province || !formData.district || !formData.address) {
      alert('Lütfen tüm alanları doldurunuz.');
      return;
    }

    if (formData.phone.length !== 10) {
      alert('Lütfen geçerli bir telefon numarası giriniz (10 hane).');
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmOrder = () => {

    const orderData = {
      ...formData,
      fullPhone: `+90${formData.phone}`
    };
    
    console.log('Sipariş Bilgileri:', orderData);

    // Google Forms integration
    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/FORM_ID_BURAYA/formResponse';
    
    const GOOGLE_FORM_ENTRIES = {
      firstName: 'entry.XXXXXXX1',
      lastName: 'entry.XXXXXXX2',
      phone: 'entry.XXXXXXX3',
      province: 'entry.XXXXXXX4',
      district: 'entry.XXXXXXX5',
      address: 'entry.XXXXXXX6',
      product: 'entry.XXXXXXX7'
    };

    const formBody = new URLSearchParams();
    formBody.append(GOOGLE_FORM_ENTRIES.firstName, formData.firstName);
    formBody.append(GOOGLE_FORM_ENTRIES.lastName, formData.lastName);
    formBody.append(GOOGLE_FORM_ENTRIES.phone, `+90${formData.phone}`);
    formBody.append(GOOGLE_FORM_ENTRIES.province, formData.province);
    formBody.append(GOOGLE_FORM_ENTRIES.district, formData.district);
    formBody.append(GOOGLE_FORM_ENTRIES.address, formData.address);
    formBody.append(GOOGLE_FORM_ENTRIES.product, formData.product);

    try {
      fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });
    } catch (error) {
      console.error('Form gönderim hatası:', error);
    }
    
    setShowConfirmModal(false);
    navigate('/tesekkurler', { state: { orderData } });
  };

  const provinces = Object.keys(turkeyData).sort();

  return (
    <div className="order-form-container">
      <h2 className="form-title">Sipariş Formu</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">İsim *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="İsminizi giriniz"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Soyisim *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Soyisminizi giriniz"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon *</label>
          <div className="phone-input-wrapper">
            <span className="phone-prefix">+90</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="5XX XXX XX XX"
              maxLength="10"
              required
            />
          </div>
          <small className="input-hint">10 haneli telefon numaranızı giriniz</small>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="province">İl *</label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleProvinceChange}
              required
            >
              <option value="">İl Seçiniz</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="district">İlçe *</label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              disabled={!formData.province}
              required
            >
              <option value="">İlçe Seçiniz</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Adres *</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Mahalle, sokak, bina no, daire no vb."
            rows="4"
            required
          />
        </div>

        {productOptions.length > 0 && !useCards && (
          <div className="form-group">
            <label htmlFor="product">Ürün Seçimi *</label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              {productOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        {productOptions.length > 0 && useCards && (
          <div className="form-group">
            <label>Ürün Seçimi *</label>
            <div className="product-cards">
              {productOptions.map((option, index) => (
                <div
                  key={index}
                  className={`product-card-option ${
                    formData.selectedProductIndex === index ? 'selected' : ''
                  }`}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      product: option.name,
                      selectedProductIndex: index
                    });
                  }}
                >
                  <div className="product-card-content">
                    <div className="product-card-info">
                      <h4>{option.name}</h4>
                      {option.description && (
                        <p className="product-card-description">{option.description}</p>
                      )}
                    </div>
                    <div className="product-card-price">
                      <span className="card-price">{option.price}</span>
                      {option.oldPrice && (
                        <span className="card-old-price">{option.oldPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="product-card-check">
                    {formData.selectedProductIndex === index && (
                      <span className="checkmark">✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button type="submit" className="submit-button">
          Siparişi Tamamla
        </button>
      </form>

      {showConfirmModal && (
        <div className="modal-overlay" onClick={() => setShowConfirmModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Siparişinizi Onaylayın</h2>
              <button className="modal-close" onClick={() => setShowConfirmModal(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>📦 Ürün Bilgisi</h3>
                <p className="modal-info"><strong>{formData.product}</strong></p>
              </div>

              <div className="modal-section">
                <h3>👤 Müşteri Bilgileri</h3>
                <p className="modal-info">{formData.firstName} {formData.lastName}</p>
                <p className="modal-info">+90 {formData.phone}</p>
              </div>

              <div className="modal-section">
                <h3>📍 Teslimat Adresi</h3>
                <p className="modal-info">{formData.province} / {formData.district}</p>
                <p className="modal-info">{formData.address}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-button modal-cancel" onClick={() => setShowConfirmModal(false)}>
                İptal
              </button>
              <button className="modal-button modal-confirm" onClick={handleConfirmOrder}>
                ✓ Siparişi Onayla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
