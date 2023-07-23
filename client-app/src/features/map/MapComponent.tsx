import { GoogleMap, InfoWindow, useLoadScript } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";


interface Props {
    lng: number,
    lat: number
}

export default function Map({lng, lat}: Props) {
  const [, setClicks] = useState<google.maps.LatLng[]>([]);

  const setMarker = (e: google.maps.MapMouseEvent) => {
    setClicks([e.latLng!]);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBoCFNrDTDGDclu_B5TTacDlxleTHrpZqc",
  });

  const center = {
    lat: lat,
    lng: lng,
  };

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (!isLoaded) return <div> Cargando...</div>;

  return (
    <GoogleMap
      zoom={20}
      center={center}
      mapContainerStyle={mapContainerStyle}
      options={options}
      onClick={setMarker}
    >
    </GoogleMap>
  );
}
