"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(
  () => import("./MapClient"),
  {
    ssr: false,
  }
);

type Props = {
  riskLevel: string;
  sitActive: boolean;
};

export default function DigitalTwinMap({
  riskLevel,
  sitActive,
}: Props) {

  return (
    <div className="border border-white/10 rounded-[32px] overflow-hidden">

      <MapClient
        riskLevel={riskLevel}
        sitActive={sitActive}
      />

    </div>
  );
}