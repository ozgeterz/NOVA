import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { turkeyData } from '../data/turkeyData';
import './ProductPage.css';
import img1 from '../assets/ÇARŞAFLARI KİLİTLE.png';
import img2 from '../assets/MONTAJ YÖNTEMLERİ.png';
import img3 from '../assets/NOVA İLE ÇARŞAFLARI KİLİTLE.png';
import img4 from '../assets/ÖNCE.png';
import arasLogo from '../assets/Aras logo.png';
import pttLogo from '../assets/Ptt logo.png';

const productOptions = [
  {
    name: "1 Set (4 Adet)",
    price: "550 TL",
    shipping: "+ 50 TL Kargo",
    total: "600 TL"
  },
  {
    name: "2 Set (8 Adet)",
    price: "999 TL",
    shipping: "+ Ücretsiz Kargo",
    total: "999 TL"
  },
  {
    name: "3 Set Alana 1 Set Bedava (16 Adet)",
    price: "1.450 TL",
    shipping: "+ Ücretsiz Kargo",
    total: "1.450 TL"
  }
];

function SheetHolder() {
  const navigate = useNavigate();
  const orderFormRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    province: '',
    district: '',
    address: '',
    product: productOptions[0].name,
    selectedProductIndex: 0,
    paymentMethod: 'Kapıda Nakit',
    shippingMethod: 'ARAS Kargo'
  });

  const [districts, setDistricts] = useState([]);
  const provinces = Object.keys(turkeyData).sort();

  const scrollToForm = () => {
    orderFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData({
      ...formData,
      province: selectedProvince,
      district: ''
    });
    setDistricts(turkeyData[selectedProvince] || []);
  };

  const formatPhoneNumber = (value) => {
    if (!value) return '';
    if (value.length <= 3) return value;
    if (value.length <= 6) return `${value.slice(0, 3)} ${value.slice(3)}`;
    if (value.length <= 8) return `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6)}`;
    return `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 8)} ${value.slice(8, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length === 0) {
        setFormData({ ...formData, [name]: '' });
      } else if (numericValue[0] === '0') {
        return;
      } else if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone ||
        !formData.province || !formData.district || !formData.address ||
        !formData.paymentMethod || !formData.shippingMethod) {
      alert('Lütfen tüm alanları doldurunuz.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      alert('Lütfen geçerli bir telefon numarası giriniz (10 hane).');
      return;
    }

    const orderData = {
      ...formData,
      fullPhone: `+90${cleanPhone}`,
      phone: cleanPhone
    };

    console.log('Sipariş Bilgileri:', orderData);

    // Google Forms integration
    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScBbwfyDTUcVHUE9DZPJeyslamMmvtVEg7jWaZyh11m0By3CA/formResponse';

    const GOOGLE_FORM_ENTRIES = {
      firstName: 'entry.960817657',
      lastName: 'entry.199541484',
      phone: 'entry.523317318',
      province: 'entry.508766256',
      district: 'entry.1872832002',
      address: 'entry.814644423',
      product: 'entry.1235756737',
      price: 'entry.1844066752',
      paymentMethod: 'entry.1835322476',
      shippingMethod: 'entry.806943079'
    };

    const formBody = new URLSearchParams();
    formBody.append(GOOGLE_FORM_ENTRIES.firstName, formData.firstName);
    formBody.append(GOOGLE_FORM_ENTRIES.lastName, formData.lastName);
    formBody.append(GOOGLE_FORM_ENTRIES.phone, `+90${formData.phone}`);
    formBody.append(GOOGLE_FORM_ENTRIES.province, formData.province);
    formBody.append(GOOGLE_FORM_ENTRIES.district, formData.district);
    formBody.append(GOOGLE_FORM_ENTRIES.address, formData.address);
    formBody.append(GOOGLE_FORM_ENTRIES.product, formData.product);
    formBody.append(GOOGLE_FORM_ENTRIES.price, productOptions[formData.selectedProductIndex].price);
    formBody.append(GOOGLE_FORM_ENTRIES.paymentMethod, formData.paymentMethod);
    formBody.append(GOOGLE_FORM_ENTRIES.shippingMethod, formData.shippingMethod);

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

    navigate('/tesekkurler', { state: { orderData } });
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-gallery-section">
          <div className="gallery-item" onClick={scrollToForm}>
            <img src={img1} alt="Çarşafları Kilitle" className="gallery-image" />
          </div>

          <div className="gallery-cta">
            <button className="cta-button cta-primary" onClick={scrollToForm}>
              🚚 Kapıda Ödeme
            </button>
            <button className="cta-button cta-secondary" onClick={scrollToForm}>
              📦 Şimdi Sipariş Ver
            </button>
          </div>

          <div className="gallery-item" onClick={scrollToForm}>
            <img src={img2} alt="Montaj Yöntemleri" className="gallery-image" />
          </div>

          <div className="gallery-cta">
            <button className="cta-button cta-accent" onClick={scrollToForm}>
              ⭐ Hemen Sipariş Oluştur
            </button>
          </div>

          <div className="gallery-item" onClick={scrollToForm}>
            <img src={img3} alt="NOVA ile Çarşafları Kilitle" className="gallery-image" />
          </div>

          <div className="gallery-cta">
            <button className="cta-button cta-primary" onClick={scrollToForm}>
              💳 Kapıda Ödeme İmkanı
            </button>
            <button className="cta-button cta-secondary" onClick={scrollToForm}>
              🏠 Adresinize Teslim
            </button>
          </div>

          <div className="gallery-item" onClick={scrollToForm}>
            <img src={img4} alt="Önce Sonra" className="gallery-image" />
          </div>
        </div>

        <div className="product-details-section">
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

            <button className="buy-button" onClick={scrollToForm}>🛒 Sipariş Ver</button>
            <button className="wishlist-button" onClick={scrollToForm}>🚚 Kapıda Ödeme ile Al</button>
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

        {/* Sipariş Formu */}
        <div ref={orderFormRef} className="order-form-container">
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
                  value={formatPhoneNumber(formData.phone)}
                  onChange={handleChange}
                  placeholder="5XX XXX XX XX"
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

            <div className="form-group">
              <label>Ürün Seçimi *</label>
              <div className="product-selection-cards">
                {productOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`product-selection-card ${formData.selectedProductIndex === index ? 'active' : ''}`}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        product: option.name,
                        selectedProductIndex: index
                      });
                    }}
                  >
                    {formData.selectedProductIndex === index && (
                      <div className="selected-badge">✓ Seçildi</div>
                    )}
                    <div className="product-card-header">
                      <h3 className="product-card-title">{option.name}</h3>
                    </div>
                    <div className="product-card-pricing">
                      <div className="price-main">{option.price}</div>
                      <div className="price-shipping">{option.shipping}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Ödeme Yöntemi *</label>
              <div className="radio-cards">
                <div
                  className={`radio-card ${formData.paymentMethod === 'Kapıda Nakit' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'Kapıda Nakit' })}
                >
                  <div className="radio-card-icon">💵</div>
                  <div className="radio-card-label">Kapıda Nakit</div>
                  {formData.paymentMethod === 'Kapıda Nakit' && <span className="radio-check">✓</span>}
                </div>
                <div
                  className={`radio-card ${formData.paymentMethod === 'Kapıda Kart' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'Kapıda Kart' })}
                >
                  <div className="radio-card-icon">💳</div>
                  <div className="radio-card-label">Kapıda Kart</div>
                  {formData.paymentMethod === 'Kapıda Kart' && <span className="radio-check">✓</span>}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Kargo Seçimi *</label>
              <div className="radio-cards">
                <div
                  className={`radio-card ${formData.shippingMethod === 'ARAS Kargo' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, shippingMethod: 'ARAS Kargo' })}
                >
                  <img src={arasLogo} alt="ARAS Kargo" className="cargo-logo" />
                  <div className="radio-card-label">ARAS Kargo</div>
                  {formData.shippingMethod === 'ARAS Kargo' && <span className="radio-check">✓</span>}
                </div>
                <div
                  className={`radio-card ${formData.shippingMethod === 'PTT Kargo' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, shippingMethod: 'PTT Kargo' })}
                >
                  <img src={pttLogo} alt="PTT Kargo" className="cargo-logo" />
                  <div className="radio-card-label">PTT Kargo</div>
                  {formData.shippingMethod === 'PTT Kargo' && <span className="radio-check">✓</span>}
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Siparişi Tamamla
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SheetHolder;
