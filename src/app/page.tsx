 "use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
const [chat, setChat] = useState([
  "Welcome to Omnisyn Salon ✨",
]);
const whatsappMessage = `https://wa.me/254748734197?text=Hi SalonFlow, I want to book an appointment.%0A%0AName: ${name}%0AService: ${service}%0APreferred Date: ${date}%0APreferred Time: ${time}`;
  return (
    <main className="min-h-screen bg-black text-white">
<nav className="w-full flex items-center justify-between px-6 py-4 border-b border-zinc-800">
  <h1 className="text-2xl font-bold text-green-500">
    SalonFlow
  </h1>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl"
>
  ☰
</button>
  <div
  className={`${menuOpen ? "flex" : "hidden"} md:flex gap-4 text-sm`}
>
    menuOpen ? "flex" : "hidden"
   md:flex gap-4 text-sm`
    <a href="#features" className="hover:text-green-400">
      Features
    </a>

    <a href="#pricing" className="hover:text-green-400">
      Pricing
    </a>

    <a href="#testimonials" className="hover:text-green-400">
      Reviews
    </a>
  </div>
</nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl md:text-7xl font-bold max-w-4xl leading-tight">
          AI WhatsApp Booking
          For Modern Salons
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-2xl">
          Automate salon bookings, reminders, and customer replies directly through WhatsApp.
        </p>

        <div className="flex gap-4 mt-10">
<p className="text-gray-400 mb-4">
  Selected Appointment:
  <br />
  {name} — {service} — {date} at {time}
</p>


{showPopup && (
  <div className="bg-green-500 text-white p-4 rounded-xl mb-4 text-center font-semibold">
    Redirecting to WhatsApp...
  </div>
)}

<a
  href={whatsappMessage}
        
  onClick={() => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }}
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Start Booking
          </a>

          <button className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-2xl text-lg">
            Watch Demo
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="px-8 pb-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Instant Booking
            </h3>

            <p className="text-gray-400">
              Customers can schedule appointments instantly from WhatsApp.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Automated Replies
            </h3>

            <p className="text-gray-400">
              AI responds automatically to customer questions and bookings.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">
              Appointment Reminders
            </h3>

            <p className="text-gray-400">
              Reduce missed appointments with automatic reminders.
            </p>
          </div>

        </div>

      </section>
<section id="pricing" className="w-full max-w-5xl mt-20">
  <h2 className="text-4xl font-bold text-center mb-10">
    Pricing
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-zinc-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Starter</h3>

      <p className="text-5xl font-bold mb-4">
        Ksh 3,000
      </p>

      <ul className="text-gray-400 space-y-2 mb-6">
        <li>✓ WhatsApp Booking</li>
        <li>✓ Auto Replies</li>
        <li>✓ Setup Included</li>
      </ul>

      <a
        href="https://wa.me/254748734197?text=Hello%20I%20want%20the%20Starter%20plan"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold inline-block"
      >
        Choose Plan
      </a>
    </div>

    <div className="bg-green-600 p-8 rounded-2xl scale-105">
      <h3 className="text-2xl font-bold mb-4">Business</h3>

      <p className="text-5xl font-bold mb-4">
        Ksh 7,000
      </p>

      <ul className="space-y-2 mb-6">
        <li>✓ Everything in Starter</li>
        <li>✓ Booking Reminders</li>
        <li>✓ Customer Support Bot</li>
      </ul>

      <a
        href="https://wa.me/254748734197?text=Hello%20I%20want%20the%20Business%20plan"
        target="_blank"
        className="bg-black px-6 py-3 rounded-xl font-semibold inline-block"
      >
        Choose Plan
      </a>
    </div>

    <div className="bg-zinc-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Premium</h3>

      <p className="text-5xl font-bold mb-4">
        Ksh 15,000
      </p>

      <ul className="text-gray-400 space-y-2 mb-6">
        <li>✓ Full Automation</li>
        <li>✓ AI Chatbot</li>
        <li>✓ Priority Support</li>
      </ul>

      <a
        href="https://wa.me/254748734197?text=Hello%20I%20want%20the%20Premium%20plan"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold inline-block"
      >
        Choose Plan
      </a>
    </div>

  </div>
</section><section className="px-6 md:px-12 py-24 bg-black">
  <h2 className="text-4xl font-bold text-center mb-12">
    Book Appointment
  </h2>

  <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-3xl space-y-6">

    <input
      type="text"
      placeholder="Your Name"
value={name}
onChange={(e) => setName(e.target.value)}
className="w-full p-4 rounded-xl bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-green-500"

    />

    <input
      type="text" 
 placeholder="Service Needed"
    value={service}
    onChange={(e) => setService(e.target.value)}
      className="w-full p-4 rounded-xl bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <input
      type="date"
        value={date}
onChange={(e) => setDate(e.target.value)}
      className="w-full p-4 rounded-xl bg-zinc-800 text-whitefocus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <input
      type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="w-full p-4 rounded-xl bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    <a
      href={`https://wa.me/254748734197?text=Hello, my name is ${name}. I want to book ${service} on ${date} at ${time}.`}
      target="_blank"
      className="block text-center bg-green-500 hover:bg-green-600 transition py-4 rounded-xl text-xl font-bold"
    >
      Confirm Booking
    </a>

  </div>
</section><section className="w-full max-w-5xl mt-20">
  <h2 className="text-4xl font-bold text-center mb-10">
    What Salon Owners Say
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-zinc-900 p-6 rounded-2xl">
      <p className="text-gray-300 mb-4">
        “We started getting more bookings directly from WhatsApp within the first week.”
      </p>

      <h3 className="font-bold">
        Sarah Beauty Spa
      </h3>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl">
      <p className="text-gray-300 mb-4">
        “Clients now book automatically without calling us all day.”
      </p>

      <h3 className="font-bold">
        Nairobi Glow Salon
      </h3>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl">
      <p className="text-gray-300 mb-4">
        “The automated replies helped us stop missing customers.”
      </p>

      <h3 className="font-bold">
        Elegant Cuts
      </h3>
    </div>

  </div>
</section><section className="w-full max-w-4xl mt-24 mb-20 text-center bg-green-600 rounded-3xl p-12">

  <h2 className="text-5xl font-bold mb-6">
    Ready to Get More Salon Bookings?
  </h2>

  <p className="text-xl mb-8">
    Automate your WhatsApp bookings and grow your salon faster.
  </p>

  <a
    href="https://wa.me/254748734197?text=Hi%20SalonFlow,%20I%20want%20to%20book%20an%20appointment.%0A%0AName:%20%0AService:%20%0APreferred%20Date:%20%0APreferred%20Time:"
    target="_blank"
    className="bg-black px-10 py-5 rounded-2xl text-xl font-bold inline-block hover:scale-105 transition"
  >
    Get Started Now
  </a>

</section>
<section className="w-full max-w-6xl mt-24">

  <h2 className="text-4xl font-bold text-center mb-14">
    Pricing
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800">

      <h3 className="text-3xl font-bold mb-4">
        Starter
      </h3>

      <p className="text-5xl font-bold mb-6">
        KSh 3,000
      </p>

      <ul className="space-y-4 text-gray-400">
        <li>• Booking Website</li>
        <li>• WhatsApp Integration</li>
        <li>• Mobile Friendly Design</li>
      </ul>

    </div>

    <div className="bg-green-500 text-black p-10 rounded-3xl">

      <h3 className="text-3xl font-bold mb-4">
        Premium AI
      </h3>

      <p className="text-5xl font-bold mb-6">
        KSh 8,000
      </p>

      <ul className="space-y-4 font-medium">
        <li>• AI Receptionist</li>
        <li>• Smart Booking Flow</li>
        <li>• WhatsApp Automation</li>
        <li>• Dashboard Access</li>
      </ul>

    </div>

  </div>

</section>
<section className="w-full max-w-6xl mt-24">

  <h2 className="text-4xl font-bold text-center mb-14">
    Why Salons Choose Omnisyn
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-zinc-900 p-8 rounded-3xl">
      <h3 className="text-2xl font-bold mb-4">
        Faster Bookings
      </h3>

      <p className="text-gray-400">
        Customers can book appointments instantly without waiting for replies.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl">
      <h3 className="text-2xl font-bold mb-4">
        AI Receptionist
      </h3>

      <p className="text-gray-400">
        Automated responses help businesses handle customer inquiries 24/7.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-3xl">
      <h3 className="text-2xl font-bold mb-4">
        WhatsApp Integration
      </h3>

      <p className="text-gray-400">
        Clients confirm appointments directly through WhatsApp.
      </p>
    </div>

  </div>

</section>
<section className="w-full max-w-5xl mt-20">
  <h2 className="text-4xl font-bold text-center mb-10">
    AI Receptionist Demo
  </h2>

<div className="bg-zinc-900 rounded-3xl p-8">

  <div className="space-y-4 mb-6">
    {chat.map((msg, index) => (
      <div
        key={index}
        className={`p-4 rounded-2xl w-fit max-w-md ${
          msg.startsWith("You:")
            ? "bg-green-500 text-black ml-auto"
            : "bg-zinc-800"
        }`}
      >
        {msg}
      </div>
    ))}
  </div>
    <div className="bg-zinc-800 p-4 rounded-2xl w-fit max-w-md">
      Hi 👋
    </div>

    <div className="bg-green-500 text-black p-4 rounded-2xl w-fit max-w-md ml-auto font-medium">
      Welcome to Omnisyn Salon ✨

      <br />
      <br />

      Choose a service:

      <br />
      • Braiding
      <br />
      • Wig Installation
      <br />
      • Nail Gel
      <br />
      • Pedicure
      <br />
      • Facial
      <br />
      • Hair Treatment
    </div>

    <div className="bg-zinc-800 p-4 rounded-2xl w-fit max-w-md">
      Wig Installation
    </div>

    <div className="bg-green-500 text-black p-4 rounded-2xl w-fit max-w-md ml-auto font-medium">
      Perfect ✨
<div className="bg-green-500 text-black p-4 rounded-2xl w-fit ml-auto animate-pulse">
  Typing...
</div>
      <br />
      What date would you like to book your appointment?
      <div className="flex flex-wrap gap-3 mt-4">

  <button className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 transition">
    Tomorrow
  </button>

  <button className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 transition">
    Friday
  </button>

  <button className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 transition">
    This Weekend
  </button>

</div>
    </div>

  </div>
  <div className="bg-zinc-800 p-4 rounded-2xl w-fit max-w-md mt-6">
  Tomorrow
</div>

<div className="bg-green-500 text-black p-4 rounded-2xl w-fit max-w-md ml-auto font-medium">
  Excellent ✨

  <br />
  Your Wig Installation appointment has been scheduled for tomorrow at 11:00 AM.

  <br />
  <br />

  A confirmation message has been sent to WhatsApp.
</div>
<div className="mt-8 flex gap-3">

  <input
  type="text"
  placeholder="Type your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="flex-1 p-4 rounded-2xl bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
/>

  <button
  onClick={() => {
    if (message.trim() !== "") {
      setChat([
  ...chat,
  `You: ${message}`,
  "AI is typing...",
]);

setTimeout(() => {
  setChat((prev) => [
    ...prev.slice(0, -1),

     message.toLowerCase().includes("hi") ||
message.toLowerCase().includes("hello")
  ? "AI: Hello 👋 Welcome to Omnisyn Salon. How may we help you today?"
  : message.toLowerCase().includes("braid")
  ? "AI: Perfect ✨ What date would you like for your braiding appointment?"
  : message.toLowerCase().includes("nails")
  ? "AI: We offer gel, acrylic, and nail art services 💅"
  : message.toLowerCase().includes("price")
  ? "AI: Prices depend on the hairstyle or service selected."
  : "AI: Thank you for contacting Omnisyn Salon ✨", 
  ]);
}, 1000);

      setMessage("");
    }
  }}
  className="bg-green-500 hover:bg-green-600 transition text-black px-6 rounded-2xl font-bold"
>
  Send
</button>

</div>
</section><section className="w-full max-w-5xl mt-24 mb-24 text-center">

  <h2 className="text-5xl font-bold mb-6">
    Ready To Automate Your Salon?
  </h2>

  <p className="text-gray-400 text-lg mb-10">
    Get more bookings, faster replies, and a professional customer experience with Omnisyn.
  </p>

  <a
    href="https://wa.me/254748734197"
    target="_blank"
    className="bg-green-500 hover:bg-green-600 transition text-black px-10 py-5 rounded-2xl font-bold text-xl"
  >
    Contact On WhatsApp
  </a>

</section>
    </main>
  );
}