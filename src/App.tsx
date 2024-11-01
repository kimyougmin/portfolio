import React, {useEffect, useRef} from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import myImage from "./portImage/kim34.jpg";

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
            }
        })
            .to(".zoomImg", {
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
    }, []);
    return (
        <div>
            <div className="wrapper">
                <div className="image-container">
                    <img
                      className={'zoomImg'}
                      src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
                      alt="image"/>
              </div>
              <div className="content">
                  <section className="section hero"></section>
              </div>
            </div>
            <section className="back_black">
                <div className="navi">
                    <div className="navi_left">
                        <p>Y.M Kim Portfolio</p>
                    </div>
                    <div className="navi_right">
                        <p>profile</p>
                        <p>skills</p>
                        <p>projects</p>
                        <p>contact</p>
                    </div>
                </div>
                <div className="navi_filter">

                </div>
                <div className="black_body">
                    <div className="my_profile">
                        <div className="title">
                            <p>My Profile</p>
                        </div>
                        <div className="profile_data">
                            <div className="profile_left">
                                <img src={myImage}/>
                            </div>
                            <div className="profile_right">
                                <p>김영민</p>
                                <p>2000.11.27</p>
                                <div>
                                    <p>Frontend-Developer</p>
                                    <p>정보처리기사</p>
                                </div>
                                <p>안녕하세요. 학습을 즐기는 개발자 김영민입니다.</p>
                                <p>2019년 부산컴퓨터과학고등하교를  졸업하고 동서대학교 소프트웨어 학과를 졸업예정입니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="my_skills">
                        <div className="title">
                            <p>My Skills</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="my_projects">

                    </div>
                </div>
            </section>
            <section className="contact">
                <p>(C) 2024. YoungMin Kim All rights reserved</p>
            </section>
        </div>
    )
}

export default App;
