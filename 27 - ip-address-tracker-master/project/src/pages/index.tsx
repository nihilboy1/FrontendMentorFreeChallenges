import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { FormEvent, useState } from 'react'
import Head from '../../node_modules/next/head'
import { Header } from '../components/Header'
import { InfosBar } from '../components/InfosBar'
import { ipGeolocation } from '../services/ipgeolocation'
import S from '../styles/Home.module.scss'

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
  // Importação do componente de mapa
  const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
    loading: () => (
      <h2 style={{ marginTop: '10rem', fontSize: '2rem' }}>
        Mapa carregando... Aguarde...
      </h2>
    )
  })

  // ----

  const [mapCoordinates, setMapCoordinates] = useState<number[] | null>([
    Number(userGeolocApiSpecificInfos.lat),
    Number(userGeolocApiSpecificInfos.lon)
  ])
  const [allSpecificData, setAllSpecificData] = useState(
    userGeolocApiSpecificInfos
  )

  async function setMapPosition(ipOrURL: string) {
    const res = await ipGeolocation.get(`${ipOrURL}`)

    const fetchGeolocApiSpecificInfos = {
      ip: res.data.query,
      location: {
        city: res.data.city,
        state_prov: res.data.regionName
      },
      timezone: res.data.timezone,
      isp: res.data.isp,
      lat: res.data.lat,
      lon: res.data.lon
    }

    const fetchPosition = [
      Number(fetchGeolocApiSpecificInfos.lat),
      Number(fetchGeolocApiSpecificInfos.lon)
    ]

    setAllSpecificData(fetchGeolocApiSpecificInfos)
    setMapCoordinates(fetchPosition)
  }

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <Header setMapPosition={setMapPosition} />
      <main className={S.mainBox}>
        <InfosBar allSpecificData={allSpecificData} />
        <Map mapCoordinates={mapCoordinates} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await ipGeolocation.get('')
  console.log(res.data)

  const userGeolocApiSpecificInfos = {
    ip: res.data.query,
    location: {
      city: res.data.city,
      state_prov: res.data.regionName
    },
    timezone: res.data.timezone,
    isp: res.data.isp,
    lat: res.data.lat,
    lon: res.data.lon
  }

  return {
    props: { userGeolocApiSpecificInfos }
  }
}
