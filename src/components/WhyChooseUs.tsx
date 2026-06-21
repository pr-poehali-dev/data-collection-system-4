import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Plane",
    title: "Авиабилеты онлайн",
    description: "Вылеты из Москвы, СПб, Минска, Варшавы и Бреста с выбором места и класса в самолёте",
  },
  {
    icon: "BedDouble",
    title: "Отели с отзывами",
    description: "Реальные рейтинги, меню ресторанов и подробное описание каждого номера",
  },
  {
    icon: "ShieldCheck",
    title: "Безопасное бронирование",
    description: "Защищённые платежи и подтверждение брони сразу после оплаты",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Круглосуточная помощь до, во время и после вашей поездки",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Horizon Travel</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Авиабилеты, отели и туры в одном сервисе — бронируйте всё для путешествия за пару кликов
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} className="h-8 w-8" size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}