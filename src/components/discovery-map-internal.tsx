"use client";

// Internal map component that uses Leaflet - loaded only on client side
import "leaflet/dist/leaflet.css";
import { JSX, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { LocationType, projectListing } from "@/types/types";
import { Badge } from "./badge";
import { renderToString } from "react-dom/server";
import { PropscoreRating } from "@/assets/PropsochRating";
import {
  cn,
  concatenateTypologies,
  formatDate,
  formatPrice,
  para,
} from "@/utils/helpers";
import { BudgetIcon } from "@/assets/budget-icon";
import { HouseIcon } from "@/assets/house-icon";
import { LocationIcon } from "@/assets/location-icon";
import { CalendarIcon } from "@/assets/utility";

interface Location {
  lat: number;
  lon: number;
  name: string;
}

export const renderIcon = (
  icon: JSX.Element,
  ariaLabel: string,
  transform = "translate(-8px, -4px)"
) =>
  `<div style="transform: ${transform}" aria-label="${ariaLabel}" role="button">${renderToString(
    icon
  )}</div>`;

function getOtherLocationIcon(
  label: string,
  isSelected: boolean,
  icon = true
): L.DivIcon {
  return L.divIcon({
    html: renderIcon(
      <Badge variant={"white"} className="w-max whitespace-nowrap">
        {label}
      </Badge>,
      label,
      isSelected ? "translate(-10px, -20px)" : "translate(-15px, -20px)"
    ),
  });
}

function MapClickHandler({ onClick }: { onClick: () => void }) {
  useMapEvents({
    click: () => onClick(),
  });
  return null;
}

function MapZoomHandler({
  onZoomChange,
}: Readonly<{ onZoomChange: (zoom: number) => void }>) {
  const map = useMap();
  
  // Initialize zoom level on mount
  useEffect(() => {
    onZoomChange(map.getZoom());
  }, [map, onZoomChange]);

  useMapEvents({
    zoomend: () => {
      onZoomChange(map.getZoom());
    },
  });
  return null;
}

function MapController({
  selectedLocation,
}: Readonly<{
  selectedLocation: Location | null;
}>) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.panTo([selectedLocation.lat, selectedLocation.lon], {
        animate: true,
        duration: 1.5,
      });
    }
  }, [selectedLocation, map]);

  return null;
}

function getJitteredPosition(
  lat: number,
  lon: number,
  index: number,
  zoom: number
): [number, number] {
  // Only apply jitter when zoomed out to reduce visual clutter.
  // At zoom 13+, markers are naturally spaced far enough apart
  if (zoom >= 13) return [lat, lon];

  // Calculate jitter amount based on zoom level
  // More zoomed out = more jitter needed to prevent overlap
  const zoomDiff = 13 - zoom; // How many levels below 13
  const baseOffset = 0.003; // ~300m base offset
  
  // Progressive scaling: more aggressive jitter at lower zoom levels
  let offsetMultiplier = 1.0;
  if (zoom <= 10) {
    offsetMultiplier = 2.0; // Double offset for very zoomed out
  } else if (zoom <= 11) {
    offsetMultiplier = 1.5; // 1.5x for moderately zoomed out
  }
  
  const radius = baseOffset * offsetMultiplier * zoomDiff;
  
  // Use golden angle spiral (137.5°) for more even distribution
  // This creates a visually pleasing spiral pattern
  const goldenAngle = 2.399963229728653; // radians (137.5 degrees)
  const angle = (index * goldenAngle) % (2 * Math.PI);
  
  const dLat = Math.cos(angle) * radius;
  const dLon = Math.sin(angle) * radius;

  return [lat + dLat, lon + dLon];
}

