export type SensorData = {
  temperature: number;
  humidity: number;
  soilMoisture: number;
  pestActivity: number;
};

export function generateSensorData(): SensorData {
  return {
    temperature: 14 + Math.random() * 10,
    humidity: 50 + Math.random() * 40,
    soilMoisture: 40 + Math.random() * 50,
    pestActivity: Math.floor(Math.random() * 100),
  };
}