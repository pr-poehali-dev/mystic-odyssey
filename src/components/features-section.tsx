import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Идеи по запросу",
    description: "Опишите задачу — Мак мгновенно предложит десятки свежих идей, адаптированных под вас.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Только для вас",
    description: "Сервис обучается на ваших предпочтениях и стиле — идеи становятся точнее с каждым использованием.",
    icon: "lock",
    badge: "Персональный",
  },
  {
    title: "Любая сфера",
    description: "Бизнес, контент, названия, стратегии, продукты — Мак генерирует идеи в любой области.",
    icon: "globe",
    badge: "Универсальный",
  },
  {
    title: "Мгновенный результат",
    description: "Никаких ожиданий — идеи появляются за секунды, чтобы не тормозить ваш рабочий процесс.",
    icon: "zap",
    badge: "Быстрый",
  },
  {
    title: "Сохранение и история",
    description: "Все сгенерированные идеи сохраняются. Возвращайтесь к ним в любое время и развивайте лучшие.",
    icon: "link",
    badge: "История",
  },
  {
    title: "Расширение идей",
    description: "Понравилась идея? Мак развернёт её в детальный план, концепцию или структуру проекта.",
    icon: "target",
    badge: "Глубина",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё, что умеет Мак</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Личный ИИ-помощник, который генерирует идеи тогда, когда они нужны именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}