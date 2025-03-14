'use client';

import { useState, useMemo } from 'react';
import products from './products.json';
import { FaWhatsapp, FaFilter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Product } from './types';

export default function ProductsPage() {
  const [selectedKalite, setSelectedKalite] = useState<string>('');
  const [selectedKalinlik, setSelectedKalinlik] = useState<number | ''>('');
  const [selectedYuzey, setSelectedYuzey] = useState<string>('');
  const [selectedGenislik, setSelectedGenislik] = useState<string>('');

  // Genişlik aralıkları
  const genislikAraliklari = [
    { label: '0-500 mm', min: 0, max: 500 },
    { label: '500-999 mm', min: 500, max: 999 },
    { label: '1000-1300 mm', min: 1000, max: 1300 },
    { label: '1300-1700 mm', min: 1300, max: 1700 }
  ];

  // Benzersiz değerleri al
  const uniqueKalite = useMemo(() => [...new Set(products.map(p => p.kalite))].sort(), []);
  const uniqueKalinlik = useMemo(() => [...new Set(products.map(p => p.kalınlık))].sort((a, b) => a - b), []);
  const uniqueYuzey = useMemo(() => [...new Set(products.map(p => p.yüzey))].sort(), []);

  // Filtrelenmiş ürünler
  // genislikAraliklari'ni dependencies array'e ekleyelim
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const kaliteMatch = !selectedKalite || product.kalite === selectedKalite;
      const kalinlikMatch = !selectedKalinlik || product.kalınlık === selectedKalinlik;
      const yuzeyMatch = !selectedYuzey || product.yüzey === selectedYuzey;

      const genislikMatch = !selectedGenislik || (() => {
        const aralik = genislikAraliklari.find(a => a.label === selectedGenislik);
        return aralik ? (product.genişlik >= aralik.min && product.genişlik <= aralik.max) : true;
      })();

      return kaliteMatch && kalinlikMatch && yuzeyMatch && genislikMatch;
    });
  }, [selectedKalite, selectedKalinlik, selectedYuzey, selectedGenislik, genislikAraliklari]); // genislikAraliklari eklendi

  const handleWhatsAppClick = (product: Product) => {
    const message = `${product.kalite} kalite, ${product.kalınlık} X , ${product.genişlik}mm genişlik ve ${product.ağırlık} kilo ürün hakkında bilgi almak istiyorum.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/905321373319?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Bölümü */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Paslanmaz çelik&apos;te son nokta
              </h1>
              <p className="text-gray-600">
                Tüm ürünlerimiz stok kontrolü yapılarak listelenmektedir
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kutlupaslanmaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors"
                title="Instagram'da bizi takip edin"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100001055986294"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                title="Facebook'ta bizi takip edin"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Filtre Bölümü */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4 text-gray-700">
            <FaFilter className="text-blue-500" />
            <h2 className="font-semibold">Filtreleme Seçenekleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Kalite</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={selectedKalite}
                onChange={(e) => setSelectedKalite(e.target.value)}
              >
                <option value="">Tümü</option>
                {uniqueKalite.map(kalite => (
                  <option key={kalite} value={kalite}>{kalite}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Kalınlık</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={selectedKalinlik}
                onChange={(e) => setSelectedKalinlik(e.target.value ? Number(e.target.value) : '')}
              >
                <option value="">Tümü</option>
                {uniqueKalinlik.map(kalinlik => (
                  <option key={kalinlik} value={kalinlik}>{kalinlik} mm</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Yüzey</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={selectedYuzey}
                onChange={(e) => setSelectedYuzey(e.target.value)}
              >
                <option value="">Tümü</option>
                {uniqueYuzey.map(yuzey => (
                  <option key={yuzey} value={yuzey}>{yuzey}</option>
                ))}
              </select>
            </div>

            {/* Yeni Genişlik Filtresi */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Genişlik</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={selectedGenislik}
                onChange={(e) => setSelectedGenislik(e.target.value)}
              >
                <option value="">Tümü</option>
                {genislikAraliklari.map(aralik => (
                  <option key={aralik.label} value={aralik.label}>
                    {aralik.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filtreleri Temizle Butonu */}
          {(selectedKalite || selectedKalinlik || selectedYuzey || selectedGenislik) && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setSelectedKalite('');
                  setSelectedKalinlik('');
                  setSelectedYuzey('');
                  setSelectedGenislik('');
                }}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>

        {/* Tablo Bölümü */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    Kalite
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    Yüzey
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    Kalınlık (mm)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    Genişlik (mm)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    Uzunluk (mm)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    Ağırlık (kg)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-wider border-b-2 border-blue-200">
                    İletişim
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product: Product, index: number) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.kalite}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.yüzey}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.kalınlık}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.genişlik}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {typeof product.uzunluk === 'string'
                        ? product.uzunluk
                        : (product.uzunluk === 0
                          ? <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">RULO</span>
                          : product.uzunluk)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.ağırlık}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleWhatsAppClick(product)}
                        className="inline-flex items-center justify-center p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-all"
                        title="WhatsApp ile iletişime geç"
                      >
                        <FaWhatsapp size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
