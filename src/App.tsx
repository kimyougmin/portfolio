import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import myImage from "./Imgs/portImage/kim34.jpg";
import mySkills from "./Imgs/portImage/skills.png"
import Coin from "./Imgs/portImage/coin.png";
import Real from "./Imgs/portImage/real.png";
import dopdang1 from "./Imgs/portImage/dopdangImg1.png";
import dopdang2 from "./Imgs/portImage/dopdangImg2.png";
import dopdang3 from "./Imgs/portImage/dopdangImg3.png";
import dopdang4 from "./Imgs/portImage/dopdangImg4.png";
import rideon1 from "./Imgs/portImage/rideon1.png";
import rideon2 from "./Imgs/portImage/rideon2.png";
import rideon3 from "./Imgs/portImage/rideon3.png";
import rideon4 from "./Imgs/portImage/rideon4.png";

import tca from "./Imgs/portImage/text.png";
import myContact from "./Imgs/portImage/myimg.png"
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import iGithub from "./Imgs/langIcon/icon-github.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';


// import required modules
import {Pagination, Navigation, EffectCube} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

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
interface ProjectsTop {
  dopdang: number;
  rideon: number;
  coinAi: number;
  realTime: number;
  tca: number;
}
function App() {
  const [page, setPage] = useState(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const rideOnTitleRef = useRef<HTMLDivElement>(null);
  const [rideOnTitleState, setRideOnTitleState] = useState<boolean>(false);
  const dopdangTitleRef = useRef<HTMLDivElement>(null);
  const [dopdangTitleState, setDopdangTitleState] = useState<boolean>(false);
  const CoinAiTitleRef = useRef<HTMLDivElement>(null);
  const [coinAiTitleState, setCoinAiTitleState] = useState<boolean>(false);
  const realTimeTitleRef = useRef<HTMLDivElement>(null);
  const [realTimeTitleState, setRealTimeTitleState] = useState<boolean>(false);
  const tcaTitleRef = useRef<HTMLDivElement>(null);
  const [tcaTitleState, setTcaTitleState] = useState<boolean>(false);


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
      }).to(".zoomImg", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
        .to(".section.hero",
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut"
          },
          "<"
        );
    }, []);
    function onScroll() {
      const elementsTop: ElementTop = {
        profile: profileRef.current?.offsetTop as number - 100,
        skills: skillsRef.current?.offsetTop as number - 100,
        projects: projectsRef.current?.offsetTop as number - 100,
        contacts: contactRef.current?.offsetTop as number - 1000,
      }
      const projectsTop: ProjectsTop = {
        dopdang:dopdangTitleRef.current?.offsetTop as number -900,
        rideon: rideOnTitleRef.current?.offsetTop as number -900,
        coinAi: CoinAiTitleRef.current?.offsetTop as number - 900,
        realTime: realTimeTitleRef.current?.offsetTop as number - 900,
        tca: tcaTitleRef.current?.offsetTop as number - 900
      }
      if(window.scrollY - 10 >= projectsTop.dopdang && projectsTop.dopdang <= window.scrollY + 10) {
        setDopdangTitleState(true);
      } else {
        setDopdangTitleState(false);
      }
      if(window.scrollY - 10 >= projectsTop.rideon && projectsTop.rideon <= window.scrollY + 10) {
        setRideOnTitleState(true);
      } else {
        setRideOnTitleState(false);
      }
      if(window.scrollY - 10 >= projectsTop.coinAi && projectsTop.coinAi <= window.scrollY + 10) {
        setCoinAiTitleState(true);
      } else {
        setCoinAiTitleState(false);
      }
      if(window.scrollY - 10 >= projectsTop.realTime && projectsTop.realTime <= window.scrollY + 10) {
        setRealTimeTitleState(true);
      } else {
        setRealTimeTitleState(false);
      }
      if(window.scrollY - 10 >= projectsTop.tca && projectsTop.tca <= window.scrollY + 10) {
        setTcaTitleState(true);
      } else {
        setTcaTitleState(false);
      }
      if(elementsTop.contacts < window.scrollY) {
        setPage(3)
      } else if((elementsTop.profile <= window.scrollY && elementsTop.skills > window.scrollY) || elementsTop.profile > window.scrollY) {
        setPage(0);
      } else if(elementsTop.skills <= window.scrollY && elementsTop.projects > window.scrollY) {
        setPage(1);
      } else if(elementsTop.projects <= window.scrollY && elementsTop.contacts > window.scrollY) {
        setPage(2);
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
                  <p>테스트 위주의 개발로 실수를 줄이는 업무 처리, 지속 가능한 코드를 개발하기 위해 <br/>
                    꾸준한 리팩토링을 수행하는 것을 좋아하고, 클린코드 철학에 관심이 많습니다</p>
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
                  <div style={{'display': 'flex', 'marginBottom': '32px', 'overflow': 'hidden'}}>
                    <div style={{'flex': 1}}>
                      <div className="coinAi_title" ref={dopdangTitleRef}>
                        <p>DopDang(돕당)</p>
                      </div>
                      {dopdangTitleState ?
                        <div className="project_notice">
                          <p>돕당 (DOPDANG) 은 이사 , 청소 , 과외 , 수리 등 다양한 서비스를 원하는 사람과 전문가를 연결해주는 <WhiteBold>의뢰인• 전문가 매칭
                            플랫폼</WhiteBold>입니다.</p>
                          <p>사용자는 원하는 서비스를 검색하고 , 전문가와 직접 상담하여 맞춤형 서비스를 받을 수 있습니다.</p>
                          <p>전문가는 의뢰인에게 오퍼를 보낸 후 채팅을 통해 의뢰를 진행하게 됩니다.</p>
                          <p>Next.js를 이용한 SSR로 SEO를 최적화하고 <WhiteBold>미들웨어를 통해 관리자 페이지처럼 민감한 페이지의 노출을 차단</WhiteBold>할 수
                            있습니다.</p>
                          <div style={{marginTop: '16px'}}>
                            <div style={{display: "flex", gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/Typescript-%233178C6?style=flat-square&logo=Typescript&logoColor=%233178C6&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/NextJs-%20%23000000?style=flat-square&logo=Next.js&logoColor=%20%23000000&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/vercel-000000.svg?style=flat-square&logo=vercel&logoColor=000000&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/figma-FE5F50?style=flat-square&logo=figma&logoColor=FE5F50&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=F05032&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/github-181717.svg?style=flat-square&logo=github&logoColor=181717&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/springboot-6DB33F?style=flat-square&logo=springboot&logoColor=6DB33F&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/aws-181717.svg?style=flat-square&logo=aws&logoColor=181717&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/java-FE5F50?style=flat-square&logo=java&logoColor=FE5F50&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=4479A1&labelColor=f9f9f9"/>
                            </div>
                          </div>
                        </div> : null}
                    </div>
                    <div className="project_img" style={{'flex': 1}}>
                      <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                          shadow: true,
                          slideShadows: true,
                          shadowOffset: 1,
                          shadowScale: 0.3,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src={dopdang1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={dopdang2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={dopdang3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={dopdang4}/>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className="githubGo" onClick={() => {
                    window.open('https://github.com/kimyougmin/dopdangFE')
                  }}>
                    <div>
                      <p>dopdnag github 보러 가기</p>
                      <div className="blueBtn">
                        <ArrowForwardIcon className="arrowIcon"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div style={{'display': 'flex', 'marginBottom': '32px', 'overflow': 'hidden'}}>
                    <div style={{'flex': 1}}>
                      <div className="coinAi_title" ref={rideOnTitleRef}>
                        <p>RideOn</p>
                      </div>
                      {rideOnTitleState ?
                        <div className="project_notice">
                          <p>RideOn 은 자전거 이용자들을 위한 <WhiteBold>OPEN API 기반 통합 플랫폼</WhiteBold>입니다.</p>
                          <p>전국 자전거 도로 , 공공자전거 대여소 , 수리시설 , 날씨 등의 데이터를 실시간으로 활용하여 사용자에게 편리한 정보를 제공합니다.</p>
                          <p>또한 , 자전거 지도 , 편의시설 정보 , 쇼핑 , 뉴스 , 커뮤니티 등 다양한 기능을 제공하여 라이더들이 더욱 쉽고 즐겁게 자전거 문화를 경험할 수 있도록
                            합니다.</p>
                          <p><WhiteBold>Vue.js를 이용하여 구현</WhiteBold>하였고 현재 외부 API를 적극적으로 활용하여 프로젝트를 구축했습니다. </p>
                          <div style={{marginTop: '16px'}}>
                            <div style={{display: "flex", gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat-square&logo=JavaScript&logoColor=%23F7DF1E&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/Vue.js-%234FC08D?style=flat-square&logo=Vue.js&logoColor=%234FC08D&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/figma-FE5F50?style=flat-square&logo=figma&logoColor=FE5F50&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=F05032&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/github-181717.svg?style=flat-square&logo=github&logoColor=181717&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/docker-2496ED.svg?style=flat-square&logo=docker&logoColor=2496ED&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/nginx-009639.svg?style=flat-square&logo=nginx&logoColor=009639&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/Express-000000.svg?&style=flat-square&logo=Express&logoColor=000000&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/mongodb-47A248?style=flat-square&logo=mongodb&logoColor=47A248&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=4479A1&labelColor=f9f9f9"/>
                            </div>
                          </div>
                        </div> : null}
                    </div>
                    <div className="project_img" style={{'flex': 1}}>
                      <Swiper
                        effect={'cube'}
                        grabCursor={true}
                        cubeEffect={{
                          shadow: true,
                          slideShadows: true,
                          shadowOffset: 1,
                          shadowScale: 0.3,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src={rideon1}/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={rideon2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={rideon3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={rideon4}/>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className="githubGo" onClick={() => {
                    window.open('https://github.com/kimyougmin/RideOn')
                  }}>
                    <div>
                      <p>RideOn github 보러 가기</p>
                      <div className="blueBtn">
                        <ArrowForwardIcon className="arrowIcon"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div style={{'display': 'flex', 'marginBottom': '32px'}}>
                    <div>
                      <div className="coinAi_title" ref={CoinAiTitleRef}>
                        <p>CoinAI</p>
                        <p>(2인 진행 중)</p>
                      </div>
                      {coinAiTitleState ?
                        <div className="project_notice">
                          <p>CoinAi는 <WhiteBold>차트의 히스토리를 분석하여 24시간 후 코인의 가격을 예측</WhiteBold>하는 사이트입니다.</p>
                          <p>시중에 비슷한 서비스가 많지만 모두 유료입니다.</p>
                          <p>따라서 AI를 전공하고 있는 친구와 함께 만들고 있습니다.</p>
                          <p>차트를 구현하기 위해 <WhiteBold>Apexcharts</WhiteBold>를 사용하였습니다. </p>
                          <p><WhiteBold>BitCoin Api</WhiteBold>를 이용하여코인의 히스토리를 가져와 차트에서 출력하고 <WhiteBold>코인
                            목록을 선택할<br/> 때마다 차트와 해당 코인의 세부 정보가 바뀌도록 구현했습니다.</WhiteBold></p>
                          <p>프론트는 기능적인 부분을 완성했고 AI를 기반으로한 Api 업데이트를 준비중 입니다. </p>
                          <div style={{marginTop: '16px'}}>
                            <div style={{display: "flex", gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/Typescript-%233178C6?style=flat-square&logo=Typescript&logoColor=%233178C6&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/React-20232a.svg?style=flat-square&logo=react&logoColor=61DAFB&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                            <img
                                src="https://img.shields.io/badge/figma-FE5F50?style=flat-square&logo=figma&logoColor=FE5F50&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=F05032&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/github-181717.svg?style=flat-square&logo=github&logoColor=181717&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/nginx-009639.svg?style=flat-square&logo=nginx&logoColor=009639&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/fastapi-009688.svg?&style=flat-square&logo=fastapi&logoColor=009688&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/python-%3776AB?style=flat-square&logo=python&logoColor=%3776AB&labelColor=f9f9f9"/>
                            </div>
                          </div>
                        </div> : null}
                    </div>
                    <div className="project_img">
                      <img src={Coin}/>
                    </div>
                  </div>
                  <div className="githubGo" onClick={() => {
                    window.open('https://github.com/kimyougmin/CoinAi')
                  }}>
                    <div>
                      <p>CoinAi github 보러 가기</p>
                      <div className="blueBtn">
                        <ArrowForwardIcon className="arrowIcon"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div style={{'display': 'flex', 'marginBottom': '32px'}}>
                    <div>
                      <div className="coinAi_title" ref={realTimeTitleRef}>
                        <p>RealTimeChat</p>
                      </div>
                      {realTimeTitleState ?
                        <div className="project_notice">
                          <p>해당 프로젝트는 실시간 채팅 기능을 구현 해봤습니다.</p>
                          <p>DB에서 데이터를 조회하는 구조가 아닌 <WhiteBold>데이터가 생성되는 즉시 상대방에게 전송</WhiteBold>하는 실시간 구조를 공부하기 위해 시작한
                            프로젝트입니다.</p>
                          <p>특별한 라이브러리 사용은 하지 않았고 각각 클라이언트 별로 node.js를 이용하여 메시지를 전송하도록 구현했습니다.</p>
                          <p>채팅을 보내면 <WhiteBold>브로드캐스트 통신</WhiteBold>으로 모든 사용자에게 보내고 사용자 아이디에 uuid를 PK로 이용하여 해당 유저에게만 송신
                            되도록 구현했습니다.</p>
                          <div style={{marginTop: '16px'}}>
                            <div style={{display: "flex", gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/Typescript-%233178C6?style=flat-square&logo=Typescript&logoColor=%233178C6&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/React-20232a.svg?style=flat-square&logo=react&logoColor=61DAFB&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/figma-FE5F50?style=flat-square&logo=figma&logoColor=FE5F50&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=F05032&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/github-181717.svg?style=flat-square&logo=github&logoColor=181717&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/nginx-009639.svg?style=flat-square&logo=nginx&logoColor=009639&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=4479A1&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/Express-000000.svg?&style=flat-square&logo=Express&logoColor=000000&labelColor=f9f9f9"/>
                            </div>
                          </div>
                        </div> : null}
                    </div>
                    <div className="project_img">
                      <img src={Real}/>
                    </div>
                  </div>
                  <div className="githubGo" onClick={() => {
                    window.open('https://github.com/kimyougmin/RealTimeChat')
                  }}>
                    <div>
                      <p>RealTimeChat github 보러 가기</p>
                      <div className="blueBtn">
                        <ArrowForwardIcon className="arrowIcon"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project coinAi">
                  <div style={{'display': 'flex', 'marginBottom': '32px'}}>
                    <div>
                      <div className="coinAi_title" ref={tcaTitleRef}>
                        <p>T.C.A</p>
                        <p></p>
                      </div>
                      {tcaTitleState ?
                        <div className="project_notice">
                          <p>4학년 졸업 작품으로 구현한 프로젝트입니다.</p>
                          <p>처음으로 <WhiteBold>AI를 사용한 프로젝트</WhiteBold>입니다.</p>
                          <p><WhiteBold>구글 Bert를 한국어 버전으로 만든 KoBERT를 이용하여 fine tuning</WhiteBold> 후 텍스트를 분류하는 모델로
                            만들었습니다.
                          </p>
                          <p><WhiteBold>fast Api 라이브러리</WhiteBold>를 이용하여 텍스트를 입력 받으면 모델에서 클린, 욕설, 세대갈등, 비하, 희화화 중 하나로
                            분류합니다.
                            분류된 값을 수신측에 반환하도록 만들었습니다.</p>
                          <p>처음으로 AI를 써봐서 공부를 변행하면서 제작하였습니다.</p>
                          <p>코드 등은 KoBERT에서 제공하는 학습 코드를 개량하여 만들었습니다.</p>
                          <div style={{marginTop: '16px'}}>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=F05032&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/github-181717.svg?style=flat-square&logo=github&logoColor=181717&labelColor=f9f9f9"/>
                            </div>
                            <div style={{display: "flex", marginTop: '8px', gap: '12px'}}>
                              <img
                                src="https://img.shields.io/badge/fastapi-009688.svg?&style=flat-square&logo=fastapi&logoColor=009688&labelColor=f9f9f9"/>
                              <img
                                src="https://img.shields.io/badge/python-%3776AB?style=flat-square&logo=python&logoColor=%3776AB&labelColor=f9f9f9"/>
                            </div>
                          </div>
                        </div> : null}
                    </div>
                    <div className="project_img">
                      <img src={tca}/>
                    </div>
                  </div>
                  <div className="githubGo" onClick={() => {
                    window.open('https://github.com/kimyougmin/TextClassifierApi')
                  }}>
                    <div>
                      <p>T.C.A github 보러 가기</p>
                      <div className="blueBtn">
                        <ArrowForwardIcon className="arrowIcon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" ref={contactRef}>
          <h1>CONTACT</h1>
          <div className="contact_body">
            <div>
              <img src={myContact}/>
            </div>
            <div className={"contact_body_r"}>
              <p className="contact_subTitle">세련된 디자인과 기술 끊임 없이 연구하는 개발자</p>
              <div className="contact_body_flex">
                <PhoneAndroidIcon/>
                <p>010-5260-1131</p>
              </div>
              <div className="contact_body_flex">
                <MailIcon/>
                <p>dudals896@gmail.com</p>
              </div>
              <div>
                <img src={iGithub} onClick={() => {
                  window.open('https://github.com/kimyougmin')
                }}/>
                <p>My Github!</p>
              </div>
            </div>
          </div>
          <p>COPYRIGHT 2024. YoungMin Kim All rights reserved</p>
        </section>
      </div>
    )
}

export default App;
