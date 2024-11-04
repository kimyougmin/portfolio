import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import myImage from "./portImage/kim34.jpg";
import mySkills from "./portImage/skills.png"
import Coin from "./portImage/coin.png"
import styled from "styled-components";

const SelectedPage = styled.p`
    margin-left: 38px;
    font-weight: bolder !important;
    font-size: 15px;
    line-height: 29px;
    border-bottom: 1px solid #f5f5ff;
`;
const WhiteBold = styled.span`
    color: #F5F5FF;
    font-weight: bold;
`
interface ElementTop {
    profile: number;
    skills: number;
    projects: number;
    contacts: number;
}
function App() {
    const [page, setPage] = useState(0);
    const profileRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        window.addEventListener('scroll',onScroll);
        return () =>{
            window.removeEventListener('scroll',onScroll);
        }
    },[]);
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
    function onScroll() {
        const elementsTop:ElementTop = {
            profile: profileRef.current?.offsetTop as number - 100,
            skills: skillsRef.current?.offsetTop as number - 100,
            projects: projectsRef.current?.offsetTop as number - 100,
            contacts: contactRef.current?.offsetTop as number - 500,
        }
        if((elementsTop.profile <= window.scrollY && elementsTop.skills > window.scrollY) || elementsTop.profile > window.scrollY) {
            setPage(0);
        } else if(elementsTop.skills <= window.scrollY && elementsTop.projects > window.scrollY) {
            setPage(1);
        } else if(elementsTop.projects <= window.scrollY && elementsTop.contacts > window.scrollY) {
            setPage(2);
        } else {
            setPage(3);
        }
    }
    const onProfileClick = () => {
        profileRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const onSkillsClick = () => {
        skillsRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const onProjectsClick = () => {
        projectsRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const onContactClick = () => {
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    };
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
                        {page === 0 ? <SelectedPage onClick={onProfileClick}>profile</SelectedPage> : <p onClick={onProfileClick}>profile</p>}
                        {page === 1 ? <SelectedPage onClick={onSkillsClick}>skills</SelectedPage> : <p onClick={onSkillsClick}>skills</p>}
                        {page === 2 ? <SelectedPage onClick={onProjectsClick}>projects</SelectedPage> : <p onClick={onProjectsClick}>projects</p>}
                        {page === 3 ? <SelectedPage onClick={onContactClick}>contact</SelectedPage> : <p onClick={onContactClick}>contact</p>}
                    </div>
                </div>
                <div className="black_body">
                    <div className="my_profile" ref={profileRef}>
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
                                <p>2019년 부산컴퓨터과학고등학교를  졸업하고 동서대학교 소프트웨어 학과를 졸업예정입니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="my_skills" ref={skillsRef}>
                        <div className="title">
                            <p>My Skills</p>
                        </div>
                        <div className="skills_body">
                            <img src={mySkills} className="skills_img"/>
                        </div>
                    </div>
                    <div className="my_projects" ref={projectsRef}>
                        <div className="title">
                            <p>My Projects</p>
                        </div>
                        <div className="projects">
                            <div className="project coinAi">
                                <div className="coinAi_title">
                                    <p>CoinAI</p>
                                    <p>(2인 진행 중)</p>
                                </div>
                                <div className="project_notice">
                                    <p>CoinAi는 <WhiteBold>차트의 히스토리를 분석하여 24시간 후 코인의 가격을 예측</WhiteBold>하는 사이트입니다.</p>
                                    <p>시중에 비슷한 서비스가 많지만 모두 유료입니다.</p>
                                    <p>따라서 AI를 전공하고 있는 친구와 함께 만들고 있습니다.</p>
                                    <p>차트를 구현하기 위해 <WhiteBold>Apexcharts</WhiteBold>를 사용하였습니다. </p>
                                    <p><WhiteBold>BitCoin Api</WhiteBold>를 이용하여코인의 히스토리를 가져와 차트에서 출력하고 <WhiteBold>코인 목록을 선택할<br/> 때마다 차트와 해당 코인의 세부 정보가 바뀌도록 구현했습니다.</WhiteBold></p>
                                    <p>프론트는 기능적인 부분을 완성했고 AI를 기반으로한 Api 업데이트를 준비중 입니다. </p>
                                </div>
                                <div className="project_img">
                                    <img src={Coin}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" ref={contactRef}>
                <p>(C) 2024. YoungMin Kim All rights reserved</p>
            </section>
        </div>
    )
}

export default App;
