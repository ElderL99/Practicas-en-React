export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 bg-neutral-900 text-white">
      {/* Encabezado */}
      <div className="text-center space-y-2 mb-6">
        <p className="text-gray-300 font-semibold">Do you want to learn more?</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Let's Start</h1>
      </div>

      <hr className="border-gray-700 mb-6" />

      {/* Contacto */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 mb-6">
        <p className="text-purple-500 text-xl font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300">
          adan.lugo.barrientos@outlook.com
        </p>
        <p className="text-yellow-500 text-xl font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300">
          +52 7204754565
        </p>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center items-center gap-6">
        {/* Facebook */}
        <a href="https://www.facebook.com/AdanBarrientos0/" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500">
            <path d="M22.675 0h-21.35C.593..." />
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-pink-500">
            <path d="M12 2.2c3.2 0 3.6..." />
          </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com/ElderL99" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-gray-300">
            <path d="M12 0C5.37 0..." />
          </svg>
        </a>

        {/* Email */}
        <a href="mailto:adan.lugo.barrientos@outlook.com">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-yellow-400">
            <path d="M1.5 4.5h21a1.5..." />
          </svg>
        </a>

        {/* Teléfono */}
        <a href="tel:+527204754565">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-green-400">
            <path d="M6.62 10.79a15.053..." />
          </svg>
        </a>
      </div>
    </footer>
  );
}
