import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Target, Eye, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "10,000+", label: "Customers" },
    { icon: Award, value: "50+", label: "Car Models" },
    { icon: Target, value: "99%", label: "Satisfaction" },
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
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-background text-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 animate-slide-up">
            {t("about.title")}
          </h1>
          <p className="text-xl text-primary-foreground/80 animate-fade-in">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up text-primary">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                {t("about.story")}
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                {t("about.story.text")}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-muted"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-orbitron font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Images Slideshow */}
            <div className="relative animate-fade-in w-full h-[500px] lg:h-[600px]">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 rounded-2xl ${
                    index === currentImage ? "opacity-100 z-10" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-primary border border-border hover-lift hover:shadow-[0_0_50px_5px_#0049DA]">
              <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-background">
                {t("about.mission")}
              </h3>
              <p className="text-background leading-relaxed">
                {t("about.mission.text")}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary border border-border hover-lift hover:shadow-[0_0_50px_5px_#0049DA]">
              <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-background">
                {t("about.vision")}
              </h3>
              <p className=" leading-relaxed text-background">
                {t("about.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
