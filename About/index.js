import './index.css'

const About = () => (
  <div className="about-container">
    <div className="language-portion">
      <div>
        <h1 className="language-heading">Learn More Than Just a Language</h1>
        <p className="language-description">
          Whether learning a foreign language is all about learning new cultures
          or obtaining vast career opportunities, we’re your go-to Language
          Academy!
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/gokulc/image/upload/v1680010877/image_1_ame3lt.png"
        className="bonjour-image"
        alt="bonjour"
      />
    </div>

    <div className="number-details">
      <div className="course-container">
        <img
          src="https://res.cloudinary.com/gokulc/image/upload/v1680010535/student_1_jk4bfc.png"
          className="image-logo"
          alt="imagelogo"
        />
        <div>
          <p className="numbers">5000+</p>
          <p className="number-descriptions">Happy Learners</p>
        </div>
      </div>
      <div className="course-container">
        <img
          src="https://res.cloudinary.com/gokulc/image/upload/v1680051215/bulb_2_uoljcl.png"
          className="image-logo"
          alt="imagelogo"
        />
        <div>
          <p className="numbers">50000+</p>
          <p className="number-descriptions">Hours of Enlightenment</p>
        </div>
      </div>
      <div className="course-container">
        <img
          src="https://res.cloudinary.com/gokulc/image/upload/v1680051215/training_1_vvgocn.png"
          className="image-logo"
          alt="imagelogo"
        />
        <div>
          <p className="numbers">150+</p>
          <p className="number-descriptions">Alpha Mentors</p>
        </div>
      </div>
    </div>
  </div>
)

export default About
