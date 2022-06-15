import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import Head from '../../node_modules/next/head'
import { Header } from '../components/Header'
import { InfosBar } from '../components/InfosBar'
import Map from '../components/Map'
import { ipGeolocation } from '../services/ipgeolocation'
import S from '../styles/Home.module.scss'

interface HomeProps {
  geolocApiSpecificInfos: {
    ip: string
    isp: string
    lat: string
    location: { city: string; state_prov: string }
    long: string
    timezone: { offset: number }
  }
}

export default function Home({ geolocApiSpecificInfos }: HomeProps) {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <Header />
      <main className={S.mainBox}>
        <InfosBar neededData={geolocApiSpecificInfos} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await ipGeolocation.get(
    `ipgeo?apiKey=b8006edbded3488fadf4f7d0311d7d8c`
  )

  const geolocApiSpecificInfos = {
    ip: res.data.ip,
    location: {
      city: res.data.city,
      state_prov: res.data.state_prov
    },
    timezone: {
      offset: res.data.time_zone.offset
    },
    isp: res.data.isp,
    lat: res.data.latitude,
    long: res.data.longitude
  }

  return {
    props: { geolocApiSpecificInfos }
  }
}
