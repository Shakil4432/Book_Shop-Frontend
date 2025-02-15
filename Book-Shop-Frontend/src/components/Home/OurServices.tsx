const services = [
  {
    title: "Book Recommendations",
    description:
      "Our experts recommend books based on your interests and preferences.",
    icon: "📚",
  },
  {
    title: "Fast Delivery",
    description: "We ensure fast and secure delivery right to your doorstep.",
    icon: "🚚",
  },
  {
    title: "Customer Support",
    description:
      "Our support team is available 24/7 to help you with any questions or issues.",
    icon: "📞",
  },
  {
    title: "Book Reviews",
    description:
      "Read reviews and ratings from other readers before making a purchase.",
    icon: "⭐",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-lg text-center bg-[#f5f5f5]"
            >
              <div className="text-4xl mb-4 text-[#e7995e]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#e7995e] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
