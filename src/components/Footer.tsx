export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Horizon Travel</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Авиабилеты, отели и туры в одном сервисе. Путешествуйте с нами с 2010 года.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Сервисы</h4>
            <ul className="space-y-3 text-sm">
              {["Авиабилеты","Бронирование отелей","Выбор места в самолёте","Туры и пакеты"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Компания</h4>
            <ul className="space-y-3 text-sm">
              {["О нас","Вакансии","Блог","Партнёры"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Поддержка</h4>
            <ul className="space-y-3 text-sm">
              {["Центр помощи","Связаться с нами","Правила отмены","Политика конфиденциальности"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © 2025 Horizon Travel. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
