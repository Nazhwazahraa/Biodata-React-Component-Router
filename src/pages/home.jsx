import { Link } from 'react-router-dom'
import Section from '../components/Section'

function Home() {
  return (
    <Section className="home">

      <div className="home-decoration">
        ✦
      </div>

      <div className="home-text">

        <p className="hello">
          HELLO, I'M ♡
        </p>

        <h1>
          Nazhwa Sava Azahra
        </h1>

        <p>
          Mahasiswa Pendidikan Ilmu Komputer
          di Universitas Pendidikan Indonesia.
        </p>

        <Link to="/about" className="button">
          About Me ♡
        </Link>

      </div>

      <div className="profile-frame">

        <span className="profile-star">
          ✦
        </span>

        <img
          src="/img/foto5.jpeg"
          className="profile"
          alt="Foto Nazhwa"
        />

        <span className="profile-heart">
          ♡
        </span>

      </div>

    </Section>
  )
}

export default Home