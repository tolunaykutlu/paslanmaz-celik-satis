'use client';

import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-6 space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Hakkımızda
                    </h1>
                    <p className="text-gray-600 mb-8">
                        2000 yılından bu yana paslanmaz çelik sektöründe öncü bir kuruluş olarak hizmet vermekteyiz.
                        Endüstriyel mutfaktan otomotiv sektörüne, gıda işleme tesislerinden mimari uygulamalara kadar
                        geniş bir yelpazede, EN 10088-2 standartlarına uygun 304 (18/10 CrNi), 316 (18/10/2 CrNiMo) ve
                        430 (17 Cr) kalite paslanmaz çelik ürünleri tedarik ediyoruz. Yüksek korozyon direnci,
                        mükemmel şekillendirilebilirlik ve uzun ömürlü performans sunan ürünlerimiz,
                        müşterilerimizin en zorlu projelerinde güvenle tercih ediliyor.
                    </p>
                    <p>
                        Modern üretim tesislerimizde, ileri teknoloji makine parkımız ve uzman kadromuzla,
                        BA,2B,SB,2D, 2R yüzey kalitelerinde geniş bir ürün yelpazesi sunuyoruz.
                        ISO 9001:2015 kalite yönetim sistemimiz ve titiz kalite kontrol süreçlerimizle,
                        her bir ürünün en yüksek standartlarda olmasını sağlıyoruz. Müşteri memnuniyetini
                        merkeze alan yaklaşımımız, hızlı teslimat ağımız ve rekabetçi fiyat politikamızla,
                        sektörde güvenilir bir çözüm ortağı olarak konumlanmış durumdayız
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Örnek Resim 1 */}
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1609210884848-2d530cfb2a07"
                                alt="Paslanmaz Çelik Üretim"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Örnek Resim 2 */}
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1503197553955-b4eafae3e08e"
                                alt="Modern Fabrika"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Örnek Resim 3 */}
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1529479627062-5f1f0b88912a"
                                alt="Kalite Kontrol"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Neden Biz?
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Yüksek kalite standartları</li>
                            <li>Geniş ürün yelpazesi</li>
                            <li>Hızlı teslimat</li>
                            <li>Profesyonel ekip</li>
                            <li>Rekabetçi fiyatlar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}