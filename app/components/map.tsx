
'use client'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker} from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';

import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  return (
<MapContainer center={[-33.9249, 18.4241]} style={{ height: '400px', width: '100%' }} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  );
};

export default LeafletMap;