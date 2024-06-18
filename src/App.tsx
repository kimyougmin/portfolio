import React, {useEffect} from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import Skills from "./components/Skills";

function App() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    scrub: true,
                    markers: true
                }
            })
                .to("img", {
                    scale: 2,
                    z: 350,
                    transformOrigin: "center center",
                    ease: "power1.inOut"
                })
                .to(
                    ".section.hero",
                    {
                        scale: 1.1,
                        transformOrigin: "center center",
                        ease: "power1.inOut"
                    },
                    "<"
                );
    }, [])

  return (
      <div>
          <div className="wrapper">
              <div className="content">
                  <section className="section hero"></section>
                  <section className="section gradient-purple">
                      <div className={'aboutMe title'}>
                          <p>About me</p>
                      </div>
                      <div className={'aboutMe content'}>
                          <p className={'aboutMe-content title'}>학습을 즐기는 개발자</p>
                          <p>새로운 것은 배우고 배운 것을 더욱 깊게 이해하고 이해한 것으로 새로운 것은 만든다. 새로운 것은 곧 미래다.</p>
                          <div className={'aboutMe line'}>
                              <HomeRoundedIcon sx={{fontSize: 39}}/>
                              <p>부산 해운대</p>
                              <AccountBoxRoundedIcon sx={{fontSize: 39}}/>
                              <p>김영민</p>
                              <CalendarMonthRoundedIcon sx={{fontSize: 39}}/>
                              <p>00.11.27</p>
                          </div>
                          <div className={'aboutMe line'}>
                              <PhoneAndroidRoundedIcon sx={{fontSize: 39}}/>
                              <p>010-5260-1131</p>
                              <EmailRoundedIcon sx={{fontSize: 39}}/>
                              <p>dudals896@gmail.com</p>
                              <SchoolRoundedIcon sx={{fontSize: 39}}/>
                              <p>동서대학교(소프트웨어학과)</p>
                          </div>
                      </div>
                  </section>
                  <section className="section gradient-blue">
                      <Skills />
                  </section>
              </div>
              <div className="image-container">
                  <img
                      src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
                      alt="image"/>
              </div>
          </div>
      </div>
  )
}

export default App;
