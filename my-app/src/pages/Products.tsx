import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

interface Product {
  id: string;
  brand: string;
  model: string;
  year: string;
  image: string;
  available: boolean;
}

const products: Product[] = [
  {
    id: "1",
    brand: "HONDA",
    model: "HRV (old model)",
    year: "2020-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144925/Old_HRV_uqnggc.jpg",
    available: true,
  },
  {
    id: "2",
    brand: "HONDA",
    model: "CRV (old model)",
    year: "2018-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144925/Old_CRV_bhld4h.jpg",
    available: true,
  },
  {
    id: "3",
    brand: "HONDA",
    model: "CIVIC FE FK",
    year: "2019-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144925/CIVIC_FE_FK_jklkhn.jpg",
    available: true,
  },
  {
    id: "4",
    brand: "HONDA",
    model: "CIVIC FE FL",
    year: "2020-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144924/CIVIC_FE_FL_vuqrfk.jpg",
    available: false,
  },
  {
    id: "5",
    brand: "HONDA",
    model: "HRV CRV (new model)",
    year: "2018-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144924/New_HRV_CRV_svworh.jpg",
    available: true,
  },
  {
    id: "6",
    brand: "HONDA",
    model: "BRIO",
    year: "2019-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144924/BRIO_usduwi.jpg",
    available: true,
  },
  {
    id: "7",
    brand: "HONDA",
    model: "JAZZ GK, CITY GM6, MOBRIO, BRV, BRIO",
    year: "2019-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144924/JAZZ_GK_CITY_GM6_MOBRIO_BRV_BRIO_rpzks7.jpg",
    available: true,
  },
  {
    id: "8",
    brand: "HONDA",
    model: "FREED",
    year: "2020-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144924/FREED_lqvufv.jpg",
    available: true,
  },
  {
    id: "9",
    brand: "HONDA",
    model: "CITY TURBO WRV",
    year: "2016-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144923/CITY_TURBO_WRV_kquost.jpg",
    available: true,
  },
  {
    id: "10",
    brand: "HONDA",
    model: "JAZZ GD",
    year: "2019-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144923/JAZZ_GD_iyodgn.jpg",
    available: true,
  },

  {
    id: "11",
    brand: "HONDA",
    model: "CITY 12",
    year: "2012",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144923/CITY_12_cv1vzy.jpg",
    available: false,
  },
  {
    id: "12",
    brand: "HONDA",
    model: "JAZZ GD MNC",
    year: "2018-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144922/JAZZ_GD_MNC_klhalw.jpg",
    available: true,
  },

  {
    id: "13",
    brand: "MAZDA",
    model: "MAZDA 2 (GEN 1)",
    year: "2017-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144925/MAZDA_2_G1_krxu8x.jpg",
    available: true,
  },
  {
    id: "14",
    brand: "MAZDA",
    model: "MAZDA 2 (GEN 2)",
    year: "2020-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144926/MAZDA_2_G2_fktidt.jpg",
    available: true,
  },

  {
    id: "15",
    brand: "NISSAN",
    model: "ALMERA",
    year: "2021-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144925/ALMERA_rz2znd.jpg",
    available: true,
  },

  {
    id: "16",
    brand: "SUZUKI",
    model: "SWIFT (GEN2)",
    year: "2019-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144951/SWIFT_G2_sqtmho.jpg",
    available: true,
  },
  {
    id: "17",
    brand: "SUZUKI",
    model: "SWIFT (GEN3)",
    year: "2019-2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144942/SWIFT_G3_gha7in.jpg",
    available: true,
  },

  {
    id: "18",
    brand: "TOYOTA",
    model: "VIOS (2008), Yaris (Gen1)",
    year: "2008",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144949/VIOS_08_YARIS_G1_zwqi0b.jpg",
    available: false,
  },
  {
    id: "19",
    brand: "TOYOTA",
    model: "VIOS (GEN1)",
    year: "2001",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144946/VIOS_G1_drwfzz.jpg",
    available: true,
  },
  {
    id: "20",
    brand: "TOYOTA",
    model: "VIOS (2013), YARIS, ALTIS, CAMRY",
    year: "2013",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144945/VIOS_13_YARIS_ALTIS_CAMRY_quid6k.jpg",
    available: true,
  },

  {
    id: "21",
    brand: "TESLA",
    model: "MODEL 3",
    year: "2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144953/TESLA_3_rhrpls.jpg",
    available: true,
  },
  {
    id: "22",
    brand: "TESLA",
    model: "MODEL Y",
    year: "2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144949/TESLA_Y_uodrcy.jpg",
    available: true,
  },

  {
    id: "23",
    brand: "BYD",
    model: "ATTO 3",
    year: "2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144922/BYD_ATTO_3_kxsqgw.jpg",
    available: true,
  },
  {
    id: "24",
    brand: "BYD",
    model: "DOLPHIN",
    year: "2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144923/BYD_DOLPHIN_lo4qog.jpg",
    available: true,
  },
  {
    id: "25",
    brand: "BYD",
    model: "SEAL",
    year: "2024",
    image:
      "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765144922/BYD_SEAL_xficgf.jpg",
    available: true,
  },
];

