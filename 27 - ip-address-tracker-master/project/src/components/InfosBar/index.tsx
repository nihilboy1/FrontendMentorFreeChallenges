import S from './style.module.scss'

interface InfosBarProps {
  neededData: {
    ip: string
    isp: string
    lat: string
    location: { city: string; state_prov: string }
    long: string
    timezone: { offset: number }
  }
}

export function InfosBar({ neededData }: InfosBarProps) {
  return (
    <article className={S.infosBarBox}>
      <section>
        <h2>IP ADDRESS</h2>
        <p>{neededData.ip}</p>
      </section>
      <section>
        <h2>LOCATION</h2>
        <p>
          {neededData.location.city}, {neededData.location.state_prov}
        </p>
      </section>
      <section>
        <h2>TIMEZONE</h2>
        <p>UTC {neededData.timezone.offset}:00</p>
      </section>
      <section className={S.noBorder}>
        <h2>ISP</h2>
        <p>{neededData.isp}</p>
      </section>
    </article>
  )
}
