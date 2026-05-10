export default function CarWebsite() {
  const cars = [
    {
      name: 'Tesla Model S',
      price: '$89,990',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'BMW M4',
      price: '$74,700',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Lamborghini Huracán',
      price: '$249,865',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">CarZone</h1>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#cars" className="hover:text-gray-300">Cars</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-6">
          <h2 className="text-5xl font-extrabold mb-4">Drive Your Dream</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Explore luxury, sports, and electric cars all in one place.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg">
            Explore Cars
          </button>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-16 px-6 md:px-16">
        <h3 className="text-4xl font-bold text-center mb-12">Featured Cars</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{car.name}</h4>
                <p className="text-gray-600 mb-4">Starting from {car.price}</p>
                <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-black text-white py-14 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="mb-6 text-gray-300">
          Email: support@carzone.com | Phone: +92 300 1234567
        </p>

        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl text-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl text-black"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-xl text-black"
          ></textarea>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4 text-sm">
        © 2026 CarZone. All rights reserved.
      </footer>
    </div>
  );
}
