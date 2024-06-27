import { useEffect, useRef, useState } from "react";
import data from "../lib/DataMaps";

function Maps() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const maxBounds = [
    [92.0, -12.0], // Southwest coordinates
    [144.0, 10.0], // Northeast coordinates
  ];

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://api.maptiler.com/maps/streets/style.json?key=Z66qvQDdg6FhJML8HUXd",
      center: [113.9213, -0.7893], // Center of Indonesia
      zoom: 4,
      maxBounds,
    });

    map.current.on("load", async () => {
      const image = await map.current.loadImage("https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png");
      // Add an image to use as a custom marker
      map.current.addImage("custom-marker", image.data);

      map.current.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: data.map((item) => ({
            type: "Feature",
            properties: {
              description: `<strong>${item.name}</strong><p><img src='${item.imgUrl}' alt='Rumah Tradisional ${item.rumah}' width='100'><br>Title: ${item.title}<br>Rumah: ${item.rumah}<br>Pakaian: ${item.pakaian}<br>Musik: ${
                item.musik
              }<br>Tari: ${item.tari}<br>Senjata: ${item.senjata}<br>Bahasa: ${item.bahasa}</p> <br> <a href='/${item.name.toLowerCase()}'>Lihat Selengkapnya</a>`,
            },
            geometry: {
              type: "Point",
              coordinates: item.coordinates,
            },
          })),
        },
      });

      // Add a layer showing the places.
      map.current.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": "custom-marker",
          "icon-overlap": "always",
        },
      });

      // Create a popup, but don't add it to the map yet.
      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.current.on("mouseenter", "places", (e) => {
        // Change the cursor style as a UI indicator.
        map.current.getCanvas().style.cursor = "pointer";

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.

        popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
      });

      popup.on("close", () => {
        setPopupOpen(false);
      });

      popup.on("open", () => {
        setPopupOpen(true);
        console.log("popup : ", popupOpen);
      });

      map.current.on("mouseleave", "places", () => {
        map.current.getCanvas().style.cursor = "";
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".maplibregl-popup-content")) {
          popup.remove();
        }
      });
    });
  }, []);

  return (
    <section>
      <div style={{ width: "100vw", padding: "20px", backgroundColor: "#fff" }} className="map-wrap">
        <h1 style={{ fontSize: "2rem" }}>Maps</h1>
        <div ref={mapContainer} className="map"></div>
      </div>
    </section>
  );
}

export default Maps;
