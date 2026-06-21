import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const flights = [
  {
    from: "Москва",
    to: "Дубай",
    country: "ОАЭ",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    duration: "5 ч 30 мин",
    classes: ["Эконом", "Средний", "Бизнес"],
    price: "от 24 900 ₽",
  },
  {
    from: "Санкт-Петербург",
    to: "Бали",
    country: "Индонезия",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    duration: "13 ч 10 мин",
    classes: ["Эконом", "Средний", "Бизнес"],
    price: "от 48 900 ₽",
  },
  {
    from: "Минск",
    to: "Санторини",
    country: "Греция",
    image: "/santorini-sunset.png",
    duration: "4 ч 05 мин",
    classes: ["Эконом", "Средний", "Бизнес"],
    price: "от 19 900 ₽",
  },
  {
    from: "Варшава",
    to: "Киото",
    country: "Япония",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    duration: "12 ч 40 мин",
    classes: ["Эконом", "Средний", "Бизнес"],
    price: "от 52 900 ₽",
  },
  {
    from: "Брест",
    to: "Мальдивы",
    country: "Индийский океан",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    duration: "11 ч 20 мин",
    classes: ["Эконом", "Средний", "Бизнес"],
    price: "от 56 900 ₽",
  },
  {
    from: "Москва",
    to: "Рейкьявик",
    country: "Исландия",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    duration: "6 ч 15 мин",
    classes: ["Эконом", "Средний", "Бизнес"],
    price: "от 31 900 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="flights" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Авиабилеты <span className="font-semibold">по всему миру</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Вылеты из Москвы, Санкт-Петербурга, Минска, Варшавы и Бреста. Выбирайте маршрут, класс и место в самолёте
          </p>
        </div>

        {/* Flights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights.map((flight, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={flight.image || "/placeholder.svg"}
                  alt={flight.to}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Route Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">{flight.from}</span>
                  <Icon name="Plane" className="h-3.5 w-3.5 text-primary" size={14} />
                  <span className="text-xs font-medium">{flight.to}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Clock" className="h-3.5 w-3.5 text-primary" size={14} />
                  <span className="text-xs font-medium">{flight.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Icon name="MapPin" className="h-3.5 w-3.5" size={14} />
                    <span>{flight.country}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{flight.to}</h3>
                </div>

                {/* Classes */}
                <div className="flex flex-wrap gap-2">
                  {flight.classes.map((cls, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                      {cls}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{flight.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Выбрать место
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Все направления
          </Button>
        </div>
      </div>
    </section>
  )
}
