import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    text: "Excellent and fast service, the driver was very professional.",
    rating: 5,
    name: "Ahmed Ali",
    avatar: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    text: "The app is easy to use and the prices are reasonable.",
    rating: 4,
    name: "Sarah Mohamed",
    avatar: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    text: "Amazing experience, highly recommended.",
    rating: 5,
    name: "Khaled Youssef",
    avatar: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 4,
    text: "The driver was friendly and the ride was comfortable.",
    rating: 4,
    name: "Layla Hassan",
    avatar: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 5,
    text: "Excellent service at a great price.",
    rating: 5,
    name: "Mahmoud Abdullah",
    avatar: "https://i.pravatar.cc/50?img=5",
  },
  {
    id: 6,
    text: "Smooth ride and extremely professional driver.",
    rating: 5,
    name: "Nour El Din",
    avatar: "https://i.pravatar.cc/50?img=6",
  },
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine number of reviews per view based on window width
  const getReviewsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [reviewsPerView, setReviewsPerView] = useState(getReviewsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setReviewsPerView(getReviewsPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviews.length - reviewsPerView;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 inline-block ${
            i <= count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Customer Reviews
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 / reviewsPerView) * currentIndex}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 p-4"
              style={{ width: `${100 / reviewsPerView}%` }}
            >
              <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col justify-between shadow-md">
                <p className="text-gray-700 mb-4 text-sm">{review.text}</p>
                <div className="mb-4">{renderStars(review.rating)}</div>
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-900 font-medium">{review.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md transition"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
