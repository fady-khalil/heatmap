import React, { useEffect, useRef, useState } from "react";
import h337 from "heatmap.js";

const MyHeatmap = () => {
  const heatmapRef = useRef(null);
  const [isAnimating, setAnimating] = useState(true); // Control animation
  const animationInterval = 500; // Set the animation interval in milliseconds (e.g., 500ms for slower animation)
  let animationId; // Declare animationId here

  useEffect(() => {
    const heatmapInstance = h337.create({
      container: heatmapRef.current,
    });

    let lastUpdateTime = 0;
    let dataPoints = []; // Initialize an empty array for data

    const updateHeatmapData = (timestamp) => {
      if (isAnimating) {
        if (timestamp - lastUpdateTime >= animationInterval) {
          lastUpdateTime = timestamp;

          // Replace the data with a different set of data
          dataPoints = []; // Clear the existing data
          for (let i = 0; i < 100; i++) {
            dataPoints.push({
              x: Math.floor(Math.random() * 500),
              y: Math.floor(Math.random() * 500),
              value: Math.random() * 10,
            });
          }

          // Set the updated data for the heatmap
          heatmapInstance.setData({
            max: 10,
            data: dataPoints,
          });
        }

        // Request the next animation frame
        animationId = requestAnimationFrame(updateHeatmapData);
      }
    };

    // Start the animation loop
    animationId = requestAnimationFrame(updateHeatmapData);

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAnimating]);

  const toggleAnimation = () => {
    setAnimating((prevAnimating) => !prevAnimating);
  };

  return (
    <div className="flex flex-col gap-4 items-center py-10">
      <h1 className="text-2xl"> Heatmap Animation example</h1>
      <div
        ref={heatmapRef}
        style={{ width: "500px", height: "500px" }}
        className="bg"
      ></div>
      <button
        onClick={toggleAnimation}
        className="bg-black text-white p-4 w-max"
      >
        {isAnimating ? "Stop Animation" : "Play Animation"}
      </button>
    </div>
  );
};

export default MyHeatmap;
