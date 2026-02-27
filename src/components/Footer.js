import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [showKVKK, setShowKVKK] = useState(false);
  const [showAydinlatma, setShowAydinlatma] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-legal">
        <p className="copyright">© 2024 NOVA. Tüm hakları saklıdır.</p>
        <div className="legal-links">
          <button onClick={() => setShowKVKK(!showKVKK)} className="legal-link">
            KVKK Politikası
          </button>
          <span className="separator">|</span>
          <button onClick={() => setShowAydinlatma(!showAydinlatma)} className="legal-link">
            Aydınlatma Metni
          </button>
        </div>
      </div>

      {showKVKK && (
        <div className="modal-overlay" onClick={() => setShowKVKK(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowKVKK(false)}>×</button>
            <h2>Kişisel Verilerin Korunması Politikası (KVKK)</h2>
            
            <h3>1. Giriş</h3>
            <p>
              NOVA olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, 
              kişisel verilerinizin güvenliğine önem veriyor ve bu verileri korumak için gerekli 
              tüm teknik ve idari tedbirleri alıyoruz.
            </p>

            <h3>2. Veri Sorumlusu</h3>
            <p>
              KVKK uyarınca, kişisel verilerinizin işlenmesinde veri sorumlusu NOVA'dır. 
              Kişisel verileriniz, NOVA tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>

            <h3>3. İşlenen Kişisel Veriler</h3>
            <p>NOVA tarafından işlenen kişisel veriler şunlardır:</p>
            <ul>
              <li>Kimlik Bilgileri (Ad, soyad, T.C. kimlik numarası)</li>
              <li>İletişim Bilgileri (Telefon, e-posta, adres)</li>
              <li>Müşteri İşlem Bilgileri (Sipariş geçmişi, ödeme bilgileri)</li>
              <li>İşlem Güvenliği Bilgileri (IP adresi, çerez kayıtları)</li>
            </ul>

            <h3>4. Kişisel Verilerin İşlenme Amaçları</h3>
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul>
              <li>Sipariş ve teslimat süreçlerinin yürütülmesi</li>
              <li>Müşteri hizmetlerinin sağlanması</li>
              <li>Ürün ve hizmetlerin geliştirilmesi</li>
              <li>Pazarlama faaliyetlerinin yürütülmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>

            <h3>5. Kişisel Verilerin Aktarılması</h3>
            <p>
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, 
              kargo şirketleri, ödeme kuruluşları ve yasal merciler ile paylaşılabilir.
            </p>

            <h3>6. Kişisel Veri Sahibinin Hakları</h3>
            <p>KVKK'nın 11. maddesi uyarınca, kişisel veri sahipleri:</p>
            <ul>
              <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Kişisel verilerin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
            </ul>

            <h3>7. İletişim</h3>
            <p>
              Kişisel verileriniz ile ilgili taleplerinizi info@nova.com.tr adresine 
              iletebilirsiniz.
            </p>
          </div>
        </div>
      )}

      {showAydinlatma && (
        <div className="modal-overlay" onClick={() => setShowAydinlatma(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAydinlatma(false)}>×</button>
            <h2>Aydınlatma Metni</h2>
            
            <h3>1. Veri Sorumlusu</h3>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; 
              veri sorumlusu olarak NOVA tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>

            <h3>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h3>
            <p>
              Toplanan kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri 
              işleme şartları ve amaçları kapsamında, işbu Aydınlatma Metni'nde belirtilen amaçlarla 
              işlenebilecek ve aktarılabilecektir:
            </p>
            <ul>
              <li>Üyelik işlemlerinin gerçekleştirilmesi</li>
              <li>Sipariş süreçlerinin yönetilmesi</li>
              <li>Ürün teslimatının sağlanması</li>
              <li>Müşteri memnuniyetinin artırılması</li>
              <li>Kampanya ve promosyon bilgilendirmelerinin yapılması</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
              <li>Güvenlik ve denetim faaliyetlerinin yürütülmesi</li>
            </ul>

            <h3>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
            <p>
              Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi ile sınırlı olarak:
            </p>
            <ul>
              <li>Kargo ve lojistik şirketlerine (teslimat için)</li>
              <li>Ödeme kuruluşlarına (ödeme işlemleri için)</li>
              <li>Hukuk danışmanlarına (hukuki süreçler için)</li>
              <li>Yetkili kamu kurum ve kuruluşlarına (yasal zorunluluklar için)</li>
              <li>İş ortaklarımıza (hizmet kalitesinin artırılması için)</li>
            </ul>
            <p>aktarılabilecektir.</p>

            <h3>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
            <p>
              Kişisel verileriniz, NOVA tarafından sunulan hizmetlerden faydalanabilmeniz amacıyla, 
              çeşitli kanallar (web sitesi, mobil uygulama, çağrı merkezi, e-posta, sosyal medya vb.) 
              aracılığıyla sözlü, yazılı veya elektronik ortamda toplanabilmektedir.
            </p>
            <p>
              Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen; bir sözleşmenin 
              kurulması veya ifasıyla doğrudan doğruya ilgili olması, veri sorumlusunun hukuki 
              yükümlülüğünü yerine getirebilmesi için zorunlu olması, bir hakkın tesisi, kullanılması 
              veya korunması için veri işlemenin zorunlu olması ve ilgili kişinin temel hak ve 
              özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri 
              işlenmesinin zorunlu olması hukuki sebeplerine dayanılarak işlenmektedir.
            </p>

            <h3>5. Kişisel Veri Sahibinin KVKK'nın 11. Maddesinde Sayılan Hakları</h3>
            <p>
              Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi, 
              info@nova.com.tr adresine iletebilirsiniz. Talepleriniz en kısa sürede ve 
              en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır.
            </p>

            <h3>6. Kişisel Verilerin Saklanma Süresi</h3>
            <p>
              Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve 
              ilgili mevzuatta öngörülen süreler boyunca saklanacaktır. Saklama süresinin 
              sona ermesi durumunda kişisel verileriniz silinecek, yok edilecek veya 
              anonim hale getirilecektir.
            </p>

            <h3>7. İletişim Bilgileri</h3>
            <p>
              NOVA<br/>
              E-posta: info@nova.com.tr<br/>
              Telefon: 0850 123 45 67<br/>
              Adres: İstanbul, Türkiye
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
