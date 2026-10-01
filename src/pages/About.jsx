import Section from '../components/Section'

function About() {
return ( <Section className="about">

  <p className="label">
    ABOUT ME ✦
  </p>

  <h2>My Biodata ♡</h2>

  <p className="section-description">
    A little information about me ୨୧
  </p>

  <div className="biodata">

    <div>
      <span className="card-symbol">♡</span>
      <strong>Nama</strong>
      <p>Nazhwa Sava Azahra</p>
    </div>

    <div>
      <span className="card-symbol">✦</span>
      <strong>NIM</strong>
      <p>2505016</p>
    </div>

    <div>
      <span className="card-symbol">୨୧</span>
      <strong>Program Studi</strong>
      <p>Pendidikan Ilmu Komputer</p>
    </div>

    <div>
      <span className="card-symbol">♡</span>
      <strong>Universitas</strong>
      <p>Universitas Pendidikan Indonesia</p>
    </div>

    <div>
      <span className="card-symbol">♫</span>
      <strong>Hobi</strong>
      <p>Mendengarkan musik & bermain game</p>
    </div>

    <div>
      <span className="card-symbol">✧</span>
      <strong>Cita-cita</strong>
      <p>Menjadi kaya raya</p>
    </div>

  </div>

</Section>

)
}

export default About
