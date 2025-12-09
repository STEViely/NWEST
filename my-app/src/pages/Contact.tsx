import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.send") + " ✓");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact.address"),
      value: t("contact.address.text"),
    },
    { icon: Phone, label: t("contact.phone"), value: "+66 XX XXX XXXX" },
    { icon: Mail, label: t("contact.email"), value: "info@n-west.com" },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hours.text") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-8 pb-16 bg-background text-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 animate-slide-up">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-primary-foreground/80 animate-fade-in">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <div className=" bg-background">
        <Link
          to="https://www.facebook.com/nwest4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dbmscl9hm/image/upload/v1765315119/banner_c7tokm.jpg"
            alt="N-WEST FACEBOOK PAGE"
            className="mx-auto"
          />
        </Link>
      </div>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up ">
              <div className="p-8 rounded-2xl bg-primary border border-border text-background">
                <h2 className="text-2xl font-orbitron font-bold mb-6 flex items-center gap-2">
                  {t("contact.send")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background text-primary"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background text-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("contact.phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background text-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background resize-none text-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-background duration-1000 rounded-2xl drop-shadow-2xl border hover:border-background hover:text-background"
                  >
                    {t("contact.send")}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-primary border border-border hover:border-primary transition-colors group "
                  >
                    <div className="flex items-center gap-4 h-8 text-background">
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1 text-background">
                          {info.label}
                        </h4>
                        <p className="text-background">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social / Line */}
                <div className="p-6 rounded-xl bg-white  text-background border-2 border-green-500 hover-lift">
                  <Link
                    className="flex items-center gap-4"
                    to="https://lin.ee/nwest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/dbmscl9hm/image/upload/v1765315989/line-svgrepo-com_3_f5eg9f.svg"
                        alt="Line"
                        className="w-12 h-12"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-green-500">
                        LINE Official
                      </h4>
                      <p className="text-green-500">@n-west</p>
                    </div>
                  </Link>
                </div>
                <div className="p-6 rounded-xl bg-white  text-background border-2 border-blue-600 hover-lift">
                  <Link
                    className="flex items-center gap-4"
                    to="https://www.facebook.com/nwest4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center ">
                      <img
                        src="https://res.cloudinary.com/dbmscl9hm/image/upload/v1765315989/facebook-1-svgrepo-com_ck2a5x.svg"
                        alt="Facebook"
                        className="w-12 h-12"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-blue-600">
                        FACEBOOK PAGE
                      </h4>
                      <p className="text-blue-600">N-WEST</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="text-center text-muted-foreground">
                <a
                  href="https://www.google.com/maps?q=13.7563,100.5018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 aspect-video rounded-2xl overflow-hidden hover-lift hover:shadow-[0_0_20px_2px_#0049DA]"
                >
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.6330369571175!2d100.892000!3d13.5907644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM1JzI3LjQiTiAxMDDCsDUzJzM5LjkiRQ!5e0!3m2!1sth!2sth!4v1733900000000"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
