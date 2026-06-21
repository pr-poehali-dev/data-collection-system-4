const hotels = [
  {
    name: "Azure Palm Resort",
    location: "Дубай, ОАЭ",
    rating: 4.9,
    reviews: 1248,
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    room: "Делюкс с видом на море, 42 м²",
    menu: ["Шведский стол", "Авторская кухня", "Завтрак включён"],
    price: "8 900 ₽ / ночь",
  },
  {
    name: "Tropical Pearl Villas",
    location: "Бали, Индонезия",
    rating: 4.8,
    reviews: 986,
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    room: "Вилла с бассейном, 65 м²",
    menu: ["Балийская кухня", "Веган-меню", "All Inclusive"],
    price: "6 500 ₽ / ночь",
  },
  {
    name: "Santorini Sky Suites",
    location: "Санторини, Греция",
    rating: 5.0,
    reviews: 742,
    image: "/santorini-sunset.png",
    room: "Люкс с видом на закат, 38 м²",
    menu: ["Средиземноморская", "Морепродукты", "Завтрак включён"],
    price: "11 200 ₽ / ночь",
  },
]

export function PopularPackages() {
  return (
    <section id="hotels" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Отели</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Лучшие отели с рейтингами</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Реальные отзывы, описание номеров и меню ресторанов — бронируйте онлайн за пару кликов
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {hotels.map((hotel, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group border border-gray-100">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-gray-800">
                  ⭐ {hotel.rating} <span className="font-normal text-gray-500">({hotel.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-400 mb-1">📍 {hotel.location}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                <p className="text-sm text-gray-500 mb-4">🛏 {hotel.room}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {hotel.menu.map((item, j) => (
                    <span key={j} className="text-xs bg-orange-50 text-orange-700 font-medium px-3 py-1 rounded-full">
                      🍽 {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Стоимость</p>
                    <p className="text-xl font-bold text-blue-700">{hotel.price}</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
