"use client";
import { Check, Info, LucideCamera, PentagonIcon, RectangleVerticalIcon } from "lucide-react";
import Hero from "./components/Hero";
import Install from "./components/Install";
import Island from "./components/Island";
import Usage from "./components/Usage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [position, setPosition] = useState<"top" | "bottom" | "left" | "right">("top");
  const [size, setSize] = useState<"default" | "sm" | "lg" | null>("default"); 
  const [variant, setVariant] = useState<"default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null>("default");
  const [distance, setDistance] = useState(33);

  // Initialize state from localStorage
  useEffect(() => {
    const storedPosition = localStorage.getItem("position");
    const storedVariant = localStorage.getItem("variant");
    const storedSize = localStorage.getItem("size");
    const distance = localStorage.getItem("distance");
    
    if (storedPosition) setPosition(storedPosition as "top" | "bottom" | "left" | "right");
    if (storedVariant) setVariant(storedVariant as "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null);
    if (storedSize) setSize(storedSize as "default" | "sm" | "lg" | null);
    if (distance) setDistance(parseInt(distance));
  }, []);

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("position", position);
    if (variant !== null) {
      localStorage.setItem("variant", variant);
    }
    if (size !== null) {
      localStorage.setItem("size", size);
    }
    localStorage.setItem("distance", distance.toString());
  }, [position, variant, size, distance]);

  return (
    <><section className="grid grid-cols-3 justify-items-center">
      <div></div>
      <div>
        <Hero />
        <Install />
        <Usage
          setPosition={(newPosition) => setPosition(newPosition as "top" | "bottom" | "left" | "right")}
          setVariant={(newVariant) => setVariant(newVariant as "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null)}
          setSize={(newSize) => setSize(newSize as "default" | "sm" | "lg" | null)}
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
