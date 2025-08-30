import React from "react";

const features = [
  {
    icon: "🚗",
    title: "Private Chauffeured Excellence",
    description: "Private, personalized rides for city tours, airport runs, and intercity travel–exclusively yours.",
  },
  {
    icon: "💎",
    title: "Customizable Luxury Tours",
    description: "Personalized tours from Montreal to Quebec City and Mont-Tremblant, with local insights.",
  },
  {
    icon: "👔",
    title: "Business-Class Booking Experience",
    description: "Book easily via WhatsApp, email, or form. Enjoy VIP travel with Wi-Fi and charging.",
  },
  {
    icon: "✔️",
    title: "Trusted by Hotels & VIP Clients",
    description: "Top hotels trust SALIMO for elegant and efficient guest experiences.",
  },
  {
    icon: "🤝",
    title: "Cross-Border Confidence",
    description: "Authorized for international transfers, like Windsor-Detroit Airport (DTW).",
  },
  {
    icon: "⭐",
    title: "Sustainable Elegance",
    description: "Travel responsibly and luxuriously in our eco-friendly, high-end electric vehicles.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4 text-blue-400">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
