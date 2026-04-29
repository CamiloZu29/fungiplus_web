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
      
      {/* 1. NAV - MANTENIENDO EL BRANDING */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-[100] flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-yellow-500 font-bold text-2xl tracking-tighter">FungiPlus</h1>
        <a href="https://wa.me/573177013631" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            Comprar
          </button>
        </a>
      </nav>

      {/* 2. HERO SECTION - IMPACTO VISUAL */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-yellow-500 opacity-10 blur-[150px] rounded-full z-0"></div>
        
        <div className="fade-in mb-6 text-sm text-yellow-500 tracking-[0.4em] font-bold z-10">
          PREMIUM FUNCTIONAL COFFEE
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 fade-in z-10 tracking-tighter drop-shadow-2xl">
          Fungi<span className="text-yellow-400">Plus</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 fade-in z-10 leading-relaxed font-light">
          Enfócate más. Rinde mejor. <br className="hidden md:block" />
          <span className="text-white">Sin ansiedad. Sin bajones.</span>
        </p>

        <div className="relative z-10 mb-16 fade-in">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-yellow-400 opacity-20 blur-[110px] rounded-full"></div>
          </div>
          <img 
            src="/imagenes/Fungiplus.jpg"
            alt="FungiPlus Café"
            className="w-80 md:w-[500px] object-contain floating relative z-10 drop-shadow-[0_40px_80px_rgba(255,215,0,0.45)]"
          />
        </div>

        <a href="https://wa.me/573177013631" target="_blank" className="z-10">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-14 py-5 rounded-2xl text-xl font-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] uppercase tracking-tight">
            Lo quiero
          </button>
        </a>
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
                <p className="text-gray-400 leading-relaxed text-base">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIFESTYLE - ENFOQUE MINIMALISTA CON ICONOS RECUPERADOS */}
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

      {/* Checklist con los "likes" (iconos) recuperados y el texto nuevo */}
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
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in">
            <h3 className="text-green-500 font-black tracking-[0.3em] text-sm mb-6 uppercase italic">Social Proof</h3>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Ellos ya son <span className="text-yellow-400 italic">Plus</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "Valentina M.", j: "Diseñadora freelance", t: "Llevo 3 meses y la diferencia es increíble. Me concentro mejor y no tengo bajón de las 3pm.", i: "V", c: "bg-green-500/20 text-green-500" },
              { n: "Andrés R.", j: "Emprendedor digital", t: "Era escéptico, pero después de la primera semana noté más claridad mental. Mi productividad se duplicó.", i: "A", c: "bg-blue-500/20 text-blue-400" },
              { n: "Camila S.", j: "Nutricionista", t: "Valoro mucho los ingredientes naturales. Lo recomiendo a todos mis pacientes por su pureza y efectos.", i: "C", c: "bg-yellow-500/20 text-yellow-500" },
              { n: "Jorge P.", j: "Atleta amateur", t: "Lo tomo antes de entrenar y el rendimiento es notable. Sabe mucho mejor que otros cafés funcionales.", i: "J", c: "bg-purple-500/20 text-purple-400" }
            ].map((t, idx) => (
              <div key={idx} className="fade-in bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-zinc-900/60 transition-all group border-b-2 hover:border-b-yellow-500">
                <div>
                  <div className="text-yellow-500 text-sm mb-6 flex">★★★★★</div>
                  <p className="text-gray-300 text-base italic mb-8 leading-relaxed">"{t.t}"</p>
                </div>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black mr-4 border border-white/5 ${t.c}`}>{t.i}</div>
                  <div className="text-left">
                    <p className="text-white font-bold text-base">{t.n}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">{t.j}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PACKS DE VENTA */}
      <section className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full"></div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-20 text-center fade-in tracking-tighter italic">Elige tu Experiencia</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
          {[
            { title: "Plan Esencial", units: "1 Unidad", old: "$89.000", price: "$60.000", tag: "", color: "border-white/10" },
            { title: "Plan Bienestar", units: "2 Unidades", old: "$178.000", price: "$120.000", tag: "El favorito de la comunidad", color: "border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.2)] scale-105 z-20" },
            { title: "Plan Vitalidad", units: "3 Unidades", old: "$267.000", price: "$180.000", tag: "Mejor inversión", color: "border-white/10" }
          ].map((p, i) => (
            <div key={i} className={`fade-in relative p-12 rounded-[3rem] bg-zinc-900/60 backdrop-blur-md border-2 ${p.color} flex flex-col items-center text-center transition-transform hover:scale-[1.07] duration-500`}>
              {p.tag && <span className="absolute -top-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">{p.tag}</span>}
              <h3 className="text-3xl font-black mb-2 text-white">{p.title}</h3>
              <p className="text-gray-400 font-medium mb-8 italic">{p.units}</p>
              <p className="text-gray-500 line-through text-lg mb-2 font-bold">{p.old}</p>
              <p className="text-5xl font-black text-white mb-10 tracking-tighter">{p.price}</p>
              <a href="https://wa.me/573177013631" className="w-full mt-auto">
                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all uppercase tracking-widest ${p.tag ? 'bg-yellow-500 text-black hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Adquirir ahora
                </button>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center fade-in">
          <div className="inline-block px-8 py-3 bg-red-600/10 border border-red-600/30 rounded-2xl mb-6">
            <p className="text-red-500 font-black animate-pulse tracking-[0.2em] uppercase text-sm">⚠️ Pocas unidades disponibles con precio especial</p>
          </div>
          <p className="text-gray-400 text-lg flex items-center justify-center">
            <span className="mr-2">🚚</span> Pago contra entrega en toda Colombia
          </p>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center bg-black">
        <h4 className="text-yellow-500 font-bold text-2xl mb-4">FungiPlus</h4>
        <p className="text-gray-600 text-sm max-w-xs mx-auto mb-8 font-medium">Elevando el potencial humano a través de la micología funcional.</p>
        <p className="text-gray-800 text-xs font-bold uppercase tracking-widest">© 2026 High Performance Co. All rights reserved.</p>
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