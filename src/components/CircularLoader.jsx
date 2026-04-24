'use client'
import React, { useState, useEffect } from "react";

const CircularLoader = () => {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position when the mouse moves
  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener to track cursor movement
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Define different colors and animations
  
  const animations = ["animate-spin duration-150", "animate-pulse duration-100", "animate-bounce duration-200", "animate-ping", "animate-bounce", "animate-pulse duration-500", "animate-spin duration-700"];
  const colors=["bg-blue-900","bg-red-800","bg-yellow-800","bg-green-800","bg-pink-800"];

  // Create 7 lines with different colors and animations
  const lines = colors.map((color, index) => (
    <div
      key={index}
      className={`line ${color} w-5 h-5 absolute ${animations[index]}`}
      style={{ top: cursorPosition.y+7, left: cursorPosition.x+7, transform: `rotate(${index * 45}deg)`, borderRadius: '50%' }}
    ></div>
  ));

  return <div className=" dura">{lines}</div>;
};

export default CircularLoader;