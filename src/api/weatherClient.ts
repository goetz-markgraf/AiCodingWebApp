export interface WeatherData {
    location: string;
    temperature: number;
    description: string;
}

export async function getWeather(location: string): Promise<WeatherData> {
    const response = await fetch(`http://localhost:8000/weather/${location}`);
    const data = await response.json();
    return {
        location: data.location,
        temperature: data.temperature,
        description: data.description
    };
}
