import React from "react";

const ComingSoonCard = () => (
  <div>
    {/* Pulsing placeholder like the image */}
    <div
      className="h-52 md:h-72 rounded-xl relative bg-black animate-pulse "
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "center",
      }}
    >
      {/* No overlay or links */}
    </div>

    {/* Text section without background, same padding and margin */}
    <div className="text-white rounded-b-xl mt-3 py-6 px-4">
      <h5 className="text-xl font-semibold mb-2"> Coming Soon - Breathe Pilates Booking App</h5>
      <p className="text-[#ADB7BE]"> Built with PWA & Next.js</p>
      
    </div>
  </div>
);

export default ComingSoonCard;

