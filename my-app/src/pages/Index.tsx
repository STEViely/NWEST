import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Shield, Droplets, Thermometer, Sparkles, Sun } from 'lucide-react';
import Layout from '@/components/Layout';

const features = [
  { icon: Eye, titleKey: 'features.antiglare.title', descKey: 'features.antiglare.desc' },
  { icon: ArrowRight, titleKey: 'features.wideangle.title', descKey: 'features.wideangle.desc' },
  { icon: Shield, titleKey: 'features.uv.title', descKey: 'features.uv.desc' },
  { icon: Thermometer, titleKey: 'features.temp.title', descKey: 'features.temp.desc' },
  { icon: Droplets, titleKey: 'features.water.title', descKey: 'features.water.desc' },
  { icon: Sparkles, titleKey: 'features.style.title', descKey: 'features.style.desc' },
];

const brands = [
  { name: 'HONDA', key: 'products.honda' },
  { name: 'TOYOTA', key: 'products.toyota' },
  { name: 'TESLA', key: 'products.tesla' },
  { name: 'SUZUKI', key: 'products.suzuki' },
  { name: 'NISSAN', key: 'products.nissan' },
  { name: 'MAZDA', key: 'products.mazda' },
  { name: 'BYD', key: 'products.byd' },
];

const heroImages = [
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144935/STV01954_gr35q0.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144941/STV07211_szbg6n.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144941/STV05207_mddcny.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144942/STV07248-Enhanced-NR_plyaxj.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144943/STV01974_destky.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144944/STV01990_e1djcx.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144946/STV02026_xq4zbd.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144946/STV07202_y06nxx.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144948/STV07207_j7sej4.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144949/STV07251_eaaler.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144949/STV07228-Enhanced-NR_fa1xqy.jpg",
  "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144954/STV07246_aaokue.jpg",
  // เพิ่มรูปภาพอื่น ๆ ได้ตามต้องการ
];

const Index = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  // เปลี่ยน Hero Image ทุก 4 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="container mx-auto px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <Sun className="w-4 h-4" />
                <span className="text-sm font-medium">Blue Coated Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-primary mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-primary/50 mb-8 max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/70 text-background font-semibold px-8 glow-effect">
                  <Link to="/products">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:text-primary">
                  <Link to="/about">{t('hero.learn')}</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Slideshow */}
            <div className="relative animate-fade-in w-full h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 blur-3xl rounded-full animate-pulse-glow" />
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Hero ${index}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 rounded-2xl drop-shadow-2xl ${
                    index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-foreground to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-primary">{t('features.title')}</h2>
            <p className="text-lg text-primary max-w-2xl mx-auto">{t('features.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center group p-6 rounded-2xl bg-background border border-border hover:border-accent/50 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 bg-yellow-800">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-primary">{t('products.title')}</h2>
            <p className="text-lg text-primary">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {brands.map((brand, index) => (
              <Link
                key={index}
                to="/products"
                className="group p-6 rounded-xl bg-primary/60 border border-primary hover:border-primary hover:bg-background/80 hover:shadow-lg transition-all duration-300 text-center"
              >
                <span className="font-semibold text-sm text-primary group-hover:text-primary transition-colors">{t(brand.key)}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-foreground border-2">
              <Link to="/products">
                {t('products.viewall')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-background mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold px-10">
            <Link to="/contact">{t('nav.contact')}<ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
