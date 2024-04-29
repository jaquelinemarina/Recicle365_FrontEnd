import style from '../../components/map/map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
    const position = [-27.586286149983113, -48.553167993931794]
    const position2 = [-27.596991961607397, -48.55320076179115]
    const position3 = [-27.5998619888946, -48.51941520411855]
    const position4 = [-27.569793286086057, -48.53723017404106]
    const position5 = [-27.5789506202227, -48.50862964830014]
    const position6 = [-27.59729711741571, -48.5497331374643]
    const position7 = [-27.599690472831547, -48.51142904829937]

    return (
        <MapContainer
            center={position}
            zoom={13}
            className={style.mapContainer}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup> Beira Mar Norte <br />(vidro, papel e plástico)</Popup>
            </Marker>
            <Marker position={position2}>
                <Popup> Mercado Público <br />(papel, plástico, metal, vidro, e orgânico)</Popup>
            </Marker>
            <Marker position={position3}>
                <Popup>UFSC<br />(baterias e plástico)</Popup>
            </Marker>
            <Marker position={position4}>
                <Popup>Ponta do Coral<br />(papel, plástico e metal)</Popup>
            </Marker>
            <Marker position={position5}>
                <Popup>Ponta do Coral<br />(papel, plástico e metal)</Popup>
            </Marker>
            <Marker position={position6}>
                <Popup>Praça XV<br />(plástico e vidro)</Popup>
            </Marker>
            <Marker position={position7}>
                <Popup>Parque Ecológico do Córrego Grande<br />(papel, plástico, metal e vidro)</Popup>
            </Marker>
        </MapContainer>
    )
}
export default Map