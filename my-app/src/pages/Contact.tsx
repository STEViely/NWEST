import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ---- EmailJS ----
    emailjs
      .send(
        "YOUR_SERVICE_ID", // <= เปลี่ยน
        "YOUR_TEMPLATE_ID", // <= เปลี่ยน
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "stevielyfiles@gmail.com", // <= อีเมลปลายทาง
        },
        "YOUR_PUBLIC_KEY" // <= เปลี่ยน
      )
      .then(
        () => {
          toast.success("Message sent ✓");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED:", error);
          toast.error("Send failed. Please try again.");
        }
      );
  };

  const handleChange = (e) => {
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
    { icon: Phone, label: t("contact.phone"), value: "+66 98 103 2459" },
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

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
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
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
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
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-primary border border-border"
                  >
                    <div className="flex items-center gap-4 h-8 text-background">
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-background">
                          {info.label}
                        </h4>
                        <p className="text-background text-sm">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="text-center text-muted-foreground">
                <a
                  href="https://www.google.com/maps?q=13.5907644,100.8944035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 aspect-video rounded-2xl overflow-hidden hover-lift"
                >
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.6330369571175!2d100.892000!3d13.5907644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM1JzI3LjQiTiAxMDDCsDUzJzM5LjkiRQ!5e0!3m2!1sth!2sth!4v1733900000000"
                    className="w-full h-full border-0"
                    loading="lazy"
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
