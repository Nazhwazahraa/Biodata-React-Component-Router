function SectionComponen() {
  return (
    <main>

      {/* HOME */}
      <section id="home" className="home">
        <div className="home-text">
          <p className="hello">HELLO, I'M</p>

          <h1>Nazhwa Sava Azahra</h1>

          <p>
            Mahasiswa Pendidikan Ilmu Komputer
            di Universitas Pendidikan Indonesia.
          </p>

          <a href="#about" className="button">
            About Me ♡
          </a>
        </div>

        <img
          src="/img/foto5.jpeg"
          className="profile"
          alt="Foto Nazhwa"
        />
      </section>


      {/* DATA DIRI */}
      <section id="about" className="about">
        <p className="label">ABOUT ME</p>

        <h2>My Biodata ♡</h2>

        <div className="biodata">

          <div>
            <strong>Nama</strong>
            <p>Nazhwa Sava Azahra</p>
          </div>

          <div>
            <strong>NIM</strong>
            <p>2505016</p>
          </div>

          <div>
            <strong>Program Studi</strong>
            <p>Pendidikan Ilmu Komputer</p>
          </div>

          <div>
            <strong>Universitas</strong>
            <p>Universitas Pendidikan Indonesia</p>
          </div>

          <div>
            <strong>Hobi</strong>
            <p>Mendengarkan musik & bermain game</p>
          </div>

          <div>
            <strong>Cita-cita</strong>
            <p>Menjadi kaya raya</p>
          </div>

        </div>
      </section>


      {/* DOCUMENTATION */}
      <section id="documentation" className="documentation">
        <p className="label">MY DOCUMENTATION</p>

        <h2>Little Moments ♡</h2>

        <p className="section-description">
          Beberapa momen dan dokumentasi
          bersama teman dan keluarga.
        </p>

        <div className="gallery">
          <img src="/img/foto1.jpeg" alt="Dokumentasi 1" />
          <img src="/img/foto2.jpeg" alt="Dokumentasi 2" />
          <img src="/img/foto3.jpeg" alt="Dokumentasi 3" />
          <img src="/img/foto4.jpeg" alt="Dokumentasi 4" />
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="contact">
        <p className="label">LET'S CONNECT</p>

        <h2>Connect With Me ♡</h2>

        <p className="section-description">
          Feel free to connect and say hello!
        </p>

        <div className="social">

          <a
            href="https://instagram.com/sunghoonparj"
            target="_blank"
            rel="noreferrer"
          >
            <span>Instagram</span>
            @sunghoonparj
          </a>

          <a
            href="https://linkedin.com/nazhwa-sava-azahra"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            Nazhwa Sava Azahra
          </a>

          <a
            href="https://github.com/Nazhwazahraa"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            Nazhwazahraa
          </a>

          <a href="mailto:nazhwaazahra@student.upi.edu">
            <span>Email</span>
            nazhwaazahra@student.upi.edu
          </a>

        </div>
      </section>

    </main>
  )
}

export default SectionComponen