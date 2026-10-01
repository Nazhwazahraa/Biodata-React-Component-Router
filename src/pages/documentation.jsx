import Section from '../components/Section'

function Documentation() {
  return (
    <Section className="documentation">

      <p className="label">
        MY DOCUMENTATION ✦
      </p>

      <h2>
        Little Moments ♡
      </h2>

      <p className="section-description">
        Beberapa momen dan dokumentasi
        bersama teman dan keluarga ୨୧
      </p>

      <div className="gallery">

        <div className="photo-card photo-one">
          <span>♡</span>
          <img
            src="/img/foto1.jpeg"
            alt="Dokumentasi 1"
          />
        </div>

        <div className="photo-card photo-two">
          <span>✦</span>
          <img
            src="/img/foto6.jpeg"
            alt="Dokumentasi 2"
          />
        </div>

        <div className="photo-card photo-three">
          <span>୨୧</span>
          <img
            src="/img/foto3.jpeg"
            alt="Dokumentasi 3"
          />
        </div>

        <div className="photo-card photo-four">
          <span>♡</span>
          <img
            src="/img/foto4.jpeg"
            alt="Dokumentasi 4"
          />
        </div>

      </div>

    </Section>
  )
}

export default Documentation