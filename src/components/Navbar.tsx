import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-200" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-blue-700 tracking-tight">Horizon Travel</a>

          <div className="hidden md:flex items-center gap-10">
            {[["#flights","Авиабилеты"],["#hotels","Отели"],["#why","Преимущества"],["#contact","Контакты"]].map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">{label}</a>
            ))}
          </div>

          <a href="#flights" className="hidden md:inline-flex items-center bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors">
            Забронировать
          </a>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-700" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {[["#flights","Авиабилеты"],["#hotels","Отели"],["#why","Преимущества"],["#contact","Контакты"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block text-base font-medium text-gray-700 hover:text-blue-700">{label}</a>
          ))}
          <a href="#flights" className="block text-center bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors">
            Забронировать
          </a>
        </div>
      )}
    </nav>
  )
}
