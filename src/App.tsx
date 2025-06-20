import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('habitaciones')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // URLs de imágenes desde Unsplash
  const imageUrls = {
    hotelExterior: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    habitacionLujo: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    piscina: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    restaurante: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }

  const promociones = [
    {
      id: 1,
      titulo: "Escapada Romántica",
      descripcion: "2 noches en suite de lujo con cena gourmet y spa para dos.",
      precio: 299,
      precioAnterior: 450,
      imagen: imageUrls.habitacionLujo
    },
    {
      id: 2,
      titulo: "Paquete Familiar",
      descripcion: "3 noches en habitación familiar con acceso ilimitado a piscina y actividades para niños.",
      precio: 399,
      precioAnterior: 600,
      imagen: imageUrls.piscina
    },
    {
      id: 3,
      titulo: "Todo Incluido",
      descripcion: "5 noches con todas las comidas, bebidas y actividades incluidas.",
      precio: 799,
      precioAnterior: 1200,
      imagen: imageUrls.restaurante
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/9922/9922103.png" 
    alt="Hotel Icon"
    className="h-8 w-auto" />
            <h1 className="text-2xl font-bold text-blue-800">Grand Paradise Hotel</h1>
            <span className="ml-2 px-2 py-1 bg-yellow-400 text-xs font-semibold rounded-full">PROMOCIONES</span>
          </div>
          
          {/* Menú para móviles */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          
          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-800 font-medium hover:text-yellow-500 transition duration-300">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Habitaciones</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Servicios</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Promociones</a>
            <a href="#" className="text-gray-600 hover:text-yellow-500 transition duration-300">Contacto</a>
          </nav>
        </div>
        
        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-slideDown">
            <a href="#" className="block py-2 text-blue-800 font-medium">Inicio</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300">Habitaciones</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300">Servicios</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300">Promociones</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300">Contacto</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
    <section className="relative h-96 overflow-hidden">
  
  <video
  className="w-full h-full object-cover object-center"
  src="/videos/hoteles.mp4"
  autoPlay
  loop
  muted
  playsInline
/>

<div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
        Descubre el Lujo sin Igual
      </h2>
      <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
        Disfruta de nuestras exclusivas promociones en este paraíso tropical
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
        Ver Promociones
      </button>
    </div>
  </div>
</section>


      {/* Promociones */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Ofertas Exclusivas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promociones.map((promo) => (
              <div 
                key={promo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={promo.imagen} 
                    alt={promo.titulo} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{Math.round((1 - promo.precio/promo.precioAnterior)*100)}%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.titulo}</h3>
                  <p className="text-gray-600 mb-4">{promo.descripcion}</p>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-blue-800">${promo.precio}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${promo.precioAnterior}</span>
                    <span className="ml-auto text-sm text-gray-500">/noche</span>
                  </div>
                  <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition duration-300">
                    Reservar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nuestros Servicios</h2>
          
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 h-full transform hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Habitaciones de Lujo</h3>
                <p className="text-gray-600">Amplias suites con vistas al mar, comodidades modernas y servicio personalizado.</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 h-full transform hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Eventos Especiales</h3>
                <p className="text-gray-600">Organizamos bodas, reuniones corporativas y eventos memorables.</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 h-full transform hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Spa & Bienestar</h3>
                <p className="text-gray-600">Relájate con nuestros tratamientos de spa de clase mundial y gimnasio equipado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Galería</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={imageUrls.habitacionLujo} 
                alt="Habitación de lujo" 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-medium">Habitaciones Premium</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={imageUrls.piscina} 
                alt="Piscina del hotel" 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-medium">Piscina Infinity</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={imageUrls.restaurante} 
                alt="Restaurante del hotel" 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-medium">Gastronomía Exquisita</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg sm:col-span-2">
              <img 
                src={imageUrls.spa} 
                alt="Spa del hotel" 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-medium">Spa Relajante</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={imageUrls.hotelExterior} 
                alt="Vista del hotel" 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-medium">Vistas Panorámicas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para tu escapada perfecta?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Reserva ahora y obtén un 10% de descuento adicional con el código: PARADISE10</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Grand Paradise Hotel</h3>
              <p className="text-gray-400">El lugar perfecto para tus vacaciones soñadas con el mejor servicio y comodidades de lujo.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Habitaciones</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Servicios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Promociones</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Av. del Paraíso 123, Playa Esmeralda
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +1 234 567 890
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  info@grandparadise.com
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Suscríbete para recibir nuestras mejores ofertas.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 rounded-r-lg transition duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Grand Paradise Hotel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App