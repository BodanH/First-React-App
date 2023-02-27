import "./main.css";

const HomePage = () => {
    return ( 
        <main className="main">
          <section className="section__title title-section">
            <div className="title-section__container title-section-container">
              <div className="title-section-container__content title-section-content">
                <h2 className="title-section-content__subtitle">Hi, my name is<span> Bohdan</span></h2>
                <h1 className="title-section-content__title">a frontend developer</h1>
                <p className="title-section-content__description">with passion for learning and creating.</p>
                <button type="download" className="title-section-content__button">Download CV</button>
              </div>
            </div>
          </section>
          <section id="skills__section" className="skills__section section-skills">
            <div className="section-skills__container section-skills-container">
              <div className="section-skills-container__content section-skills-content">
                <h2 className="section-skills-content__title">Skills</h2>
                <div className="section-skills-content__skills">
                  <div className="section-skills-content__skills-front-end">
                    <h3 className="skills-front-end__title">Frontend</h3>
                    <p className="skills-front-end__description">
                      JavaScript, ReactJS, HTML, CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
     );
}
 
export default HomePage;