export default function MapComponent({
  allFilteredData,
  selectedLocation,
  setSelectedLocation,
  selectedProperty,
  zoom,
  setZoom,
}: {
  allFilteredData: any;
  selectedLocation: LocationType | null;
  setSelectedLocation: (loc: LocationType | null) => void;
  selectedProperty: projectListing | null;
  zoom: number;
  setZoom: (zoom: number) => void;
}) {
  // Load icon compatibility on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("leaflet-defaulticon-compatibility");
    }
  }, []);

  return (
    <MapContainer
      center={[12.97, 77.59]}
      zoom={12}
      scrollWheelZoom={true}
      dragging={true}
      touchZoom={true}
      className="border-lightborder z-10 size-full rounded-lg border object-cover"
      aria-label="Map view"
    >
      <LayersControl position="bottomleft">
        {/* Street View */}
        <LayersControl.BaseLayer checked name="Street View">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        {/* Satellite View (Esri) */}
        <LayersControl.BaseLayer name="Satellite View">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <MapClickHandler onClick={() => setSelectedLocation(null)} />
      <MapZoomHandler onZoomChange={setZoom} />
      <MapController selectedLocation={selectedLocation} />

      {/* Project Location Marker */}
      {allFilteredData && allFilteredData.projects.length > 0
        ? allFilteredData.projects.map(
            (project: projectListing, index: number) => {
              const position = getJitteredPosition(
                project.latitude,
                project.longitude,
                index,
                zoom
              );

              return (
                <Marker
                  position={position}
                  key={project.id}
                  icon={getOtherLocationIcon(
                    project.name,
                    selectedProperty?.id == project.id
                  )}
                  eventHandlers={{
                    click: () =>
                      setSelectedLocation({
                        name: project.name,
                        lat: project.latitude,
                        lon: project.longitude,
                        distance: 0,
                        duration: 0,
                      }),
                  }}
                />
              );
            }
          )
        : null}
      {selectedLocation && selectedProperty && (
        <Popup
          position={[selectedLocation.lat, selectedLocation.lon]}
          autoClose={false}
          closeOnClick={false}
          offset={[0, -20]}
          closeOnEscapeKey
          minWidth={400}
          closeButton
        >
          <Link
            href={`/property-for-sale-in/${selectedProperty.city.toLowerCase()}/${selectedProperty.slug.toLowerCase()}/${selectedProperty.id}`}
            target="_blank"
          >
            <div className="flex w-full flex-col gap-3">
              <Image
                src={selectedProperty.image}
                alt={selectedProperty.alt}
                width={500}
                height={500}
                loading="lazy"
                className={cn(
                  "aspect-video size-full rounded-lg object-cover transition-all duration-400 ease-in-out",
                  selectedProperty.projectStatus === "soldOut" && "grayscale"
                )}
              />
              <h3
                className={cn(
                  para({ size: "lg", color: "dark" }),
                  "font-semibold"
                )}
              >
                {selectedProperty.name}
              </h3>

              <div className="flex flex-col gap-3 whitespace-nowrap">
                <div className="flex w-full items-center justify-between">
                  <span
                    className={cn(
                      para({ color: "dark", size: "sm" }),
                      "flex w-full items-center gap-2"
                    )}
                  >
                    <LocationIcon width={20} height={20} />
                    <span>{selectedProperty.micromarket}</span>
                  </span>
                  <span
                    className={cn(
                      para({ color: "dark", size: "sm" }),
                      "flex w-full items-center justify-end gap-2"
                    )}
                  >
                    <PropscoreRating
                      rating={selectedProperty.propscore}
                      width={110}
                      height={24}
                      className={"ml-auto w-max max-w-40"}
                    />
                  </span>
                </div>
                <div className="flex w-full items-center justify-between gap-3">
                  <span
                    className={cn(
                      para({ color: "dark", size: "sm" }),
                      "flex w-full max-w-40 items-center gap-2 truncate"
                    )}
                  >
                    <BudgetIcon width={20} height={20} />
                    {formatPrice(selectedProperty.minPrice, false)} -{" "}
                    {formatPrice(selectedProperty.maxPrice, false)}
                  </span>
                  <span
                    className={cn(
                      para({ color: "dark", size: "sm" }),
                      "flex w-full items-center justify-end gap-2"
                    )}
                  >
                    <CalendarIcon height={20} width={20} />
                    {formatDate(selectedProperty.possessionDate)}
                  </span>
                </div>
                <div className="flex w-full items-center justify-between gap-3">
                  <span
                    className={cn(
                      para({ color: "dark", size: "sm" }),
                      "flex w-full max-w-40 items-center gap-2 truncate"
                    )}
                  >
                    <HouseIcon width={20} height={20} />
                    <span className="w-32 max-w-32 truncate">
                      {concatenateTypologies(selectedProperty.typologies)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      para({ color: "dark", size: "sm" }),
                      "flex w-full items-center justify-end gap-2"
                    )}
                  >
                    {selectedProperty.minSaleableArea} -{" "}
                    {selectedProperty.maxSaleableArea} sqft
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Popup>
      )}
    </MapContainer>
  );
}
