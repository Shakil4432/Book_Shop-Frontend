const events = [
  {
    title: "Book Launch: The Wisdom of Ibn Sina",
    description:
      'Join us for the launch of "The Wisdom of Ibn Sina", a deep dive into the life and works of the great philosopher and physician!',
    date: "March 10, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Islamic Cultural Center, Dhaka",
    image:
      "https://m.media-amazon.com/images/I/41nsfA+Sw3L._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
  },
  {
    title: "Meet & Greet with Dr. Tariq Ramadan",
    description:
      "An exclusive event with Dr. Tariq Ramadan to discuss his latest book and insights into Islamic philosophy and society.",
    date: "March 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Qatar Book Festival, Doha",
    image:
      "https://m.media-amazon.com/images/I/71SyJ1ZROUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Islamic Poetry Night with Rumi",
    description:
      "Experience the mystical poetry of Rumi, one of the greatest Sufi poets, in this live reading event.",
    date: "March 20, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Istanbul, Turkey",
    image: "https://visitboise.com/wp-content/uploads/2024/03/JPG-of-flyer-for-3-28-2024-Rumi-Night1-scaled.jpg",
  },
  {
    title: "Lecture by Shaykh Hamza Yusuf: Understanding Islamic Civilization",
    description:
      "Attend this enlightening lecture by Shaykh Hamza Yusuf about the richness and depth of Islamic civilization and its contributions to the world.",
    date: "March 25, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Chicago, USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWZr5CRAOb2sqxLDLKJBe1JLibQ_Q8loJVw&s",
  },
];

const EventItems = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] p-4 rounded-lg shadow-lg max-w-sm mx-auto"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="text-gray-600">
                <p className="mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="mb-1">
                  <strong>Time:</strong> {event.time}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
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
