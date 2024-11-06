import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ lat, lng, width, height, zoom }) => {
    return (
        <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={true} style={{ width, height }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                <Popup>Harro</Popup>
            </Marker>
        </MapContainer>
    )
};

export default LeafletMap;