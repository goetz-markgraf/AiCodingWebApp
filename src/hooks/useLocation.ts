import { useState, useEffect } from 'react';
import { getWeather, WeatherData } from '../api/weatherClient';

const useLocation = (location: string) => {
    const [weather, setWeather] = useState<WeatherData | undefined>(undefined);

    useEffect(() => {
        if (!location) {
            setWeather(undefined);
            return;
        }

        const fetchWeather = async () => {
            try {
                const weatherData = await getWeather(location);
                setWeather(weatherData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setWeather(undefined);
            }
        };

        fetchWeather();
    }, [location]);

    return weather;
};

export default useLocation;
