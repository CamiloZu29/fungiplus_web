import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden min-h-screen">
      
      {/* 1. NAV - ARREGLADO CON Z-INDEX Y POSICIONAMIENTO CORRECTO */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-[100] flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-yellow-500 font-bold text-2xl tracking-tighter">FungiPlus</h1>
        <a href="https://wa.me/573177013631" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            Comprar
          </button>
        </a>
      </nav>

{/* HERO - VERSIÓN TOP PREMIUM */}
<section className="min-h-screen flex flex-col justify-between bg-zinc-950 relative overflow-hidden">
  {/* Background Glows */}
  <div className="absolute inset-0 bg-[radial-gradient(at_center,#eab30815_0%,transparent_50%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#eab30808_0%,transparent_70%)]"></div>

  {/* Contenedor con mi-auto para centrar todo el bloque de texto e imagen verticalmente */}
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 py-12 lg:py-0 my-auto w-full">
    
    {/* Contenido Izquierdo */}
    <div className="text-center lg:text-left order-2 lg:order-1">
      <div className="inline-flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md border border-yellow-500/40 px-7 py-3 rounded-3xl text-yellow-400 text-sm font-semibold mb-8">
        🍄 PREMIUM FUNCTIONAL COFFEE
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-white mb-6">
        Energía real<br />
        <span className="text-yellow-400">sin ansiedad ni bajones</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 max-w-lg mx-auto lg:mx-0 mb-10">
        Café premium instantáneo con <span className="text-white font-medium">Melena De León y Ganoderma</span>. 
        Enfoque profundo, energía sostenida y mejor ánimo durante todo el día.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
        <a 
          href="https://wa.me/573177013631?text=Hola! Quiero probar FungiPlus 🌱" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-2xl px-14 py-7 rounded-3xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-yellow-500/40">
            Quiero probarlo ahora
          </button>
        </a>

        <a href="#packs" className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white font-semibold text-xl px-10 py-7 rounded-3xl transition-all duration-300">
          Ver planes y precios
        </a>
      </div>

      {/* Trust */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4 text-sm text-gray-400">
        <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Envío gratis desde 2 unidades</div>
        <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Pago contra entrega</div>
        <div className="flex items-center gap-2"><span className="text-green-400">✔</span> Despacho inmediato a todo el país</div>
      </div>
    </div>

{/* Imagen Derecha - PRUEBA */}
<div className="flex justify-center lg:justify-end order-1 lg:order-2">
  <div className="relative">
    <img 
      src="/imagenes/Fungiplus3.jpeg" 
      alt="Café FungiPlus con hongos adaptógenos" 
      className="w-full max-w-[520px] lg:max-w-[560px] drop-shadow-2xl rounded-3xl"
    />
    <div className="absolute -inset-10 bg-yellow-400/10 blur-3xl -z-10 rounded-[4rem]"></div>
  </div>
</div>
</div>

  {/* Scroll Indicator Premium Corregido */}
  {/* Cambiado a relative y mt-auto mb-8 para que fluyas debajo del contenido sin pisarlo */}
  <div className="relative mt-auto mb-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center z-20">
    <p className="text-yellow-400/70 text-xs tracking-[4px] mb-3">DESLIZA PARA DESCUBRIR</p>
    <div className="relative">
      <div className="w-px h-14 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_#facc15] animate-ping"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
    </div>
  </div>
</section>



 {/* 3. BENEFICIOS */}
<section className="py-32 px-6 bg-black relative overflow-hidden">
  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600/10 blur-[130px] rounded-full"></div>
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-24 fade-in">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Lo que <span className="text-yellow-400">FungiPlus</span> <br/> hace por ti
      </h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: "⚡", title: "Energía sostenida", desc: "Sin picos de ansiedad ni bajones repentinos." },
        { icon: "🧠", title: "Enfoque total", desc: "Claridad mental constante para tus tareas más difíciles." },
        { icon: "🛡️", title: "Inmunidad", desc: "Hongos adaptógenos que refuerzan tus defensas naturales." },
        { icon: "🌿", title: "100% Natural", desc: "Pureza absoluta: sin químicos, sin azúcar, sin rellenos." }
      ].map((b, i) => (
        <div key={i} className="fade-in group p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/10 hover:border-yellow-500/40 transition-all duration-500 backdrop-blur-sm">
          <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">{b.icon}</div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">{b.title}</h3>
          {/* CAMBIO AQUÍ: de text-gray-400 a text-zinc-300 */}
          <p className="text-zinc-300 leading-relaxed text-base">{b.desc}</p> 
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. LIFESTYLE */}
      <section className="py-32 px-6 bg-zinc-950/50 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 order-2 md:order-1 fade-in">
            <span className="text-yellow-500 font-bold tracking-[0.4em] text-xs uppercase mb-6 block text-left">
              Evolución en cada sorbo
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter text-left">
              Evolución en <br />
              <span className="text-yellow-400 italic">cada sorbo.</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mb-10 leading-relaxed text-left font-light">
              El café convencional es cosa del pasado. Bienvenido a la era del <span className="text-white font-medium">café funcional</span>: energía limpia, mente clara y una resistencia mental inquebrantable.
            </p>

            <div className="space-y-6 mb-14">
              {[
                "La sinergia perfecta de adaptógenos premium.",
                "Claridad mental instantánea y duradera.",
                "Origen ético y pureza certificada."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 mr-4 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-zinc-900 border-l-8 border-green-500 rounded-2xl shadow-2xl">
              <p className="text-white font-bold text-xl mb-2 text-left tracking-tight">Garantía Real de 30 Días</p>
              <p className="text-gray-400 text-left leading-snug font-light italic">
                "Si no experimentas una evolución real en tu bienestar y enfoque, te devolvemos tu inversión sin preguntas."
              </p>
            </div>
          </div>

          <div className="relative order-1 md:order-2 group fade-in">
            <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl">
              <img 
                src="/imagenes/fungiplus2.jpeg" 
                alt="Evolución FungiPlus" 
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-[3s] ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-left">
                <p className="text-white font-light text-3xl tracking-widest uppercase opacity-80">
                  Pureza <span className="font-black italic text-yellow-400">Superior</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 5. TESTIMONIOS */}
<section className="py-32 px-6 bg-black relative overflow-hidden">
  {/* Destello sutil de fondo para dar atmósfera */}
  <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-green-900/10 blur-[150px] rounded-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20 fade-in">
      <h3 className="text-green-500 font-black tracking-[0.3em] text-sm mb-6 uppercase italic">Social Proof</h3>
      <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
        Ellos ya son <span className="text-yellow-400 italic">Plus</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          n: "Valentina M.", 
          j: "Diseñadora Freelance", 
          t: "Llevo 3 meses y la diferencia es increíble. Me concentro mejor y no tengo bajón de las 3pm.", 
          img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
        },
        { 
          n: "Andrés R.", 
          j: "Emprendedor Digital", 
          t: "Era escéptico, pero después de la primera semana noté más claridad mental. Mi productividad se duplicó.", 
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" 
        },
        { 
          n: "Camila S.", 
          j: "Nutricionista / Reg. 4821", 
          t: "Valoro mucho los ingredientes naturales. Lo recomiendo a todos mis pacientes por su pureza y efectos.", 
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" 
        },
        { 
          n: "Jorge P.", 
          j: "Atleta Amateur", 
          t: "Lo tomo antes de entrenar y el rendimiento es notable. Sabe mucho mejor que otros cafés funcionales.", 
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" 
        }
      ].map((t, idx) => (
        <div key={idx} className="fade-in bg-zinc-900/30 border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-zinc-900/60 transition-all duration-300 group border-b-2 border-transparent hover:border-b-yellow-500 backdrop-blur-sm shadow-xl">
          <div>
            {/* Estrellas más profesionales y estilizadas */}
            <div className="text-yellow-400 text-sm mb-6 flex gap-1 tracking-wider drop-shadow-[0_2px_8px_rgba(234,179,8,0.3)]">
              ★★★★★
            </div>
            {/* Texto con mejor contraste (zinc-200) */}
            <p className="text-zinc-200 text-base italic mb-8 leading-relaxed font-medium">
              "{t.t}"
            </p>
          </div>
          
          <div className="flex items-center pt-4 border-t border-white/5">
            {/* Imagen Real del Cliente */}
            <img 
              src={t.img} 
              alt={t.n} 
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/10 group-hover:border-yellow-500/50 transition-colors duration-300"
            />
            <div className="text-left">
              <p className="text-white font-bold text-base tracking-wide">{t.n}</p>
              {/* Cargo con gris más claro (zinc-400) para lectura móvil */}
              <p className="text-zinc-400 text-xs uppercase tracking-widest mt-0.5">{t.j}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* 6. PACKS DE VENTA - Versión TOP */}
<section id="packs" className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/5 blur-[140px] rounded-full"></div>
  
  <h2 className="text-5xl md:text-7xl font-black text-white mb-20 text-center tracking-tighter">
    Quiero energía sin ansiedad
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
    {[
      { 
        name: "Plan Esencial",
        title: "Quiero probarlo", 
        buttonText: "Pedir 1 unidad",
        units: "1 Unidad", 
        old: "$89.000", 
        price: "$60.000", 
        tag: "", 
        color: "border-white/10",
        envioGratis: false 
      },
      { 
        name: "Plan Bienestar",
        title: "Lo quiero", 
        buttonText: "Pedir 2 unidades",
        units: "2 Unidades", 
        old: "$178.000", 
        price: "$120.000", 
        tag: "El favorito de la comunidad", 
        color: "border-yellow-400 shadow-[0_0_60px_rgba(234,179,8,0.35)] scale-105 z-20",
        envioGratis: true 
      },
      { 
        name: "Plan Vitalidad",
        title: "Quiero las 3 unidades", 
        buttonText: "Pedir 3 unidades",
        units: "3 Unidades", 
        old: "$267.000", 
        price: "$180.000", 
        tag: "Mejor inversión", 
        color: "border-white/10",
        envioGratis: true 
      }
    ].map((p, i) => {
      const message = `Hola! Quiero el ${p.name} (${p.units}) de FungiPlus 🌱`;
      const whatsappLink = `https://wa.me/573177013631?text=${encodeURIComponent(message)}`;

      return (
        <div 
          key={i} 
          className={`relative p-12 rounded-[3rem] bg-zinc-900/70 backdrop-blur-md border-2 ${p.color} flex flex-col items-center text-center transition-all hover:scale-[1.06] duration-500`}
        >
          {p.tag && (
            <span className="absolute -top-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
              {p.tag}
            </span>
          )}

          <h3 className="text-3xl font-black mb-2 text-white">{p.title}</h3>
          <p className="text-yellow-400 text-2xl font-medium mb-6">{p.name}</p>
          
          <p className="text-gray-400 mb-8 italic">{p.units}</p>
          
          <p className="text-gray-500 line-through text-lg mb-1">{p.old}</p>
          <p className="text-5xl font-black text-white mb-7 tracking-tighter">{p.price}</p>

          {p.envioGratis ? (
            <div className="mb-8">
              <span className="bg-green-500/20 text-green-400 px-6 py-1.5 rounded-full text-sm font-semibold">
                🚚 ENVÍO GRATIS
              </span>
            </div>
          ) : (
            <div className="mb-8 text-gray-500 text-sm">🚚 Envío: +$10.000</div>
          )}

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto"
          >
            <button className="w-full py-6 rounded-3xl font-bold text-lg bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-black transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              {p.buttonText}
            </button>
          </a>
        </div>
      );
    })}
  </div>

 {/* Información final */}
<div className="mt-20 text-center">
  {/* Subimos la opacidad del fondo a 25%, el borde a 50%, y pasamos el pulse aquí */}
  <div className="inline-block px-8 py-3 bg-red-950/25 border border-red-700/50 rounded-2xl mb-6 animate-pulse">
    {/* Dejamos el texto fijo para que sea más fácil de leer mientras el recuadro parpadea sutilmente */}
    <p className="text-red-400 font-black tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-2">
      <span>⚠️</span> Pocas unidades disponibles con precio especial
    </p>
  </div>

    
    <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
      <span>💳</span> Pago por Nequi o Daviplata
      <span className="mx-2">•</span>
      <span>📦</span> Envíos a toda Colombia 
    </p>
    
    <p className="text-yellow-500/80 text-sm mt-3">
      🔥 Medellín y Bogotá: entrega en 24h | Otras ciudades: 3-5 días
    </p>
  </div>
</section>

{/* FOOTER PREMIUM */}
<footer className="bg-black py-20 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
      
      {/* Logo y Descripción */}
      <div className="text-center md:text-left">
        <h3 className="text-4xl font-black text-white tracking-tighter">FungiPlus</h3>
        <p className="text-gray-500 mt-3 max-w-xs">
          Café funcional premium con hongos adaptógenos.<br />
          Energía real sin ansiedad.
        </p>
      </div>

      {/* Redes Sociales con SVG */}
      <div className="flex gap-6">
        
        {/* Instagram */}
        <a 
          href="https://instagram.com/god_orionn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 text-white rounded-2xl transition-all hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* TikTok */}
        <a 
          href="https://tiktok.com/@god.orion8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-black text-white rounded-2xl transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 2.895-2.895c.402 0 .79.082 1.143.232V9.3a6.73 6.73 0 0 0-5.134 6.584c0 3.72 3.01 6.73 6.73 6.73 3.72 0 6.73-3.01 6.73-6.73V8.3c1.48.85 3.12 1.32 4.85 1.32v-3.3c-1.3 0-2.52-.4-3.55-1.114z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a 
          href="https://www.facebook.com/people/God-Orion/100064489494316/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-[#1877F2] text-white rounded-2xl transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/573177013631" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-12 h-12 flex items-center justify-center bg-zinc-900 hover:bg-[#25D366] text-white rounded-2xl transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.917-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.48 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.48 2 2 6.59 2 12.25c0 2.85 1.15 5.45 3 7.35L4 22l2.8-1.35c1.85.95 3.95 1.5 6.2 1.5 5.52 0 10-4.59 10-10.25S17.52 2 12 2z"/>
          </svg>
        </a>
      </div>
    </div>

    <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-white/10">
      © 2026 FungiPlus • Todos los derechos reservados
    </div>
  </div>
</footer>

      {/* ENGINE DE ANIMACIONES */}
      <style>{`
        .fade-in { opacity: 0; transform: translateY(80px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .floating { animation: float 5s ease-in-out infinite; }
        @keyframes float { 
          0%, 100% { transform: translateY(0px) rotate(0deg); } 
          50% { transform: translateY(-30px) rotate(2deg); } 
        }
      `}</style>
    </div>
  );
}

export default App;