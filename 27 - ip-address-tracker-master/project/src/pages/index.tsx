import dynamic from 'next/dynamic'
import Head from '../../node_modules/next/head'
import S from '../styles/Home.module.scss'
import 'react-toastify/dist/ReactToastify.css'

import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Header } from '../components/Header'
import { InfosBar } from '../components/InfosBar'
import { ApiGeolocation } from '../services/apiGeolocation'
import { toast, ToastContainer } from 'react-toastify'

interface userGeolocApiSpecificInfosProps {
  ip: string
  isp: string
  location: { city: string; state_prov: string }
  lat: string
  lon: string
  timezone: string
}

interface HomeProps {
  userGeolocApiSpecificInfos: userGeolocApiSpecificInfosProps
}

export default function Home({ userGeolocApiSpecificInfos }: HomeProps) {
  const MapDynamicComponent = dynamic(() => import('../components/Map'), {
    ssr: false,
    loading: () => (
      <h2 style={{ marginTop: '10rem', fontSize: '2rem' }}>
        Mapa carregando... Aguarde...
      </h2>
    )
  })
  const [addressInput, setAddressInput] = useState('')

  const [mapCoordinates, setMapCoordinates] = useState<number[] | null>([
    Number(userGeolocApiSpecificInfos.lat),
    Number(userGeolocApiSpecificInfos.lon)
  ])
  const [allSpecificData, setAllSpecificData] =
    useState<userGeolocApiSpecificInfosProps>(userGeolocApiSpecificInfos)

  async function setMapPosition(ipOrURL: string) {
    try {
      const res = await ApiGeolocation.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_2y5n6qpPF7LlowoSVMesNBQP7iH3J&ipAddress=${ipOrURL}`
      )

      const fetchGeolocApiSpecificInfos = {
        ip: res.data.ip,
        location: {
          city: res.data.location.city,
          state_prov: res.data.location.region
        },
        timezone: res.data.location.timezone,
        isp: res.data.isp,
        lat: res.data.location.lat,
        lon: res.data.location.lng
      }

      const fetchPosition = [
        Number(fetchGeolocApiSpecificInfos.lat),
        Number(fetchGeolocApiSpecificInfos.lon)
      ]

      setAllSpecificData(fetchGeolocApiSpecificInfos)
      setMapCoordinates(fetchPosition)
    } catch {
      toast.error('Essa Consulta Não Retornou Dados Válidos')
      setAddressInput('')
    }
  }

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <Header
        setMapPosition={setMapPosition}
        setAddressInput={setAddressInput}
        addressInput={addressInput}
      />
      <main className={S.mainBox}>
        <InfosBar allSpecificData={allSpecificData} />
        <MapDynamicComponent mapCoordinates={mapCoordinates} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await ApiGeolocation.get(
    'country,city?apiKey=at_2y5n6qpPF7LlowoSVMesNBQP7iH3J&ipAddress='
  )

  const userGeolocApiSpecificInfos = {
    ip: res.data.ip,
    location: {
      city: res.data.location.city,
      state_prov: res.data.location.region
    },
    timezone: res.data.location.timezone,
    isp: res.data.isp,
    lat: res.data.location.lat,
    lon: res.data.location.lng
  }

  return {
    props: { userGeolocApiSpecificInfos }
  }
}
