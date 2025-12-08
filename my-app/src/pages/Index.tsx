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
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden ">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-navy" />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <Sun className="w-4 h-4" />
                <span className="text-sm font-medium">Blue Coated Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-primary-foreground mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground  font-semibold px-8 glow-effect">
                  <Link to="/products">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-accent/60">
                  <Link to="/about">
                    {t('hero.learn')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src="https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144947/STV01969_ugc2jj.jpg"
                alt="N-WEST Premium Side Mirror"
                className="relative z-10 w-full h-auto max-w-xl mx-auto animate-float drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Preview Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              {t('products.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <Link
                key={index}
                to="/products"
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-metallic to-metallic-light flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all">
                  <span className="font-orbitron font-bold text-xs text-primary-foreground">
                    {brand.name.slice(0, 2)}
                  </span>
                </div>
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {t(brand.key)}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-primary-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold px-10">
            <Link to="/contact">
              {t('nav.contact')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
