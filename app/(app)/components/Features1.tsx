import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BarChart3, Shield, Users, Zap } from "lucide-react";

const Features1 = () => {
  const features = [
    {
      id: "task-automation",
      icon: Zap,
      title: "نوآوری هدفمند",
      description:
        "ما دنبال ترندها نیستیم—آن‌ها را خلق می‌کنیم. با نگاهی عمیق و الهام از بینش، طراحی‌هایی می‌سازیم که تجربه‌ای ماندگار برای مخاطب ایجاد می‌کنند.",
      colors: {
        bg: "bg-gray-700/30",
        icon: "text-blue-600",
        hover: "hover:border-[#ff914d]",
        shadow: "group-hover:shadow-blue-500/30",
        gradient: "from-orange-400 via-orange-500 to-orange-600",
        text: "group-hover:text-blue-700",
      },
    },
    {
      id: "workflow-optimization",
      icon: Shield,
      title: "هسته‌ای با محوریت کاربر",
      description:
        "مردم همیشه در اولویت ما هستند. با درک دقیق دنیای کاربران، طراحی‌هایی خلق می‌کنیم که ارتباط واقعی و تجربه‌ای معنادار ایجاد می‌کنند.",
      colors: {
        bg: "bg-red-100/40 dark:bg-red-950/40",
        icon: "text-red-600",
        hover: "hover:border-[#ff914d]",
        shadow: "group-hover:shadow-red-500/30",
        gradient: "from-orange-400 via-orange-500 to-orange-600",
        text: "group-hover:text-red-700",
      },
    },
    {
      id: "intelligent-scheduling",
      icon: Users,
      title: "تیمی از متخصصان حرفه‌ای",
      description:
        "طراحان متخصص ما مهارت‌ها و دیدگاه‌های متنوع را با هم ترکیب می‌کنند تا هر پروژه به تجربه‌ای منحصربه‌فرد تبدیل شود.",
      colors: {
        bg: "bg-emerald-100/40 dark:bg-emerald-950/40",
        icon: "text-emerald-600",
        hover: "hover:border-[#ff914d]",
        shadow: "group-hover:shadow-emerald-500/30",
        gradient: "from-orange-400 via-orange-500 to-orange-600",
        text: "group-hover:text-emerald-700",
      },
    },
    {
      id: "ai-analytics",
      icon: BarChart3,
      title: "فرآیندی روشن و بدون ابهام",
      description:
        "ما با برقراری ارتباط شفاف، در هر مرحله همراه شما هستیم و اعتماد و اطمینان کامل را در فرآیند طراحی ایجاد می‌کنیم.",
      colors: {
        bg: "bg-gray-700/30",
        icon: "text-amber-600",
        hover: "hover:border-[#ff914d]",
        shadow: "group-hover:shadow-amber-500/30",
        gradient: "from-orange-400 via-orange-500 to-orange-600",
        text: "group-hover:text-amber-700",
      },
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
                  "h-full border border-border transition-all duration-500 p-8 relative overflow-hidden hover:shadow-lg bg-white/10 backdrop-blur-sm",
                  feature.colors.hover
                )}
              >
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={cn(
                        "size-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative overflow-hidden",
                        feature.colors.bg
                      )}
                    >
                      <feature.icon
                        className={cn(
                          "size-5 relative z-10",
                          feature.colors.icon
                        )}
                      />
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
                    "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
                    feature.colors.gradient,
                    feature.colors.gradient
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
