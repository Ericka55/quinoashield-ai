"use client";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

type Props = {
  riskLevel: string;
  sitActive: boolean;
};

export default function DigitalTwinMap({
  riskLevel,
  sitActive,
}: Props) {

  const getColor = () => {

    if (sitActive) {
      return "#4ade80";
    }

    if (riskLevel === "High") {
      return "#ef4444";
    }

    if (riskLevel === "Moderate") {
      return "#facc15";
    }

    return "#4ade80";
  };

  const getRadius = () => {

    if (riskLevel === "High") {
      return 80;
    }

    if (riskLevel === "Moderate") {
      return 55;
    }

    return 35;
  };

  return (
    <div className="h-[600px] w-full rounded-[32px] overflow-hidden border border-white/10">

      <MapContainer
        center={[-16.51, -68.13]}
        zoom={13}
        style={{
          height: "100%",
          width: "100%",
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CircleMarker
          center={[-16.51, -68.13]}
          radius={getRadius()}
          pathOptions={{
            color: getColor(),
            fillColor: getColor(),
            fillOpacity: 0.5,
          }}
        >

          <Popup>

            <div className="text-black">

              <h3 className="font-bold text-lg">
                Quinoa Production Zone
              </h3>

              <p>
                Risk Level: {riskLevel}
              </p>

              <p>
                SIT Active: {sitActive ? "YES" : "NO"}
              </p>

              <p>
                Environmental Recovery:
                {sitActive ? " Improving" : " Monitoring"}
              </p>

            </div>

          </Popup>

        </CircleMarker>

      </MapContainer>

    </div>
  );
}