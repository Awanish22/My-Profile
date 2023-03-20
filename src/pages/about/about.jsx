import cv from '../../assets/Awanish.pdf'
// import level from '../../assets/English level.pdf'
// import certificate from '../../assets/it_sertifikat.pdf'
import './about.css';
import GoBack from '../../components/go-back/go-back';

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <GoBack />
        <div className="block">
          <h2 data-aos='zoom-in-up'>About Me</h2>
        </div>
        <div className="about-content">
          <h3 data-aos='zoom-in-up' data-aos-delay='300'>I'm Awanish - <span>Full-Stack Developer</span></h3>
          <p data-aos='zoom-in-up' data-aos-delay='400'>
            From India, 
            {/* {new Date().getFullYear() - 2001} years old */}
             working with JavaScript . To be honest, I don't have
            real experience with MERN because I'm new to this field.I have experience with LARAVEL & VUEJS I have been studying
            front-end for 6 months. I can
            prepare a project and read and improve other people's code. I have
            good skills in MERN Stack. And besides,  I know
            Redux & Toolkit  for state management.
          </p>
        </div>
        <div className="grid-row-2">
          <div className="grid-2">
            {/* <div className="personal-info-1">
              <p data-aos='zoom-in-up' data-aos-delay='500'>Birthday: <span>08 Jun, 2001</span></p>
              <p data-aos='zoom-in-up' data-aos-delay='600'>Age: <span>22</span></p>
              <p data-aos='zoom-in-up' data-aos-delay='700'>City:
                <span>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Samarkand,+Uzbekistan/@39.6402225,66.6382411,10z/data=!3m1!4b1!4m5!3m4!1s0x3f4d191960077df7:0x487636d9d13f2f57!8m2!3d39.627012!4d66.9749731">
                    Samarkand
                  </a>
                </span>
              </p>
            </div> */}
            <div className="personal-info-2">
              <p data-aos='zoom-in-up' data-aos-delay='500'>Email:
                <span>
                  <a target="_blank" rel="noopener noreferrer" href="mailto:awanish131@gmail.com">awanish131@gmail.com</a>
                </span>
              </p>
              <p data-aos='zoom-in-up' data-aos-delay='600'>Phone:
                <span>
                  <a href="tel:+917275198770" target="_blank" rel="noopener noreferrer">+91727518770</a>
                </span>
              </p>
              <p data-aos='zoom-in-up' data-aos-delay='700'>Freelance: <span>Available</span></p>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='800' className="cv-hireme">
              {/* <a href={certificate} className="btn hire-me">Certificate</a>
              <a href={level} className="btn hire-me">English Level</a> */}
              <a href={cv} className="btn">CV</a>
            </div>
          </div>
          <div className="skills">
            <div data-aos='zoom-in-up' data-aos-delay='500' className="skill-item">
              <h5>JS</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '65%' }}></div>
                <div className="skill-percent">86%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='600' className="skill-item">
              <h5>React</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '60%' }}></div>
                <div className="skill-percent">78%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='600' className="skill-item">
              <h5>Vue</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '60%' }}></div>
                <div className="skill-percent">78%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='700' className="skill-item">
              <h5>Redux</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '60%' }}></div>
                <div className="skill-percent">71%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='800' className="skill-item">
              <h5>Node</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '67%' }}></div>
                <div className="skill-percent">67%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='800' className="skill-item">
              <h5>Express</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '50%' }}></div>
                <div className="skill-percent">67%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='800' className="skill-item">
              <h5>Laravel</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '50%' }}></div>
                <div className="skill-percent">70%</div>
              </div>
            </div>
            <div data-aos='zoom-in-up' data-aos-delay='800' className="skill-item">
              <h5>Mysql</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: '50%' }}></div>
                <div className="skill-percent">50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
