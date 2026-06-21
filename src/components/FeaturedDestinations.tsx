const flights = [
  {
    from: "Москва",
    to: "Дубай",
    country: "ОАЭ 🇦🇪",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    duration: "5 ч 30 мин",
    classes: ["Эконом", "Бизнес-лайт", "Бизнес"],
    price: "от 24 900 ₽",
  },
  {
    from: "Санкт-Петербург",
    to: "Бали",
    country: "Индонезия 🇮🇩",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    duration: "13 ч 10 мин",
    classes: ["Эконом", "Бизнес-лайт", "Бизнес"],
    price: "от 48 900 ₽",
  },
  {
    from: "Минск",
    to: "Санторини",
    country: "Греция 🇬🇷",
    image: "/santorini-sunset.png",
    duration: "4 ч 05 мин",
    classes: ["Эконом", "Бизнес-лайт", "Бизнес"],
    price: "от 19 900 ₽",
  },
  {
    from: "Варшава",
    to: "Токио",
    country: "Япония 🇯🇵",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    duration: "12 ч 40 мин",
    classes: ["Эконом", "Бизнес-лайт", "Бизнес"],
    price: "от 52 900 ₽",
  },
  {
    from: "Брест",
    to: "Мальдивы",
    country: "Мальдивы 🇲🇻",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    duration: "11 ч 20 мин",
    classes: ["Эконом", "Бизнес-лайт", "Бизнес"],
    price: "от 56 900 ₽",
  },
  {
    from: "Москва",
    to: "Рейкьявик",
    country: "Исландия 🇮🇸",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    duration: "6 ч 15 мин",
    classes: ["Эконом", "Бизнес-лайт", "Бизнес"],
    price: "от 31 900 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="flights" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Авиабилеты</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Рейсы по всему миру</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Вылеты из Москвы, СПб, Минска, Варшавы и Бреста — выбирайте маршрут, класс и место в самолёте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((flight, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={flight.image}
                  alt={flight.to}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full text-gray-800">
                  ✈️ {flight.from} → {flight.to}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full text-gray-700">
                  🕐 {flight.duration}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-1">{flight.country}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{flight.to}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {flight.classes.map((cls, j) => (
                    <span key={j} className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full">{cls}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-blue-700 font-bold text-base">{flight.price}</span>
                  <button className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">
                    Выбрать место
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Все направления
          </button>
        </div>
      </div>
    </section>
  )
}
