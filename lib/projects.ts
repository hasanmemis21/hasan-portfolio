export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  href?: string;
  highlights?: string[];   // kart altında gösterilecek kısa madde
  metrics?: { label: string; value: string }[];
  body?: string;           // detay sayfasında uzun açıklama (md destekli düz metin)
};

export const projects: Project[] = [
  {
    slug: "oct-retina",
    title: "OCT Retina Hastalık Sınıflandırması",
    summary:
      "Oftalmologlar için web tabanlı tanı aracı: OCT görüntülerinde CNV/DME/DRUSEN/NORMAL sınıflandırması, gerçek zamanlı sonuç ve vaka arşivi.",
    stack: ["TensorFlow", "DenseNet201", "Flask", "React", "MongoDB"],
    href: "https://github.com/hasanmemis21",
    highlights: [
      "DenseNet201 + veri artırma ile yüksek doğruluk",
      "Gradio/React arayüz, vaka kaydı & pdf rapor",
      "Model versiyonlama ve inference optimizasyonu",
    ],
    metrics: [
      { label: "Doğruluk", value: "~98–99% (val)" },
      { label: "Ortalama inference", value: "≈ 40–60 ms / görüntü" },
    ],
    body:
      "Klinik senaryolar için tasarlanan bu çalışma; veri temizlik, class-imbalance çözümleri ve kalibrasyon (temperature scaling) içerir. "
      + "Model, servis olarak Flask API ile sunulur; React/Gradio ile hekim dostu arayüz sağlanır. MongoDB, görüntü hash ve vaka metadatası arşivler.",
  },
  {
    slug: "brain-tumor-detection",
    title: "Beyin Tümörü Tespiti (MRI, YOLO)",
    summary:
      "MRI üzerinde tümör bölgelerini otomatik işaretleyen, doktorların hızlı tarama yapmasını sağlayan derin öğrenme tabanlı araç.",
    stack: ["YOLO", "OpenCV", "Python", "FastAPI"],
    href: "https://github.com/hasanmemis21",
    highlights: [
      "YOLO ile bbox/segmentasyon denemeleri",
      "Ön-işleme: kontrast/CLAHE + veri artırma",
      "Web arayüzü: yükle-gör-karşılaştır",
    ],
    metrics: [
      { label: "mAP@50", value: "≈ 0.90+" },
      { label: "Ortalama tespit süresi", value: "≲ 80 ms / görüntü" },
    ],
    body:
      "Çalışma; kalite değişken MRI verilerinde sağlam performans için normalizasyon, histogram eşitleme ve hedefe yönelik augmentasyon stratejileri kullanır. "
      + "Tespit sonrası ROI’yi doktor incelemesine sunmak için hız/okunabilirlik odaklı bir UI tasarlanmıştır.",
  },
  {
    slug: "cic-iot-analytics",
    title: "CIC IoT Anomali Analizi",
    summary:
      "CIC IoT verisinde saldırı sınıflandırma ve anomalilerin BI panosu ile izlenmesi; uçtan uca veri temizlik, modelleme ve görselleştirme.",
    stack: ["ML", "Power BI", "Pandas", "SQL", "scikit-learn"],
    href: "https://github.com/hasanmemis21",
    highlights: [
      "Özellik mühendisliği + dengesiz veri stratejileri",
      "KPI/Alarm panoları (gerçek zaman senaryosu)",
      "Model karşılaştırma + kalibrasyon",
    ],
    metrics: [
      { label: "Macro-F1", value: "≈ 0.92" },
      { label: "Dashboard gecikmesi", value: "< 1 sn (veri örneğinde)" },
    ],
    body:
      "Ağ trafiği akışlarında saldırı tiplerini sınıflandıran bir boru hattı kuruldu. Feature store mantığıyla tekrarlanabilir veri hazırlama, "
      + "BI katmanında canlı metrik takibi (trend, sınıf dağılımı, hata analizi) sağlandı.",
  },
  {
    slug: "tubitak-quantum",
    title: "TÜBİTAK-ARDEB: Quantum Algorithms",
    summary:
      "Kriptografi ve AI görevleri için hibrit kuantum-klasik akışlar; Qiskit/PennyLane ile devre tasarımı, hata azaltma ve kıyaslamalar.",
    stack: ["Qiskit", "PennyLane", "IBM Q", "Python"],
    href: "https://github.com/hasanmemis21",
    highlights: [
      "Hibrit (VQE/QAOA) prototipleri",
      "Noise mitigation & error correction",
      "Benchmark ve maliyet/performans analizi",
    ],
    metrics: [
      { label: "Prototip iyileşmesi", value: "~%25 hız/başarı artışı" },
      { label: "Cihaz", value: "IBM Q + simülatör" },
    ],
    body:
      "Seçili kombinatoryal ve sınıflandırma problemlerinde kuantum avantaj potansiyelini araştırdım. Devre derinliği ve okumaya bağlı gürültü etkisini, "
      + "mitigation teknikleri (ZNE, readout error mitigation) ile düşürüp, klasik taban çizgilerle kıyasladım.",
  },
  {
    slug: "echo-ai-multimodal",
    title: "Echo AI – Multimodal Duyguya Göre Müzik",
    summary:
      "Ses, görsel veya metinden duyguyu tahmin edip Spotify API’siyle bağlama uygun liste öneren çok-modlu bir sistem.",
    stack: ["PyTorch/TensorFlow", "OpenCV", "NLU", "Spotify API", "Next.js"],
    href: "https://github.com/hasanmemis21",
    highlights: [
      "Ses-görüntü-metin için ön-eğitimli modellerin birleşimi",
      "Tek çatı altında skor normalizasyonu",
      "Spotify ile doğrudan oynatma",
    ],
    metrics: [
      { label: "Inference", value: "≈ 120–180 ms / giriş" },
      { label: "Kapsam", value: "7+ duygu kategorisi" },
    ],
    body:
      "Her modalite için uygun hafif model seçildi; çıktılar ortak duygu uzayına projeksiyonla birleştirildi. Kullanıcı geri bildirimi ile çevrim-içi öğrenmeye hazır tasarlandı.",
  },
  {
    slug: "satellite-change-detection",
    title: "Uydu Görüntülerinde Zaman İçinde Değişim Tespiti",
    summary:
      "İki tarih arasındaki yapısal/doğal değişimleri bulan AI sistemi: şehirleşme, hasar, tarımsal değişim ve altyapı farklılıklarını segment eder.",
    stack: ["Siamese U-Net/UNet++", "ResNet-Encoder", "PyTorch", "Rasterio", "GDAL"],
    href: "https://github.com/hasanmemis21",
    highlights: [
      "Çok zamanlı (bitemporal) girişler için Siamese mimari",
      "Bulut/atmosfer etkisine dayanıklı ön-işleme",
      "Rapor: değişim ısı haritası + alan ölçümü",
    ],
    metrics: [
      { label: "IoU (değişim)", value: "≈ 0.70–0.80 (dataset’e göre)" },
      { label: "Ortalama gecikme", value: "≲ 200 ms / patch" },
    ],
    body:
      "Uydu görüntü çiftleri co-register edilip normalize edilir; bulut maskesi ve histogram eşitleme uygulanır. Siamese U-Net, farklı tarihli görüntülerden "
      + "ortak özellikler çıkarır; değişim maskesi üretir. Sonuçlar, poligonlaştırılıp yüzölçümü ve konum bazlı raporlanır.",
  },
];
