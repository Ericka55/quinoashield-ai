"use client";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import type { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

type Props = {
  riskLevel: string;
  sitActive: boolean;
};

export default function MapClient({
  riskLevel,
  sitActive,
}: Props) {

  const getColor = () => {

    if (sitActive) return "#22c55e";

    if (riskLevel === "High") {
      return "#ef4444";
    }

    if (riskLevel === "Moderate") {
      return "#facc15";
    }

    return "#22c55e";
  };

  const position: LatLngExpression = [
    -16.5,
    -68.15,
  ];

  return (

    <div
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "32px",
        overflow: "hidden",
      }}
    >

      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
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
          center={position}
          radius={30}
          pathOptions={{
            color: getColor(),
            fillColor: getColor(),
            fillOpacity: 0.5,
          }}
        >

          <Popup>

            <div className="text-black">

              <h2 className="font-bold">
                QuinoaShield Zone
              </h2>

              <p>
                Risk Level:
                {" "}
                {riskLevel}
              </p>

              <p>
                SIT:
                {" "}
                {sitActive
                  ? "ACTIVE"
                  : "STANDBY"}
              </p>

            </div>

          </Popup>

        </CircleMarker>

      </MapContainer>

    </div>

  );
}