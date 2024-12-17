"use client";
import React, { useState } from "react";
import CopyBlock from "./CopyBlock";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface UsageProps {
  setPosition: (position: string) => void;
  setVariant: (variant: string) => void;
  setSize: (size: string) => void;
  setDistance: (distance: number) => void;
}

function Usage({ setPosition, setVariant, setSize, setDistance }: UsageProps) {
  const [sliderValue, setSliderValue] = useState(33);

  const code = `import { Island } from 'Island'

  function App() {
    return ( 
        <Island />
        // ...
    )
  }`;

  return (
    <div>
      <br />
      <h1 className="font-bold text-2xl">Usage</h1>
      <p>Import and add the component “island” in the root of your project.</p>
      <br />
      <CopyBlock text={code} />
      <p className="italic">Customize your “Island” component in any way you like</p>
      
      <br />
      <h1 className="font-bold text-2xl">Position</h1>
      <p>Choose the exit of the island</p>
      
      <br />
      <div className="flex flex-row space-x-2">
        <Button onClick={() => setPosition("top")}>Top</Button>
        <Button onClick={() => setPosition("bottom")}>Bottom</Button>
        <Button onClick={() => setPosition("left")}>Left</Button>
        <Button onClick={() => setPosition("right")}>Right</Button>
      </div>
      
      <br />
      <h1 className="font-bold text-2xl">Variant</h1>
      <p>Choose the island styles that are defined in your tailwind file.</p>
      
      <br />
      <div className="flex flex-row space-x-2">
        <Button onClick={() => setVariant("default")}>default</Button>
        <Button onClick={() => setVariant("destructive")}>destructive</Button>
        <Button onClick={() => setVariant("outline")}>outline</Button>
        <Button onClick={() => setVariant("secondary")}>secondary</Button>
        <Button onClick={() => setVariant("ghost")}>ghost</Button>
        <Button onClick={() => setVariant("link")}>link</Button>
      </div>
      
      <br />
      <h1 className="font-bold text-2xl">Activation Area</h1>
      <p>
        Defines the height of the island activation area. It is measured in px
      </p>
      
      <br />
      <Slider
        max={100}
        step={1}
        onValueChange={(value) => {
          setSliderValue(value[0]);
          setDistance(value[0]);
        }}
      />
      
      <br />
      <h1 className="font-bold text-2xl">Children</h1>
      <p>Add the content you want.</p>
      
      <br />
      <Button>Appear</Button>

      <br />
      <br />
      <h1 className="font-bold text-2xl">Size</h1>
      <p>Change the size of the island</p>
      
      <br />
      <div className="flex flex-row space-x-2">
        <Button onClick={() => setSize("default")}>default</Button>
        <Button onClick={() => setSize("sm")}>sm</Button>
        <Button onClick={() => setSize("lg")}>lg</Button>
      </div>
    </div>
  );
}

export default Usage;
