import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const hotels = [
  {
    name: "Azure Palm Resort",
    location: "Дубай, ОАЭ",
    rating: "4.9",
    reviews: "1 248",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    room: "Делюкс с видом на море, 42 м²",
    menu: ["Шведский стол", "Авторская кухня", "Завтрак включён"],
    price: "8 900 ₽ / ночь",
  },
  {
    name: "Tropical Pearl Villas",
    location: "Бали, Индонезия",
    rating: "4.8",
    reviews: "986",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    room: "Вилла с бассейном, 65 м²",
    menu: ["Балийская кухня", "Веган-меню", "All Inclusive"],
    price: "6 500 ₽ / ночь",
  },
  {
    name: "Santorini Sky Suites",
    location: "Санторини, Греция",
    rating: "5.0",
    reviews: "742",
    image: "/santorini-sunset.png",
    room: "Люкс с видом на закат, 38 м²",
    menu: ["Средиземноморская", "Морепродукты", "Завтрак включён"],
    price: "11 200 ₽ / ночь",
  },
]

export function PopularPackages() {
  return (
    <section id="hotels" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Отели с <span className="font-semibold">рейтингами и отзывами</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Подробности о номерах, меню ресторанов и реальные отзывы гостей — выбирайте и бронируйте онлайн
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Star" className="h-3.5 w-3.5 fill-primary text-primary" size={14} />
                  <span className="text-xs font-semibold">{hotel.rating}</span>
                  <span className="text-xs text-muted-foreground">({hotel.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                    <Icon name="MapPin" className="h-4 w-4" size={16} />
                    <span>{hotel.location}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{hotel.name}</h3>

                  {/* Room Info */}
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                    <Icon name="Bed" className="h-4 w-4" size={16} />
                    <span>{hotel.room}</span>
                  </div>

                  {/* Menu / Meals */}
                  <div className="flex flex-wrap gap-2">
                    {hotel.menu.map((item, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full flex items-center gap-1">
                        <Icon name="Utensils" className="h-3 w-3" size={12} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
                    <div className="text-2xl font-semibold text-primary">{hotel.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Забронировать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}