// กลุ่มแบรนด์หลัก
const mainBrands = [
  "ALL",
  "HONDA",
  "TOYOTA",
  "TESLA",
  "SUZUKI",
  "NISSAN",
  "MAZDA",
  "OTHER",
];

const Products = () => {
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // หากไม่อยู่ใน mainBrands -> จัดเป็น OTHER
  const filteredProducts =
    selectedBrand === "ALL"
      ? products
      : selectedBrand === "OTHER"
      ? products.filter((p) => !mainBrands.includes(p.brand))
      : products.filter((p) => p.brand === selectedBrand);

  const brandKeyMap: Record<string, string> = {
    ALL: "products.viewall",
    HONDA: "products.honda",
    TOYOTA: "products.toyota",
    TESLA: "products.tesla",
    SUZUKI: "products.suzuki",
    NISSAN: "products.nissan",
    MAZDA: "products.mazda",
    OTHER: "products.other",
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl text-primary md:text-6xl font-orbitron font-bold mb-4 animate-slide-up">
            {t("products.title")}
          </h1>
          <p className="text-xl text-primary-foreground/80 animate-fade-in">
            {t("products.subtitle")}
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-8 drop-shadow-md sticky top-16 md:top-20 bg-background  backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {mainBrands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                onClick={() => setSelectedBrand(brand)}
                className={
                  selectedBrand === brand ? "bg-primary text-background" : ""
                }
              >
                {t(brandKeyMap[brand])}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="hover:shadow-[0_0_20px_2px_#0049DA] rounded-2xl overflow-hidden bg-primary border border-primary hover:border-accent hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* IMAGE */}
                <div
                  className="aspect-video bg-gradient-to-br from-metallic/20 to-accent/10 relative overflow-hidden cursor-pointer"
                  onClick={() =>
                    product.image && setPreviewImage(product.image)
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-50 transition-opacity" />

                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-full object-cover"
                  />

                  <Badge
                    className={`absolute top-3 right-3 ${
                      product.available
                        ? "bg-green-500/90 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.available
                      ? t("products.available")
                      : t("products.contact")}
                  </Badge>
                </div>

                {/* INFO */}
                <div className="p-5">
                  <p className="text-sm text-background font-medium">
                    {product.brand}
                  </p>
                  <h3 className="text-lg font-orbitron text-background font-semibold">
                    {product.model}
                  </h3>
                  <p className="text-sm text-background mb-4">{product.year}</p>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary hover:text-background group-hover:border-primary transition-all"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/messages/t/107618654365659",
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("products.contact")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN PREVIEW */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="shadow-[0_0_20px_2px_#0049DA] relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-4 right-0 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
            >
              ✕
            </button>

            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Products;
