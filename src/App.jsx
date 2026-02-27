import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-sage-500 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="1.5" fill="white"/><circle cx="15" cy="9" r="1.5" fill="white"/></svg>
          </div>
          <span className="text-xl font-semibold tracking-tight text-sage-800">MindSpace</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-sage-700 hover:text-terra-500 transition-colors">{l.label}</a>
          ))}
          <a href="#booking" className="px-5 py-2.5 bg-terra-500 text-white text-sm font-semibold rounded-full hover:bg-terra-600 transition-colors shadow-md shadow-terra-500/20">
            Book Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-sage-700" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sage-100 px-6 pb-6 pt-2">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sage-700 font-medium border-b border-sage-50">{l.label}</a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="mt-4 block text-center px-5 py-3 bg-terra-500 text-white font-semibold rounded-full">Book Now</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream to-warm-100" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-sage-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terra-100/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            Now accepting new clients in Fitzroy
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-sage-900">
            Your mind<br />matters.{' '}
            <span className="text-terra-500">We're here<br />to help.</span>
          </h1>
          <p className="text-lg text-sage-600 max-w-lg leading-relaxed">
            Evidence-based psychology in a warm, welcoming space. Our team of experienced psychologists are here to support you through life's challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#booking" className="px-8 py-4 bg-terra-500 text-white font-semibold rounded-full hover:bg-terra-600 transition-all shadow-lg shadow-terra-500/25 hover:shadow-xl hover:shadow-terra-500/30 hover:-translate-y-0.5">
              Book a Free Consult
            </a>
            <a href="#about" className="px-8 py-4 bg-white text-sage-700 font-semibold rounded-full hover:bg-sage-50 transition-all border border-sage-200 shadow-sm">
              Learn More
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/80?img=${i+20}`} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover"/>
              ))}
            </div>
            <div className="text-sm text-sage-600">
              <span className="font-semibold text-sage-800">500+</span> clients supported this year
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sage-900/10 aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=1000&fit=crop&crop=faces" alt="Welcoming therapy space" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-sage-900/10 border border-sage-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-2xl">🧠</div>
              <div>
                <div className="font-semibold text-sage-800">Medicare Rebates</div>
                <div className="text-sm text-sage-500">With a GP referral</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PSYCHOLOGISTS = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Clinical Psychologist & Director',
    bio: 'With over 15 years of experience, Sarah specialises in anxiety, depression, and trauma recovery. She brings warmth and evidence-based expertise to every session.',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=500&fit=crop&crop=faces',
    specialties: ['Anxiety', 'Trauma', 'EMDR'],
  },
  {
    name: 'James Okafor',
    title: 'Registered Psychologist',
    bio: "James is passionate about helping young people and families navigate life's transitions. His approachable style makes therapy feel safe and grounded.",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces',
    specialties: ['Youth', 'ADHD', 'Family'],
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'Clinical Psychologist',
    bio: 'Priya specialises in relationship counselling and culturally sensitive therapy. She creates a space where every voice is heard and valued.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces',
    specialties: ['Relationships', 'Cultural', 'CBT'],
  },
]

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-terra-500 font-semibold text-sm uppercase tracking-widest">Our Team</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-sage-900 tracking-tight">
            People who genuinely care
          </h2>
          <p className="mt-6 text-sage-600 text-lg leading-relaxed">
            We're a small, dedicated team of psychologists who believe therapy should feel like a conversation, not an interrogation. Our Fitzroy practice is designed to feel like a living room, not a clinic.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PSYCHOLOGISTS.map(p => (
            <div key={p.name} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    {p.specialties.map(s => (
                      <span key={s} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-sage-700">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-sage-900">{p.name}</h3>
              <p className="text-terra-500 font-medium text-sm mt-1">{p.title}</p>
              <p className="text-sage-600 mt-3 leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  { icon: '💭', title: 'Anxiety & Depression', desc: 'Evidence-based approaches including CBT and ACT to help you manage overwhelming thoughts and regain a sense of calm.' },
  { icon: '🌿', title: 'Trauma & PTSD', desc: 'Gentle, trauma-informed therapy including EMDR to help you process difficult experiences at your own pace.' },
  { icon: '💕', title: 'Relationship Counselling', desc: 'Strengthen communication, rebuild trust, and deepen connection — whether with a partner, family member, or yourself.' },
  { icon: '🧒', title: 'Child & Adolescent', desc: 'Specialised support for young people navigating school pressures, social challenges, and emotional development.' },
  { icon: '🎯', title: 'ADHD Assessment', desc: 'Comprehensive ADHD assessments for children and adults, with practical strategies for thriving with neurodivergence.' },
]

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-terra-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-sage-900 tracking-tight">
            Support tailored to you
          </h2>
          <p className="mt-6 text-sage-600 text-lg leading-relaxed">
            Every person's journey is different. We offer a range of specialised services to meet you where you are.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className={`group bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-sage-900/5 transition-all duration-300 hover:-translate-y-1 border border-sage-100 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="w-14 h-14 rounded-2xl bg-sage-50 flex items-center justify-center text-2xl mb-6 group-hover:bg-sage-100 transition-colors">{s.icon}</div>
              <h3 className="text-xl font-bold text-sage-900 mb-3">{s.title}</h3>
              <p className="text-sage-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  { num: '01', title: 'Book a consultation', desc: 'Choose a time that works for you — online or in our Fitzroy rooms. Your first chat is free, no strings attached.', icon: '📅' },
  { num: '02', title: 'Meet your psychologist', desc: "We'll match you with the right psychologist for your needs. It's all about finding the right fit.", icon: '🤝' },
  { num: '03', title: 'Start your journey', desc: 'Begin working towards your goals with ongoing support, at a pace that feels comfortable for you.', icon: '🌱' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-terra-500 font-semibold text-sm uppercase tracking-widest">Getting Started</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-sage-900 tracking-tight">
            Three simple steps
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s, i) => (
            <div key={i} className="relative text-center">
              {i < 2 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-sage-200 z-0" />}
              <div className="relative z-10 w-24 h-24 rounded-full bg-sage-50 border-2 border-sage-200 flex items-center justify-center text-4xl mx-auto mb-6">{s.icon}</div>
              <span className="text-terra-500 font-bold text-sm">{s.num}</span>
              <h3 className="text-xl font-bold text-sage-900 mt-2 mb-3">{s.title}</h3>
              <p className="text-sage-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  { text: "Walking into MindSpace for the first time, I felt immediately at ease. Sarah helped me understand my anxiety in a way that finally made sense. Six months later, I feel like a different person.", name: 'Michelle T.', detail: 'Client since 2024' },
  { text: "After years of putting it off, I finally got my ADHD assessment here. James was incredibly thorough and compassionate. For the first time, I don't feel broken — I feel understood.", name: 'Daniel R.', detail: 'ADHD assessment client' },
  { text: "My partner and I were on the verge of separating. Priya helped us rebuild our communication from the ground up. We're not just surviving anymore — we're actually enjoying each other again.", name: 'Sam & Alex K.', detail: 'Couples counselling' },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-sage-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-terra-500 font-semibold text-sm uppercase tracking-widest">Client Stories</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-sage-900 tracking-tight">
            Real change, real people
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 text-warm-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="text-sage-700 leading-relaxed italic flex-1">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-sage-100">
                <div className="font-semibold text-sage-900">{t.name}</div>
                <div className="text-sm text-sage-500">{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingCTA() {
  return (
    <section id="booking" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-700 to-sage-900" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-terra-500/10 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sage-200 text-sm font-medium mb-8">
          Taking the first step is the hardest part
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to start feeling better?
        </h2>
        <p className="mt-6 text-sage-200 text-lg leading-relaxed max-w-xl mx-auto">
          Book a free 15-minute phone consultation to see if we're the right fit. No pressure, no commitment — just a friendly conversation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.hotdoc.com.au" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-terra-500 text-white font-semibold rounded-full hover:bg-terra-400 transition-all shadow-lg shadow-terra-500/30 text-lg">
            Book via HotDoc
          </a>
          <a href="tel:0390415500" className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 text-lg backdrop-blur-sm">
            Call (03) 9041 5500
          </a>
        </div>
        <p className="mt-8 text-sage-300 text-sm">Medicare rebates available with a GP Mental Health Treatment Plan</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-sage-900 text-sage-300 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-sage-800">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-sage-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="1.5" fill="white"/><circle cx="15" cy="9" r="1.5" fill="white"/></svg>
              </div>
              <span className="text-xl font-semibold text-white">MindSpace Psychology</span>
            </div>
            <p className="leading-relaxed max-w-sm">
              Evidence-based psychology in the heart of Fitzroy. We're here to help you navigate life's challenges with compassion and expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} className="block hover:text-terra-300 transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>Level 2, 123 Smith Street<br />Fitzroy VIC 3065</p>
              <p><a href="tel:0390415500" className="hover:text-terra-300 transition-colors">(03) 9041 5500</a></p>
              <p><a href="mailto:hello@mindspacepsychology.com.au" className="hover:text-terra-300 transition-colors">hello@mindspacepsychology.com.au</a></p>
              <div className="pt-2">
                <p className="text-sage-400 text-xs uppercase tracking-wider font-medium mb-1">Hours</p>
                <p>Mon–Fri: 8am–7pm</p>
                <p>Sat: 9am–2pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-sage-500">
          <p>© 2025 MindSpace Psychology. All rights reserved.</p>
          <p>Website by <a href="https://crateweb.com.au" target="_blank" rel="noopener noreferrer" className="text-terra-400 hover:text-terra-300 font-medium transition-colors">CrateWeb</a></p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </>
  )
}

export default App
