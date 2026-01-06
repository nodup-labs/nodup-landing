import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BarChart3, Shield, Users, Zap } from "lucide-react";

const Features1 = () => {
  const features = [
    {
      id: "purposeful-innovation",
      icon: Zap,
      title: "نوآوری با هدف مشخص",
      description:
        "هر ایده‌ای که طراحی می‌کنیم، پشتش یک هدف روشن وجود دارد؛ حل مسئله، بهبود تجربه یا افزایش اثربخشی محصول.",
    },
    {
      id: "user-centered-core",
      icon: Shield,
      title: "تصمیم‌گیری بر اساس کاربر",
      description:
        "طراحی‌ها بر پایه حدس و سلیقه نیستند؛ با شناخت رفتار کاربران، تصمیم‌های طراحی آگاهانه می‌گیریم.",
    },
    {
      id: "expert-team",
      icon: Users,
      title: "تیم تخصصی و هم‌راستا",
      description:
        "طراح و توسعه‌دهنده کنار هم کار می‌کنند تا خروجی نهایی هم زیبا باشد، هم قابل اجرا و توسعه.",
    },
    {
      id: "transparent-process",
      icon: BarChart3,
      title: "فرآیند شفاف و قابل پیگیری",
      description:
        "در هر مرحله می‌دانید پروژه کجاست، چه کاری در حال انجام است و قدم بعدی چیست.",
    },
  ];

  return (
    <section id="features" className="">
      <div className=" px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card
                className={cn(
                  "h-full border border-border transition-all duration-500 p-8 relative overflow-hidden hover:shadow-lg bg-white/10 backdrop-blur-sm"
                )}
              >
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={cn(
                        "size-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative overflow-hidden"
                      )}
                    >
                      <div
                        className="group relative flex items-center justify-center size-18 rounded
  bg-neutral-900 border border-neutral-800
  transition-all duration-300
  hover:bg-gradient-to-br hover:from-primary/30 hover:to-secondary/30
  hover:shadow-[0_0_35px_rgba(255,145,77,0.25)]"
                      >
                        <feature.icon className="size-4 text-neutral-300 group-hover:text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-foreground transition-colors leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>

                <div
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  )}
                />

                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-slate-100/0 group-hover:from-slate-50/30 group-hover:to-slate-100/10 dark:from-slate-900/0 dark:to-slate-800/0 transition-all duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features1;
