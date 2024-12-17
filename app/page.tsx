"use client";
import { Check, Info, LucideCamera, PentagonIcon, RectangleVerticalIcon } from "lucide-react";
import Hero from "./components/Hero";
import Install from "./components/Install";
import Island from "./components/Island";
import Usage from "./components/Usage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [position, setPosition] = useState("top");
  const [size, setSize] = useState("default"); 
  const [variant, setVariant] = useState("default");
  const [distance, setDistance] = useState(33);

  // Initialize state from localStorage
  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedVariant = localStorage.getItem("variant");
    const storedSize = localStorage.getItem("size");
    const distance = localStorage.getItem("distance");
    
    if (storedPosition) setPosition(storedPosition);
    if (storedVariant) setVariant(storedVariant);
    if (storedSize) setSize(storedSize);
    if (distance) setDistance(parseInt(distance));
  }, []);

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("position", position);
    localStorage.setItem("variant", variant);
    localStorage.setItem("size", size);
    localStorage.setItem("distance", distance.toString());
  }, [position, variant, size, distance]);

  return (
    <><section className="grid grid-cols-3 justify-items-center">
      <div></div>
      <div>
        <Hero />
        <Install />
        <Usage
          setPosition={(newPosition) => setPosition(newPosition)}
          setVariant={(newVariant) => setVariant(newVariant)}
          setSize={(newSize) => setSize(newSize)}
          setDistance={(newDistance) => setDistance(newDistance)} />
        <Island variant={variant} size={size} position={position} distance={distance} className="flex flex-col">
          <Info
            size={40}
            className="hover:w-16 hover:h-16 transition-all duration-700 rounded-full m-1" />
          <Check
            size={40}
            className="hover:w-16 hover:h-16 transition-all duration-700 rounded-full m-1" />
          <PentagonIcon
            size={40}
            className="hover:w-16 hover:h-16 transition-all duration-700 rounded-full m-1" />
          <LucideCamera
            size={40}
            className="hover:w-16 hover:h-16 transition-all duration-700 rounded-full m-1" />
          <RectangleVerticalIcon
            size={40}
            className="hover:w-16 hover:h-16 transition-all duration-700 rounded-full m-1" />
        </Island>
      </div>
    </section><br /><Footer /></>
  );
}
