"use client";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer1 = () => {
  const links = {
    محصول: ["ویژگی‌ها", "قیمت‌گذاری", "API", "راهنما"],
    شرکت: ["درباره ما", "بلاگ", "شغل‌ها", "تماس با ما"],
    پشتیبانی: ["مرکز کمک", "انجمن", "وضعیت سرویس", "امنیت"],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/nodup-labs", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nodup",
      label: "LinkedIn",
    },
    { icon: Mail, href: "hello.nodup@gmail.com", label: "Email" },
  ];

  return (
    <footer className="backdrop-blur-sm bg-white/10 relative overflow-hidden rounded-lg container mx-auto">
      <div className="container px-6 mx-auto pt-14 pb-6 border-b border-border/50">
        <div className="flex justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="flex justify-center mb-3">
              <Logo />
            </div>

            <p className="text-muted-foreground mb-6">
              «کسب‌وکار خود را با پلتفرم قدرتمند ما دگرگون کنید. رشد سریع‌تر،
              کارکرد هوشمندانه‌تر و پیشرفت بزرگ‌تر را تجربه کنید.»
            </p>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-9 border border-border/60 text-muted-foreground rounded-md flex items-center justify-center hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-6 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm hover:text-[#ff914d] hover:underline">
            © ۲۰۲۵ نوداپ. تمامی حقوق محفوظ است.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            <a
              href="https://keenthemes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#ff914d] hover:underline"
            >
              NODUP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
