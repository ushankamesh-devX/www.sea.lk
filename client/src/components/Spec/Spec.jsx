import React from "react";

function Spec() {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-16  items-center justify-center">
  <div className="flex flex-col items-start  p-6">
    <h1 className="text-5xl font-bold w-[450px] text-start">Flight Time: Up to 6 Hours</h1>
    <p className="w-96 text-start pt-8">Operates continuously for long missions without frequent recharging.</p>
  </div>
  <div className="flex flex-col items-start  p-6">
    <h1 className="text-5xl font-bold w-[450px] text-start">Speed: 150 km/h Within Seconds</h1>
    <p className="w-96 text-start pt-8">Accelerates rapidly for quick response and efficiency.</p>
  </div>
  <div className="flex flex-col items-start  p-6">
    <h1 className="text-5xl font-bold w-[450px] text-start">Special Features: Charges Within Two Hours</h1>
    <p className="w-96 text-start pt-8">Fast-charging for minimal downtime and quick redeployment.</p>
  </div>
  <div className="flex flex-col items-start  p-6">
    <h1 className="text-5xl font-bold w-[450px] text-start">Range: Covers a Maximum Distance of 30 Km on a Single Flight</h1>
    <p className="w-96 text-start pt-8">Covers medium distances, ideal for various operations.</p>
  </div>
  
</div>

  );
}

export default Spec;
