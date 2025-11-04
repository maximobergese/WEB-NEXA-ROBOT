import React, { useState, useEffect } from 'react'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa'

export default function App() {
  // CAROUSEL
  const carouselImgs = [
    '/carrousel-0.png',
    '/carrousel-1.png',
    '/carrousel-2.png',
    '/carrousel-3.png'
  ]
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % carouselImgs.length), 4000)
    return () => clearInterval(t)
  }, [])

  // NAVEGACIÓN
  const goTo = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBuy = () => alert('Simulación de compra: próximamente disponible 🛒')

  // BOTÓN SUBIR
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // MODAL INFO
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)


  return (
    <div className="app-root">
      {/* HEADER */}
      <header className="site-header">
        <div className="brand" onClick={() => goTo('inicio')}>
          <img src="/logo.jpeg" alt="Nexa logo" className="logo"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/64?text=N' }} />
          <div className="brand-text">
          </div>
        </div>
        <nav className="nav">
          <button onClick={() => goTo('inicio')}>Inicio</button>
          <button onClick={() => goTo('quienes')}>¿Quiénes somos?</button>
          <button onClick={() => goTo('contacto')}>Contacto</button>
          <button onClick={() => goTo('comprar')}>Comprar</button>
          {/* <button className="btn-login">Iniciar Sesión</button> */}
        </nav>
      </header>

      {/* INICIO */}
      <main>
        <section id="inicio" className="hero">
          <div className="hero-left">
            <h2>Conocé a Nexa — Tecnología que te entiende</h2>
            <p>
              <strong>Nexa</strong> es el resultado de un trabajo en conjunto que integra software, hardware, marketing y gestión administrativa.
              <br />
              El resultado es un robot inteligente que puede ser controlado desde un panel digital, pensado para acompañar tareas personales y simplificar la vida cotidiana con tecnología colaborativa.
            </p>
            <div className="hero-cta">
              <button onClick={() => goTo('comprar')} className="btn-primary">Comprar</button>
              <button onClick={() => goTo('contacto')} className="btn-outline">Contactanos</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="carousel">
              {carouselImgs.map((src, i) => (
                <img key={i} src={src} alt={`nexa-${i}`} className={i === idx ? 'active' : ''} />
              ))}
              <div className="dots">
                {carouselImgs.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} className={i === idx ? 'dot active' : 'dot'} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUIENES SOMOS */}
        <section id="quienes" className="quienes-somos">
          <h3 className='titulo-seccion'>¿Quiénes somos?</h3>
          <p className="intro-text">
            Somos un equipo multidisciplinario de profesionales en software, sistemas, marketing y administración conectados por una misma meta que es crear robots inteligentes que conecten con lo humano, transformando la innovación en una experiencia cercana, útil y emocional. Uno de nuestros propósitos es acercar el futuro al presente a través de soluciones tecnológicas accesibles, funcionales y con diseño empático y creativo.
            Creemos que la verdadera evolución ocurre cuando la tecnología no reemplaza, sino que acompaña y mejora la vida cotidiana, ayudando a las personas a optimizar su tiempo, simplificar sus tareas y disfrutar más de lo que realmente importa, transformando la innovación en una experiencia cercana, útil y emocional. Cada desarrollo de NEXA combina precisión técnica, diseño moderno y calidez emocional, reflejando nuestra convicción de que la innovación no tiene que ser fría, sino inteligente, cercana y viva.
            Visión
            Queremos ser reconocidos como la primera marca que combina innovación tecnológica con humanización de la robótica, logrando que cada persona pueda tener un asistente propio.
          </p>

          <div className="who-container">
            <div className="who-column">
              <h4>Analistas en Sistemas</h4>
              <ul>
                <li>Bergese, Máximo</li>
                <li>Pedraza, Virginia</li>
                <li>Gómez Primo, Julián</li>
                <li>Costamagna, Lucas</li>
              </ul>
            </div>

            <div className="who-column">
              <h4>Marketing</h4>
              <ul>
                <li>Lupidi, Emilia</li>
              </ul>
            </div>

            <div className="who-column">
              <h4>Gestión Administrativa</h4>
              <ul>
                <li>Nuñez, Bárbara</li>
                <li>Caraballo, Juliana</li>
                <li>Cattaneo Core, Francina</li>
              </ul>
            </div>

            <div className="who-column">
              <h4>Hardware</h4>
              <ul>
                <li>Fuentes, Matías</li>
                <li>Ramirez, Bautista</li>
                <li>Bonino, Tomás</li>
              </ul>
            </div>
          </div>
        </section>


        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <h3 className='titulo-seccion'>Contacto</h3>
          <br />
          <div className="contact-grid">
            <div className="contact-info">
              <a href="https://www.instagram.com/nexarobotica_/" target="_blank" rel="noreferrer" className="social-link">
                <FaInstagram /> nexarobotica_
              </a>
              <a href="https://wa.me/543534228757?text=Hola!%20Quisiera%20más%20información%20sobre%20el%20robot%20Nexa." target="_blank" rel="noreferrer" className="social-link">
                <FaWhatsapp /> 3534228757
              </a>
              <a href="mailto:nexarobotica@gmail.com" className="social-link">
                <FaEnvelope /> nexarobotica@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* COMPRAR */}
        <section id="comprar" className="section shop">
          <h3 className='titulo-seccion'>Comprar Nexa</h3>
          <br />
          <div className="product-grid">
            <div className="product">
              <img src="/robot.jpg" alt="robot" />
              <h4>Nexa Robot</h4>
              <p><strong>$150000</strong></p>
              <p>Robot colaborativo de desarrollo intercarreras, controlable desde un dashboard.</p>
              <div className="product-buttons">
                <a className="btn-comprar" href="https://wa.me/543534228757?text=Hola!%20Quisiera%20información%20para%20la%20compra%20del%20robot%20Nexa.">Comprar</a>
                <br />
                <br />
                <button className="btn-outline" onClick={openModal}>Más información</button>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-socials">
            <a href="https://www.instagram.com/nexarobotica_/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/543534228757?text=Hola!%20Quisiera%20más%20información%20sobre%20el%20robot%20Nexa." target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="mailto:nexarobotica@gmail.com"><FaEnvelope /></a>
          </div>
          <p className='instituto'>© {new Date().getFullYear()} Nexa — Instituto Leibnitz</p>
        </div>
      </footer>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Ficha técnica del Nexa Robot</h3>
            <ul>
              <li><strong>Altura:</strong> 45 cm</li>
              <li><strong>Peso:</strong> 2.8 kg</li>
              <li><strong>Microcontrolador:</strong> ESP32 Dual Core 240MHz</li>
              <li><strong>Conectividad:</strong> WiFi + Bluetooth BLE</li>
              <li><strong>Sensores:</strong> Ultrasonido, Temperatura, Acelerómetro, LDR</li>
              <li><strong>Batería:</strong> 7.4V 2200mAh (autonomía 2h)</li>
              <li><strong>Interfaz:</strong> Dashboard web con control remoto y gráficos en tiempo real</li>
              <li><strong>Material del chasis:</strong> PLA impreso en 3D</li>
            </ul>
            <button className="btn-cerrar" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}


      {/* BOTÓN SUBIR */}
      {showScroll && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}
