module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/(site)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(site)/projects/[slug]/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/projects/[slug]/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "oct-retina",
        title: "OCT Retina Hastalık Sınıflandırması",
        summary: "Oftalmologlar için web tabanlı tanı aracı: OCT görüntülerinde CNV/DME/DRUSEN/NORMAL sınıflandırması, gerçek zamanlı sonuç ve vaka arşivi.",
        stack: [
            "TensorFlow",
            "DenseNet201",
            "Flask",
            "React",
            "MongoDB"
        ],
        href: "https://github.com/hasanmemis21",
        highlights: [
            "DenseNet201 + veri artırma ile yüksek doğruluk",
            "Gradio/React arayüz, vaka kaydı & pdf rapor",
            "Model versiyonlama ve inference optimizasyonu"
        ],
        metrics: [
            {
                label: "Doğruluk",
                value: "~98–99% (val)"
            },
            {
                label: "Ortalama inference",
                value: "≈ 40–60 ms / görüntü"
            }
        ],
        body: "Klinik senaryolar için tasarlanan bu çalışma; veri temizlik, class-imbalance çözümleri ve kalibrasyon (temperature scaling) içerir. " + "Model, servis olarak Flask API ile sunulur; React/Gradio ile hekim dostu arayüz sağlanır. MongoDB, görüntü hash ve vaka metadatası arşivler."
    },
    {
        slug: "brain-tumor-detection",
        title: "Beyin Tümörü Tespiti (MRI, YOLO)",
        summary: "MRI üzerinde tümör bölgelerini otomatik işaretleyen, doktorların hızlı tarama yapmasını sağlayan derin öğrenme tabanlı araç.",
        stack: [
            "YOLO",
            "OpenCV",
            "Python",
            "FastAPI"
        ],
        href: "https://github.com/hasanmemis21",
        highlights: [
            "YOLO ile bbox/segmentasyon denemeleri",
            "Ön-işleme: kontrast/CLAHE + veri artırma",
            "Web arayüzü: yükle-gör-karşılaştır"
        ],
        metrics: [
            {
                label: "mAP@50",
                value: "≈ 0.90+"
            },
            {
                label: "Ortalama tespit süresi",
                value: "≲ 80 ms / görüntü"
            }
        ],
        body: "Çalışma; kalite değişken MRI verilerinde sağlam performans için normalizasyon, histogram eşitleme ve hedefe yönelik augmentasyon stratejileri kullanır. " + "Tespit sonrası ROI’yi doktor incelemesine sunmak için hız/okunabilirlik odaklı bir UI tasarlanmıştır."
    },
    {
        slug: "cic-iot-analytics",
        title: "CIC IoT Anomali Analizi",
        summary: "CIC IoT verisinde saldırı sınıflandırma ve anomalilerin BI panosu ile izlenmesi; uçtan uca veri temizlik, modelleme ve görselleştirme.",
        stack: [
            "ML",
            "Power BI",
            "Pandas",
            "SQL",
            "scikit-learn"
        ],
        href: "https://github.com/hasanmemis21",
        highlights: [
            "Özellik mühendisliği + dengesiz veri stratejileri",
            "KPI/Alarm panoları (gerçek zaman senaryosu)",
            "Model karşılaştırma + kalibrasyon"
        ],
        metrics: [
            {
                label: "Macro-F1",
                value: "≈ 0.92"
            },
            {
                label: "Dashboard gecikmesi",
                value: "< 1 sn (veri örneğinde)"
            }
        ],
        body: "Ağ trafiği akışlarında saldırı tiplerini sınıflandıran bir boru hattı kuruldu. Feature store mantığıyla tekrarlanabilir veri hazırlama, " + "BI katmanında canlı metrik takibi (trend, sınıf dağılımı, hata analizi) sağlandı."
    },
    {
        slug: "tubitak-quantum",
        title: "TÜBİTAK-ARDEB: Quantum Algorithms",
        summary: "Kriptografi ve AI görevleri için hibrit kuantum-klasik akışlar; Qiskit/PennyLane ile devre tasarımı, hata azaltma ve kıyaslamalar.",
        stack: [
            "Qiskit",
            "PennyLane",
            "IBM Q",
            "Python"
        ],
        href: "https://github.com/hasanmemis21",
        highlights: [
            "Hibrit (VQE/QAOA) prototipleri",
            "Noise mitigation & error correction",
            "Benchmark ve maliyet/performans analizi"
        ],
        metrics: [
            {
                label: "Prototip iyileşmesi",
                value: "~%25 hız/başarı artışı"
            },
            {
                label: "Cihaz",
                value: "IBM Q + simülatör"
            }
        ],
        body: "Seçili kombinatoryal ve sınıflandırma problemlerinde kuantum avantaj potansiyelini araştırdım. Devre derinliği ve okumaya bağlı gürültü etkisini, " + "mitigation teknikleri (ZNE, readout error mitigation) ile düşürüp, klasik taban çizgilerle kıyasladım."
    },
    {
        slug: "echo-ai-multimodal",
        title: "Echo AI – Multimodal Duyguya Göre Müzik",
        summary: "Ses, görsel veya metinden duyguyu tahmin edip Spotify API’siyle bağlama uygun liste öneren çok-modlu bir sistem.",
        stack: [
            "PyTorch/TensorFlow",
            "OpenCV",
            "NLU",
            "Spotify API",
            "Next.js"
        ],
        href: "https://github.com/hasanmemis21",
        highlights: [
            "Ses-görüntü-metin için ön-eğitimli modellerin birleşimi",
            "Tek çatı altında skor normalizasyonu",
            "Spotify ile doğrudan oynatma"
        ],
        metrics: [
            {
                label: "Inference",
                value: "≈ 120–180 ms / giriş"
            },
            {
                label: "Kapsam",
                value: "7+ duygu kategorisi"
            }
        ],
        body: "Her modalite için uygun hafif model seçildi; çıktılar ortak duygu uzayına projeksiyonla birleştirildi. Kullanıcı geri bildirimi ile çevrim-içi öğrenmeye hazır tasarlandı."
    },
    {
        slug: "satellite-change-detection",
        title: "Uydu Görüntülerinde Zaman İçinde Değişim Tespiti",
        summary: "İki tarih arasındaki yapısal/doğal değişimleri bulan AI sistemi: şehirleşme, hasar, tarımsal değişim ve altyapı farklılıklarını segment eder.",
        stack: [
            "Siamese U-Net/UNet++",
            "ResNet-Encoder",
            "PyTorch",
            "Rasterio",
            "GDAL"
        ],
        href: "https://github.com/hasanmemis21",
        highlights: [
            "Çok zamanlı (bitemporal) girişler için Siamese mimari",
            "Bulut/atmosfer etkisine dayanıklı ön-işleme",
            "Rapor: değişim ısı haritası + alan ölçümü"
        ],
        metrics: [
            {
                label: "IoU (değişim)",
                value: "≈ 0.70–0.80 (dataset’e göre)"
            },
            {
                label: "Ortalama gecikme",
                value: "≲ 200 ms / patch"
            }
        ],
        body: "Uydu görüntü çiftleri co-register edilip normalize edilir; bulut maskesi ve histogram eşitleme uygulanır. Siamese U-Net, farklı tarihli görüntülerden " + "ortak özellikler çıkarır; değişim maskesi üretir. Sonuçlar, poligonlaştırılıp yüzölçümü ve konum bazlı raporlanır."
    }
];
}),
"[project]/app/(site)/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
function ProjectDetail({ params }) {
    const p = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((x)=>x.slug === params.slug);
    if (!p) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/projects",
                className: "text-sm text-gray-400 hover:text-white",
                children: "← Tüm projeler"
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold mt-2",
                children: p.title
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 mt-3",
                children: p.summary
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: p.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10",
                        children: s
                    }, s, false, {
                        fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            p.metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid sm:grid-cols-2 gap-4",
                children: p.metrics.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-white/10 bg-white/5 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: m.label
                            }, void 0, false, {
                                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-semibold",
                                children: m.value
                            }, void 0, false, {
                                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m.label, true, {
                        fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            p.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-invert mt-6 max-w-none",
                children: p.body
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 39,
                columnNumber: 18
            }, this),
            p.highlights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-6 list-disc pl-5 text-gray-300 space-y-1",
                children: p.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: h
                    }, i, false, {
                        fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 39
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            p.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "btn-outlined",
                    target: "_blank",
                    href: p.href,
                    children: "GitHub / Kaynak"
                }, void 0, false, {
                    fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(site)/projects/[slug]/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(site)/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(site)/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5ad85d41._.js.map