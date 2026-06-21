const features = [
  {
    icon: "✈️",
    title: "Авиабилеты онлайн",
    description: "Вылеты из Москвы, СПб, Минска, Варшавы и Бреста. Выбирайте класс и место в самолёте.",
  },
  {
    icon: "🏨",
    title: "Отели с отзывами",
    description: "Реальные рейтинги, меню ресторанов и подробное описание каждого номера.",
  },
  {
    icon: "🔒",
    title: "Безопасное бронирование",
    description: "Защищённые платежи и подтверждение брони сразу после оплаты.",
  },
  {
    icon: "🎧",
    title: "Поддержка 24/7",
    description: "Круглосуточная помощь до, во время и после вашей поездки.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-blue-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">Почему мы</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Почему выбирают Horizon Travel</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Авиабилеты, отели и туры в одном сервисе — бронируйте всё за пару кликов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm text-blue-200 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
