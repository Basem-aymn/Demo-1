import React from "react";

const IconFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:justify-center sm:items-center sm:space-x-12 text-white py-6 sm:py-12">
      <div className="flex flex-col items-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 sm:h-16 sm:w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13l2-3h14l2 3v6a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1H8v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 13V7a5 5 0 0110 0v6"
          />
        </svg>
        <p className="text-center text-sm font-semibold">
          Private Chauffeured Excellence
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 sm:h-16 sm:w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2"
          />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
        </svg>
        <p className="text-center text-sm font-semibold">Always On Time</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 sm:h-16 sm:w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17v-5"
          />
        </svg>
        <p className="text-center text-sm font-semibold">Transparent Pricing</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 sm:h-16 sm:w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c-4-4-8-8-8-11a8 8 0 0116 0c0 3-4 7-8 11z"
          />
        </svg>
        <p className="text-center text-sm font-semibold">Customizable Luxury Tours</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 sm:h-16 sm:w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-center text-sm font-semibold">
          Trusted by Hotels & VIP Clients
        </p>
      </div>
    </div>
  );
};

export default IconFeatures;
