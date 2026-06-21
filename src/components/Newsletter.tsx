import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setEmail("")
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">Рассылка</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Получайте лучшие предложения</h2>
        <p className="text-gray-500 mb-8 text-lg">
          Подпишитесь и первыми узнавайте о скидках на авиабилеты и отели
        </p>

        {sent ? (
          <div className="bg-green-50 border border-green-200 text-green-700 font-semibold px-6 py-4 rounded-2xl">
            ✅ Вы подписаны! Ждите выгодных предложений.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-5 rounded-full border-2 border-gray-200 focus:border-blue-500 outline-none text-gray-800 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors shrink-0"
            >
              Подписаться
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-4">Подписываясь, вы соглашаетесь с политикой конфиденциальности</p>
      </div>
    </section>
  )
}
