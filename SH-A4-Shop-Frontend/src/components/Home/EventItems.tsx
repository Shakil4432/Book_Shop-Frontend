const events = [
  {
    title: "New Arrivals: Exclusive Stationery Collection",
    description:
      "Discover our latest stationery collection featuring premium notebooks, pens, and art supplies.",
    date: "April 5, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Stationery Hub, Dhaka",
    image:
      "https://static2.jetpens.com/images/a/000/254/254856.jpg?auto=format&blend-align=middle%2Ccenter&blend-alpha=10&blend-mode=difference&blend-size=inherit&blend64=aHR0cHM6Ly9zdGF0aWMxLmpldHBlbnMuY29tL2ltYWdlcy9hc3NldHMvd2F0ZXJtYXJrMi5wbmc&chromasub=444&fm=jpg&mark-align=top%2Cright&mark-alpha=30&mark-scale=16&mark64=aHR0cHM6Ly9zdGF0aWMxLmpldHBlbnMuY29tL2ltYWdlcy9hc3NldHMvd2F0ZXJtYXJrMS5wbmc&q=90&usm=20&w=900&s=f3bf89877040c9530a5588d3da9a8a47",
  },
  {
    title: "Calligraphy Workshop",
    description:
      "Join our expert-led calligraphy workshop and learn the art of elegant handwriting.",
    date: "April 12, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Art & Craft Center, Dhaka",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/016/969/724/small/illustration-of-national-handwriting-day-simple-and-elegant-design-vector.jpg",
  },
  {
    title: "Back-to-School Sale",
    description:
      "Get up to 50% off on school essentials, including notebooks, pens, backpacks, and more!",
    date: "April 18, 2025",
    time: "9:00 AM - 9:00 PM",
    location: "All Branches & Online Store",
    image:
      "https://schoolsupplyboxes.com/cdn/shop/files/JGP_6605-Edit.jpg?v=1715090778&width=480",
  },
  {
    title: "Creative Journaling Workshop",
    description:
      "Learn how to create beautiful journal spreads with stickers, washi tapes, and creative doodles.",
    date: "April 25, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "The Paper Studio, Dhaka",
    image: "https://images.pexels.com/photos/5908712/pexels-photo-5908712.jpeg",
  },
];

const EventItems = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#e7995e] mb-4">
          Exciting Upcoming Events 🎉
        </h2>
        <h3 className="text-sm font-semibold text-gray-700 mb-12">
          Don't miss out on these amazing stationery events!
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md max-w-sm mx-auto hover:shadow-lg transition-all"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{event.description}</p>

              <div className="text-gray-700 text-sm">
                <p className="mb-1">
                  <strong className="text-[#e7995e]">📅 Date:</strong>{" "}
                  {event.date}
                </p>
                <p className="mb-1">
                  <strong className="text-[#e7995e]">⏰ Time:</strong>{" "}
                  {event.time}
                </p>
                <p>
                  <strong className="text-[#e7995e]">📍 Location:</strong>{" "}
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventItems;
