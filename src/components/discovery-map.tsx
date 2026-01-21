"use client";

// TODO:  When zooming out, property nodes overlap and become cluttered.
// Improve visual spacing for a better UI/UX.


// TODO : This import gives "window is not defined" error in the terminal. Fix it.

// TODO : Clicking a marker should ideally open the popup with the selected property details. Currently not implemented. Implement it.

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { LocationType, projectListing } from "@/types/types";

// Dynamically import the map component to prevent SSR issues with Leaflet
const DynamicMapComponent = dynamic(
  () => import("./discovery-map-internal"),
  {
    ssr: false,
    loading: () => (
      <div className="relative size-full overflow-hidden flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    ),
  }
);

export default function DiscoveryMap({
  allFilteredData,
}: Readonly<{ allFilteredData: any }>) {
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null
  );
  const sectionRef = useRef(null);
  const [selectedProperty, setSelectedProperty] =
    useState<projectListing | null>(null);
  const [zoom, setZoom] = useState<number>(12);

  useEffect(() => {
    if (selectedLocation) {
      const found = allFilteredData.projects.find(
        (prop: projectListing) => prop.name == selectedLocation.name
      );
      setSelectedProperty(found);
      const el = document.querySelector(
        `[data-marker-id="${selectedLocation.name}"]`
      ) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [selectedLocation]);

  return (
    <section
      ref={sectionRef}
      style={{ fontFamily: "Arial, sans-serif" }}
      className="flex aspect-auto h-full flex-col gap-4 overflow-hidden"
      aria-label={`Project discovery via map`}
    >
      {/* Map Container */}
      <div className="relative size-full overflow-hidden">
        <DynamicMapComponent
          allFilteredData={allFilteredData}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedProperty={selectedProperty}
          zoom={zoom}
          setZoom={setZoom}
        />
      </div>
    </section>
  );
}
