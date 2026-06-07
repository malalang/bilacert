"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  const phoneNumber = "27754304433"; // South African format
  const message =
    "Hi! I'm interested in your compliance services. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </button>
  );
}
