import S from './style.module.scss'

interface InfosBarProps {
  allSpecificData: {
    ip: string
    isp: string
    location: { city: string; state_prov: string }
    lat: string
    lon: string
    timezone: string
  }
}

export function InfosBar({ allSpecificData }: InfosBarProps) {
  return (
    <article className={S.infosBarBox}>
      <section>
        <h2>IP ADDRESS</h2>
        <p>{allSpecificData.ip}</p>
      </section>
      <section>
        <h2>LOCATION</h2>
        <p>
          {allSpecificData.location.city ? `${allSpecificData.location.city}, ` : ''}
          {allSpecificData.location.state_prov}
        </p>
      </section>
      <section>
        <h2>TIMEZONE</h2>
        <p>UTC {allSpecificData.timezone}</p>
      </section>
      <section className={S.noBorder}>
        <h2>ISP</h2>
        <p>{allSpecificData.isp}</p>
      </section>
    </article>
  )
}
