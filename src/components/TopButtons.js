import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Peshawar",
    },
    {
      id: 2,
      title: "Islamabad",
    },
    {
      id: 3,
      title: "Skardu",
    },
    {
      id: 4,
      title: "Karachi",
    },
    {
      id: 5,
      title: "Lahore",
    },
    {
      id: 6,
      title: "Murree",
    },
  ];

  return (
    <div className="flex items-center justify-between flex-wrap my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-sm sm:text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
