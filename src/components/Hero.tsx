export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/stunning-tropical-beach-paradise-with-crystal-clea.jpg"
          alt="Путешествие"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-32">
        <p className="text-blue-300 font-semibold text-sm tracking-widest uppercase mb-4">Ваш надёжный сервис бронирования</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Авиабилеты, отели<br />
          <span className="text-blue-400">и туры в одном месте</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Вылеты из Москвы, Минска, Варшавы, Санкт-Петербурга и Бреста. Выбирайте класс, бронируйте место и отель — всё онлайн.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#flights" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">
            ✈️ Найти авиабилет
          </a>
          <a href="#hotels" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-base border border-white/40 transition-colors">
            🏨 Подобрать отель
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 pt-10 border-t border-white/20">
          <div>
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm text-gray-300 mt-1">Авиамаршрутов</div>
          </div>
          <div>
            <div className="text-4xl font-bold">10 000+</div>
            <div className="text-sm text-gray-300 mt-1">Отелей в каталоге</div>
          </div>
          <div>
            <div className="text-4xl font-bold">4.9 ★</div>
            <div className="text-sm text-gray-300 mt-1">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  )
}
