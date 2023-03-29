import './index.css'

const Home = () => (
  <div>
    <div className="bg-container">
      <h1 className="main-heading">
        Learn French online and gain the confidence to speak fluently.
      </h1>
      <div className="brochure-container">
        <p className="brochure-description">
          Learn about all the basics and wonders of the French Language by our
          renowned trainer and get professional guidance with native style
          speaking skills.
        </p>
        <button className="brochure-button" type="button">
          Request Brochure
        </button>
        <div className="course-details">
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
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/gokulc/image/upload/v1680010877/image_1_ame3lt.png"
              className="bonjour-image"
              alt="bonjourimage"
            />
          </div>
        </div>
      </div>
      <div className="learning-container">
        <h1 className="learning-heading">
          Gain Mastery on all levels of CEFR (The Common European Framework of
          Reference for Languages: Learning, teaching, assessment): A1, A2, B1,
          B2, C1, C2 of the French Language
        </h1>
        <div className="learning-field">
          <div className="card">
            <div className="top-portion">
              <p>Absolute Beginner</p>
              <h1>A1</h1>
            </div>
            <div className="bottom-portion">
              <p>✅Use familiar everyday expressions</p>
              <p>✅Introduce yourselves and others</p>
              <p>✅Interact in a simple conversation</p>
            </div>
          </div>
          <div className="card">
            <div className="top-portion">
              <p>Beginner</p>
              <h1>A2</h1>
            </div>
            <div className="bottom-portion">
              <p>✅Can understand familiar topics</p>
              <p>✅Can communicate routine tasks</p>
              <p>✅Can describe your background</p>
            </div>
          </div>
          <div className="card">
            <div className="top-portion">
              <p>Intermediate</p>
              <h1>B1</h1>
            </div>
            <div className="bottom-portion">
              <p>✅Discuss basics like work,school, etc..</p>
              <p>✅Handle situations whilst travelling </p>
              <p>✅Understand text on familiar topics</p>
            </div>
          </div>
          <div className="card">
            <div className="top-portion">
              <p>Intermediate</p>
              <h1>B2</h1>
            </div>
            <div className="bottom-portion">
              <p>✅Can understand complex texts</p>
              <p>✅Can talk with native speakers</p>
              <p>✅Can write and explain viewpoints</p>
            </div>
          </div>
          <div className="card">
            <div className="top-portion">
              <p>Advanced</p>
              <h1>C1</h1>
            </div>
            <div className="bottom-portion">
              <p>✅Can read and write complicated texts</p>
              <p>✅Can express yourself fluently</p>
              <p>✅Can use language creatively</p>
            </div>
          </div>
        </div>
        <div>
          <button className="start-button" type="button">
            Start Learning French Online
          </button>
        </div>
      </div>
    </div>
    <div className="bg-container">
      <h1 className="french-heading">Is learning French worth it?</h1>
      <div className="brochure-container">
        <img
          src="https://res.cloudinary.com/gokulc/image/upload/v1680053158/All-languages_FRENCH_1_xddsuk.png"
          className="french-logo"
          alt="french logo"
        />
      </div>
      <div className="french-description">
        <p>
          Learning any language is worth your time! Whether it’s French or
          another language, learning a language allows you to connect with
          people from all over the world, experience different cultures and help
          with a bit of brain training all at the same time! We’re living in an
          increasingly globalized world, so learning another language like
          French can help you to boost your career and the likelihood of finding
          a new job, make travelling much easier and it opens you up to a world
          of new entertainment, like music, art, books and films. Trust us, its
          definitely worth it.
        </p>
        <p>
          But outside of that, there are several more top reasons to learn
          French:
        </p>
        <p>
          ✅French is the official language of 29 countries. Open up those
          travel plans, y’all!
        </p>
        <p>
          ✅Learn about new cultures from around the globe: whether it’s
          cooking, fashion, theatre, arts or architecture, French offers access
          to a world of new interests.
        </p>

        <p>
          ✅French is a ‘romance’ language. That means it’ll get you closer to
          learning other languages like Spanish, Italian and Portuguese. Bonus!
        </p>
        <p>
          ✅When someone asks “Does anyone here speak French?” in any given
          scenario, you can be the hero they never knew they needed. 1 2 3 4.
        </p>
      </div>

      <div className="learning-container">
        <h1 className="french-course-heading">Our French Course Prices</h1>
        <div className="course-field">
          <div className="course-card">
            <h1 className="topic-heading">Introduction to French</h1>
            <h1 className="level-heading">Level A1</h1>
            <h1 className="amount-heading">Rs. 11990</h1>
            <p className="curriculum-description">Curriculum Includes</p>
            <p className="curriculum-details">
              Basic greetings and introduction, Phonetics, Grammar and
              Vocabulary
            </p>
            <p className="view-curriculum-description">
              View Detailed Curriculum
            </p>
            <button className="buy-btn" type="button">
              Buy Now
            </button>
          </div>
          <div className="course-card">
            <h1 className="topic-heading">Elementary Knowledge</h1>
            <h1 className="level-heading">Level A2</h1>
            <h1 className="amount-heading">Rs. 16970</h1>
            <p className="curriculum-description">Curriculum Includes</p>
            <p className="curriculum-details">
              Simple Communication, Grammar and Vocabulary
            </p>
            <p className="view-curriculum-description">
              View Detailed Curriculum
            </p>
            <button className="buy-btn" type="button">
              Buy Now
            </button>
          </div>
          <div className="course-card">
            <h1 className="topic-heading">Intermediate Knowledge</h1>
            <h1 className="level-heading">Level B1</h1>
            <h1 className="amount-heading">Rs. 35980</h1>
            <p className="curriculum-description">Curriculum Includes</p>
            <p className="curriculum-details">
              Cultural & Social know-hows, Complex Grammar and Professional
              Vocabulary
            </p>
            <p className="view-curriculum-description">
              View Detailed Curriculum
            </p>
            <button className="buy-btn" type="button">
              Buy Now
            </button>
          </div>
          <div className="course-card">
            <h1 className="topic-heading">Professional Knowledge</h1>
            <h1 className="level-heading">Level B2</h1>
            <h1 className="amount-heading">Rs. 38980</h1>
            <p className="curriculum-description">Curriculum Includes</p>
            <p className="curriculum-details">
              Degree of fluency, Express Opinions, Complex Grammar Structures
            </p>
            <p className="view-curriculum-description">
              View Detailed Curriculum
            </p>
            <button className="buy-btn" type="button">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
