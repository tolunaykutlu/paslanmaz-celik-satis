import React from 'react';


// Metadata ekleyelim
export const metadata = {
    title: 'Paslanmaz Çelik Blog - Endüstriyel Bilgi Kaynağınız',
    description: 'Paslanmaz çelik endüstrisi hakkında güncel bilgiler, teknik makaleler ve uzman tavsiyeleri. Paslanmaz çelik seçimi, bakımı ve endüstriyel uygulamaları hakkında detaylı blog yazıları.',
    keywords: 'paslanmaz çelik, endüstriyel çelik, çelik bakımı, paslanmaz çelik seçimi, çelik endüstrisi',
};

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Paslanmaz Çeliğin Endüstrideki Önemi",
            date: "15 Mart 2024",
            content: `Paslanmaz çelik, modern endüstrinin vazgeçilmez malzemelerinden biridir. Yüksek korozyon direnci, dayanıklılığı ve hijyenik özellikleri sayesinde gıda işleme tesislerinden hastanelere, denizcilik sektöründen mimari uygulamalara kadar pek çok alanda tercih edilmektedir. 

      Özellikle gıda endüstrisinde paslanmaz çelik kullanımı, gıda güvenliği standartlarını karşılamada kritik rol oynar. Bakteri oluşumuna karşı dirençli yüzeyi ve kolay temizlenebilir olması, bu malzemeyi mutfak ekipmanları için ideal kılar.

      Paslanmaz çeliğin sürdürülebilirlik açısından da önemli avantajları vardır. %100 geri dönüştürülebilir olması, çevre dostu bir malzeme olarak öne çıkmasını sağlar. Uzun ömürlü olması sayesinde, yenileme ve değiştirme ihtiyacını minimize eder.

      Endüstriyel uygulamalarda paslanmaz çelik, yüksek sıcaklık ve basınç altında bile performansını korur. Kimyasal direnci sayesinde agresif ortamlarda bile güvenle kullanılabilir.

      Günümüzde teknolojinin gelişmesiyle birlikte, paslanmaz çelik üretim teknikleri de sürekli iyileşmekte ve yeni alaşımlar geliştirilmektedir. Bu da malzemenin kullanım alanlarını her geçen gün genişletmektedir.`
        },
        {
            id: 2,
            title: "Paslanmaz Çelik Seçiminde Dikkat Edilmesi Gerekenler",
            date: "10 Mart 2024",
            content: `Paslanmaz çelik seçimi, projenin başarısı için kritik öneme sahiptir. Doğru kalite ve özelliklerde paslanmaz çelik seçimi, uygulamanın ömrünü ve performansını doğrudan etkiler.

      Öncelikle kullanım alanı ve koşulları detaylı şekilde değerlendirilmelidir. Örneğin, deniz suyu teması olan uygulamalarda yüksek korozyon direncine sahip kaliteler tercih edilmelidir.

      Malzemenin mekanik özellikleri de önemli bir seçim kriteridir. Yük taşıma kapasitesi, sertlik ve darbe dayanımı gibi özellikler, uygulamanın gereksinimlerine uygun olmalıdır.

      Maliyet analizi yapılırken, sadece ilk alım maliyeti değil, bakım ve yenileme maliyetleri de göz önünde bulundurulmalıdır. Kaliteli bir paslanmaz çelik, uzun vadede daha ekonomik olabilir.

      Tedarikçi seçimi de en az malzeme seçimi kadar önemlidir. Güvenilir ve kaliteli üreticilerle çalışmak, standartlara uygun malzeme temini açısından kritiktir.`
        },
        {
            id: 3,
            title: "Paslanmaz Çelik Bakımı ve Temizliği",
            date: "5 Mart 2024",
            content: `Paslanmaz çelik, doğru bakım ve temizlik uygulamalarıyla çok uzun yıllar ilk günkü görünümünü koruyabilir. Düzenli bakım, malzemenin performansını ve ömrünü optimize eder.

      Temizlik için yumuşak deterjanlar ve mikrofiber bezler kullanılmalıdır. Aşındırıcı temizlik malzemeleri, yüzeyde çiziklere ve hasara neden olabilir. Özellikle klorlu temizleyicilerden kaçınılmalıdır.

      Paslanmaz çelik yüzeylerde oluşabilecek parmak izleri ve lekeler, özel paslanmaz çelik temizleyicileri ile kolayca giderilebilir. Temizlik sonrası yüzey iyice durulanmalı ve kurulanmalıdır.

      Dış mekân uygulamalarında, çevresel etkenlerden kaynaklanan kirlenmelere karşı düzenli kontrol ve temizlik önemlidir. Özellikle deniz kenarındaki uygulamalarda tuz birikintileri düzenli olarak temizlenmelidir.

      Profesyonel bakım hizmetleri, özellikle büyük ölçekli uygulamalarda periyodik olarak alınmalıdır. Bu, olası sorunların erken tespiti ve çözümü için önemlidir.`
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Blog Yazıları</h1>
            <div className="space-y-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.date}</p>
                        <div className="prose max-w-none">
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
