import { useEffect, useRef, useState } from "react";
// import maplibregl from "maplibre-gl/dist/maplibre-gl";
// import "maplibre-gl/dist/maplibre-gl.css";

function App() {
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
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Aceh</strong><p><img src='URL_RUMAH_TRADISIONAL_ACEH' alt='Rumah Tradisional Aceh' width='100'><br>Title: Sultan<br>Rumah: Rumoh Aceh<br>Pakaian: Ulee Balang<br>Musik: Seudati, Rapai<br>Tari: Tari Saman, Tari Seudati<br>Senjata: Rencong<br>Bahasa: Aceh</p> <br> <a href='/asd'>Lihat selengkapnya</a>",
              },
              geometry: {
                type: "Point",
                coordinates: [95.4192, 5.5544], // Aceh
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sumatera Utara</strong><p><img src='URL_RUMAH_TRADISIONAL_SUMUT' alt='Rumah Tradisional Sumatera Utara' width='100'><br>Title: Raja<br>Rumah: Bolon<br>Pakaian: Ulos<br>Musik: Gondang<br>Tari: Tari Tor-Tor<br>Senjata: Piso Gaja Dombak<br>Bahasa: Batak</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [98.6669, 3.5952], // Sumatera Utara
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sumatera Barat</strong><p><img src='URL_RUMAH_TRADISIONAL_SUMBAR' alt='Rumah Tradisional Sumatera Barat' width='100'><br>Title: Datuak<br>Rumah: Rumah Gadang<br>Pakaian: Bundo Kanduang<br>Musik: Saluang<br>Tari: Tari Piring<br>Senjata: Karih<br>Bahasa: Minangkabau</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [100.3677, -0.3054], // Sumatera Barat
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Riau</strong><p><img src='URL_RUMAH_TRADISIONAL_RIAU' alt='Rumah Tradisional Riau' width='100'><br>Title: Tengku<br>Rumah: Rumah Lancang<br>Pakaian: Melayu<br>Musik: Kompang<br>Tari: Tari Zapin<br>Senjata: Keris<br>Bahasa: Melayu</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [101.4477, 0.5333], // Riau
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Jambi</strong><p><img src='URL_RUMAH_TRADISIONAL_JAMBI' alt='Rumah Tradisional Jambi' width='100'><br>Title: Depati<br>Rumah: Kajang Lako<br>Pakaian: Melayu Jambi<br>Musik: Sekdu<br>Tari: Tari Sekapur Sirih<br>Senjata: Tombak<br>Bahasa: Jambi</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [103.6131, -1.6106], // Jambi
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sumatera Selatan</strong><p><img src='URL_RUMAH_TRADISIONAL_SUMSEL' alt='Rumah Tradisional Sumatera Selatan' width='100'><br>Title: Sultan<br>Rumah: Limas<br>Pakaian: Aesan Gede<br>Musik: Tanjidor<br>Tari: Tari Gending Sriwijaya<br>Senjata: Trisula<br>Bahasa: Palembang</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [104.7458, -2.9761], // Sumatera Selatan
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Bengkulu</strong><p><img src='URL_RUMAH_TRADISIONAL_BENGKULU' alt='Rumah Tradisional Bengkulu' width='100'><br>Title: Batin<br>Rumah: Bubungan Lima<br>Pakaian: Rejang<br>Musik: Serdam<br>Tari: Tari Kejei<br>Senjata: Badik<br>Bahasa: Bengkulu</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [102.2655, -3.8004], // Bengkulu
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Lampung</strong><p><img src='URL_RUMAH_TRADISIONAL_LAMPUNG' alt='Rumah Tradisional Lampung' width='100'><br>Title: Suttan<br>Rumah: Nuwou Sesat<br>Pakaian: Tapis<br>Musik: Gamolan<br>Tari: Tari Cangget<br>Senjata: Terapang<br>Bahasa: Lampung</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [105.258, -5.448], // Lampung
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kepulauan Bangka Belitung</strong><p><img src='URL_RUMAH_TRADISIONAL_BABEL' alt='Rumah Tradisional Kepulauan Bangka Belitung' width='100'><br>Title: Depati<br>Rumah: Rakit Limas<br>Pakaian: Paksian<br>Musik: Dambus<br>Tari: Tari Campak<br>Senjata: Siwar Panjang<br>Bahasa: Melayu</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [106.1144, -2.7411], // Kepulauan Bangka Belitung
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kepulauan Riau</strong><p><img src='URL_RUMAH_TRADISIONAL_KEPRI' alt='Rumah Tradisional Kepulauan Riau' width='100'><br>Title: Datuk<br>Rumah: Atap Limas<br>Pakaian: Kebaya Labuh<br>Musik: Gamelan Melayu<br>Tari: Tari Melemang<br>Senjata: Badik<br>Bahasa: Melayu</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [104.0305, 1.0332], // Kepulauan Riau
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>DKI Jakarta</strong><p><img src='URL_RUMAH_TRADISIONAL_JAKARTA' alt='Rumah Tradisional Jakarta' width='100'><br>Title: Bang Jago<br>Rumah: Kebaya<br>Pakaian: Betawi<br>Musik: Tanjidor<br>Tari: Tari Topeng<br>Senjata: Golok<br>Bahasa: Betawi</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [106.8456, -6.2088], // DKI Jakarta
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Jawa Barat</strong><p><img src='URL_RUMAH_TRADISIONAL_JABAR' alt='Rumah Tradisional Jawa Barat' width='100'><br>Title: Satria<br>Rumah: Julang Ngapak<br>Pakaian: Sunda<br>Musik: Angklung<br>Tari: Tari Jaipong<br>Senjata: Kujang<br>Bahasa: Sunda</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [107.6191, -6.9175], // Jawa Barat
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Jawa Tengah</strong><p><img src='URL_RUMAH_TRADISIONAL_JATENG' alt='Rumah Tradisional Jawa Tengah' width='100'><br>Title: Sunan<br>Rumah: Joglo<br>Pakaian: Kebaya<br>Musik: Gamelan<br>Tari: Tari Gambyong<br>Senjata: Keris<br>Bahasa: Jawa</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [110.2038, -7.0044], // Jawa Tengah
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>DI Yogyakarta</strong><p><img src='URL_RUMAH_TRADISIONAL_JOGJA' alt='Rumah Tradisional DI Yogyakarta' width='100'><br>Title: Sultan<br>Rumah: Joglo<br>Pakaian: Kebaya<br>Musik: Gamelan<br>Tari: Tari Serimpi<br>Senjata: Keris<br>Bahasa: Jawa</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [110.3695, -7.7956], // DI Yogyakarta
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Jawa Timur</strong><p><img src='URL_RUMAH_TRADISIONAL_JATIM' alt='Rumah Tradisional Jawa Timur' width='100'><br>Title: Adipati<br>Rumah: Joglo<br>Pakaian: Beskap<br>Musik: Gamelan<br>Tari: Tari Remo<br>Senjata: Clurit<br>Bahasa: Jawa</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [112.7521, -7.2575], // Jawa Timur
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Banten</strong><p><img src='URL_RUMAH_TRADISIONAL_BANTEN' alt='Rumah Tradisional Banten' width='100'><br>Title: Sultan<br>Rumah: Baduy<br>Pakaian: Pangsi<br>Musik: Angklung Buhun<br>Tari: Tari Cokek<br>Senjata: Golok<br>Bahasa: Sunda</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [106.1503, -6.1104], // Banten
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Bali</strong><p><img src='URL_RUMAH_TRADISIONAL_BALI' alt='Rumah Tradisional Bali' width='100'><br>Title: Bendesa<br>Rumah: Gapura Candi Bentar<br>Pakaian: Payas Agung<br>Musik: Gamelan Bali<br>Tari: Tari Kecak<br>Senjata: Keris<br>Bahasa: Bali</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [115.1889, -8.4095], // Bali
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Nusa Tenggara Barat</strong><p><img src='URL_RUMAH_TRADISIONAL_NTB' alt='Rumah Tradisional Nusa Tenggara Barat' width='100'><br>Title: Lalu<br>Rumah: Dalam Loka<br>Pakaian: Lambung<br>Musik: Gendang Beleq<br>Tari: Tari Gandrung<br>Senjata: Keris<br>Bahasa: Sasak</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [116.1093, -8.6529], // Nusa Tenggara Barat
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Nusa Tenggara Timur</strong><p><img src='URL_RUMAH_TRADISIONAL_NTT' alt='Rumah Tradisional Nusa Tenggara Timur' width='100'><br>Title: Raja<br>Rumah: Sao Ria Tenda Bewa Moni<br>Pakaian: Ti'i Langga<br>Musik: Sasando<br>Tari: Tari Caci<br>Senjata: Sundu<br>Bahasa: Timor</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [123.5922, -10.1772], // Nusa Tenggara Timur
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kalimantan Barat</strong><p><img src='URL_RUMAH_TRADISIONAL_KALBAR' alt='Rumah Tradisional Kalimantan Barat' width='100'><br>Title: Raja<br>Rumah: Rumah Panjang<br>Pakaian: King Baba<br>Musik: Sape<br>Tari: Tari Monong<br>Senjata: Mandau<br>Bahasa: Dayak</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [109.3345, -0.0266], // Kalimantan Barat
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kalimantan Tengah</strong><p><img src='URL_RUMAH_TRADISIONAL_KALTENG' alt='Rumah Tradisional Kalimantan Tengah' width='100'><br>Title: Demang<br>Rumah: Betang<br>Pakaian: King Baba<br>Musik: Gandang<br>Tari: Tari Mandau<br>Senjata: Mandau<br>Bahasa: Dayak</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [113.904, -1.6815], // Kalimantan Tengah
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kalimantan Selatan</strong><p><img src='URL_RUMAH_TRADISIONAL_KALSEL' alt='Rumah Tradisional Kalimantan Selatan' width='100'><br>Title: Pangeran<br>Rumah: Bubungan Tinggi<br>Pakaian: Babaju Kun Galung Pacinan<br>Musik: Panting<br>Tari: Tari Baksa Kembang<br>Senjata: Mandau<br>Bahasa: Banjar</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [114.5944, -3.3194], // Kalimantan Selatan
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kalimantan Timur</strong><p><img src='URL_RUMAH_TRADISIONAL_KALTIM' alt='Rumah Tradisional Kalimantan Timur' width='100'><br>Title: Sultan<br>Rumah: Lamin<br>Pakaian: Ta'a<br>Musik: Sampek<br>Tari: Tari Hudoq<br>Senjata: Mandau<br>Bahasa: Dayak</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [117.25, 0.5387], // Kalimantan Timur
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Kalimantan Utara</strong><p><img src='URL_RUMAH_TRADISIONAL_KALTARA' alt='Rumah Tradisional Kalimantan Utara' width='100'><br>Title: Datuk<br>Rumah: Lamin<br>Pakaian: Ta'a<br>Musik: Sampek<br>Tari: Tari Hudoq<br>Senjata: Mandau<br>Bahasa: Dayak</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [117.0756, 2.4106], // Kalimantan Utara
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sulawesi Utara</strong><p><img src='URL_RUMAH_TRADISIONAL_SULUT' alt='Rumah Tradisional Sulawesi Utara' width='100'><br>Title: Walak<br>Rumah: Wale<br>Pakaian: Laku Tepu<br>Musik: Kolintang<br>Tari: Tari Maengket<br>Senjata: Sabel<br>Bahasa: Minahasa</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [124.8445, 1.4748], // Sulawesi Utara
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sulawesi Tengah</strong><p><img src='URL_RUMAH_TRADISIONAL_SULTENG' alt='Rumah Tradisional Sulawesi Tengah' width='100'><br>Title: Madika<br>Rumah: Souraja<br>Pakaian: Nggembe<br>Musik: Kakula<br>Tari: Tari Dero<br>Senjata: Pasatimpo<br>Bahasa: Kaili</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [119.8756, -0.8986], // Sulawesi Tengah
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sulawesi Selatan</strong><p><img src='URL_RUMAH_TRADISIONAL_SULSEL' alt='Rumah Tradisional Sulawesi Selatan' width='100'><br>Title: Arung<br>Rumah: Tongkonan<br>Pakaian: Baju Bodo<br>Musik: Gandrang Bulo<br>Tari: Tari Pakarena<br>Senjata: Badik<br>Bahasa: Bugis</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [119.4238, -5.145], // Sulawesi Selatan
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sulawesi Tenggara</strong><p><img src='URL_RUMAH_TRADISIONAL_SULTRA' alt='Rumah Tradisional Sulawesi Tenggara' width='100'><br>Title: La Ode<br>Rumah: Buton<br>Pakaian: Baju Wolio<br>Musik: Ganda<br>Tari: Tari Balumpa<br>Senjata: Badik<br>Bahasa: Wolio</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [122.5183, -4.1294], // Sulawesi Tenggara
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Sulawesi Barat</strong><p><img src='URL_RUMAH_TRADISIONAL_SULBAR' alt='Rumah Tradisional Sulawesi Barat' width='100'><br>Title: Maradika<br>Rumah: Boyang<br>Pakaian: Pattuqduq<br>Musik: Kecapi<br>Tari: Tari Patuddu<br>Senjata: Sunduq<br>Bahasa: Mandar</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [119.3639, -2.842], // Sulawesi Barat
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Gorontalo</strong><p><img src='URL_RUMAH_TRADISIONAL_GORONTALO' alt='Rumah Tradisional Gorontalo' width='100'><br>Title: Bu'ulu<br>Rumah: Dulohupa<br>Pakaian: Biliu<br>Musik: Polopalo<br>Tari: Tari Saronde<br>Senjata: Sabele<br>Bahasa: Gorontalo</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [123.0633, 0.6994], // Gorontalo
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Maluku</strong><p><img src='URL_RUMAH_TRADISIONAL_MALUKU' alt='Rumah Tradisional Maluku' width='100'><br>Title: Raja<br>Rumah: Baileo<br>Pakaian: Cele<br>Musik: Totobuang<br>Tari: Tari Cakalele<br>Senjata: Salawaku<br>Bahasa: Ambon</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [128.1962, -3.6546], // Maluku
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Maluku Utara</strong><p><img src='URL_RUMAH_TRADISIONAL_MALUT' alt='Rumah Tradisional Maluku Utara' width='100'><br>Title: Sultan<br>Rumah: Hibualamo<br>Pakaian: Manteren Lamo<br>Musik: Jiku<br>Tari: Tari Lenso<br>Senjata: Barakas<br>Bahasa: Ternate</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [127.5519, 1.732], // Maluku Utara
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Papua Barat</strong><p><img src='URL_RUMAH_TRADISIONAL_PAPUA_BARAT' alt='Rumah Tradisional Papua Barat' width='100'><br>Title: Ondoafi<br>Rumah: Honai<br>Pakaian: Koteka<br>Musik: Tifa<br>Tari: Tari Musyoh<br>Senjata: Busur dan Panah<br>Bahasa: Papua</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [133.1747, -1.3361], // Papua Barat
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Papua</strong><p><img src='URL_RUMAH_TRADISIONAL_PAPUA' alt='Rumah Tradisional Papua' width='100'><br>Title: Ondoafi<br>Rumah: Honai<br>Pakaian: Koteka<br>Musik: Tifa<br>Tari: Tari Yospan<br>Senjata: Busur dan Panah<br>Bahasa: Papua</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [138.0803, -4.2699], // Papua
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Papua Selatan</strong><p><img src='URL_RUMAH_TRADISIONAL_PAPUA_SELATAN' alt='Rumah Tradisional Papua Selatan' width='100'><br>Title: Ondoafi<br>Rumah: Honai<br>Pakaian: Koteka<br>Musik: Tifa<br>Tari: Tari Yospan<br>Senjata: Busur dan Panah<br>Bahasa: Papua</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [139.3471, -6.2953], // Papua Selatan
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Papua Pegunungan</strong><p><img src='URL_RUMAH_TRADISIONAL_PAPUA_PEGUNUNGAN' alt='Rumah Tradisional Papua Pegunungan' width='100'><br>Title: Ondoafi<br>Rumah: Honai<br>Pakaian: Koteka<br>Musik: Tifa<br>Tari: Tari Yospan<br>Senjata: Busur dan Panah<br>Bahasa: Papua</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [137.0322, -3.5592], // Papua Pegunungan
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  "<strong>Papua Tengah</strong><p><img src='URL_RUMAH_TRADISIONAL_PAPUA_TENGAH' alt='Rumah Tradisional Papua Tengah' width='100'><br>Title: Ondoafi<br>Rumah: Honai<br>Pakaian: Koteka<br>Musik: Tifa<br>Tari: Tari Yospan<br>Senjata: Busur dan Panah<br>Bahasa: Papua</p>",
              },
              geometry: {
                type: "Point",
                coordinates: [137.7167, -3.3484], // Papua Tengah
              },
            },
          ],
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
    <div className="map-wrap">
      <div ref={mapContainer} className="map"></div>
    </div>
  );
}

export default App;
