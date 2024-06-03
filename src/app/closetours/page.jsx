"use client";
import CloseToursCard from "@/components/uiComponents/CloseToursCard";
import ErrorAlert from "@/components/uiComponents/ErrorAlert";
import Spinner from "@/components/uiComponents/Spinner";
import TourCard from "@/components/uiComponents/TourCard";
import { fetchClosestTour } from "@/lib/actions/tours";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const LocationComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGeolocation = () => {
      if ("geolocation" in navigator) {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const response = await fetchClosestTour(latitude, longitude);
              if (response?.success) {
                setData(response.success);
              } else if (response?.error) {
                toast.error(response.error);
              }
            } catch (err) {
              toast.error("Failed to fetch data.");
            } finally {
              setIsLoading(false);
            }
          },
          (error) => {
            setError("Unable to retrieve your location.");
            setIsLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    getGeolocation();
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-xl font-bold mb-10">Closest Tours</h1>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((tour, idx) => (
          <CloseToursCard data={tour} />
        ))}
      </div>
    </div>
  );
};

export default LocationComponent;
