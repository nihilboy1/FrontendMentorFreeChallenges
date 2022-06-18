import S from './style.module.scss'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { memo } from 'react'

interface MapProps {
  mapCoordinates: number[]
}

const Map = ({ mapCoordinates }) => {
  return (
    <div className={S.mapContainer}>
      <MapContainer
        center={mapCoordinates}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapCoordinates}>a</Marker>
      </MapContainer>
    </div>
  )
}
export default memo(Map)
