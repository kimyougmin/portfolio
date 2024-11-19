import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import myImage from "./portImage/kim34.jpg";
import mySkills from "./portImage/skills.png"
import Coin from "./portImage/coin.png";
import Real from "./portImage/real.png";
import Passo from "./portImage/coyp.png";
import pac from "./portImage/pac.png";
import tca from "./portImage/text.png";
import myContact from "./portImage/myimg.png"
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import iGithub from "./Imgs/langIcon/icon-github.png";

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
    coinAi: number;
    realTime: number;
    passo: number;
    pac: number;
    tca: number;
}
function App() {
  const [page, setPage] = useState(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const CoinAiTitleRef = useRef<HTMLDivElement>(null);
  const [coinAiTitleState, setCoinAiTitleState] = useState<boolean>(false);
  const realTimeTitleRef = useRef<HTMLDivElement>(null);
  const [realTimeTitleState, setRealTimeTitleState] = useState<boolean>(false);
  const passoTitleRef = useRef<HTMLDivElement>(null);
  const [passoTitleState, setPassoTitleState] = useState<boolean>(false);
  const pacTitleRef = useRef<HTMLDivElement>(null);
  const [pacTitleState, setPacTitleState] = useState<boolean>(false);
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
        coinAi: CoinAiTitleRef.current?.offsetTop as number - 900,
        realTime: realTimeTitleRef.current?.offsetTop as number - 900,
        passo: passoTitleRef.current?.offsetTop as number - 900,
        pac: pacTitleRef.current?.offsetTop as number - 900,
        tca: tcaTitleRef.current?.offsetTop as number - 900
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
      if(window.scrollY - 10 >= projectsTop.passo && projectsTop.passo <= window.scrollY + 10) {
        setPassoTitleState(true);
      } else {
        setPassoTitleState(false);
      }
      if(window.scrollY - 10 >= projectsTop.pac && projectsTop.pac <= window.scrollY + 10) {
        setPacTitleState(true);
      } else {
        setPacTitleState(false);
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
      // console.log(window.scrollY,testA)
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
                    </div> : null}
                  <div className="project_img">
                    <img src={Coin}/>
                  </div>
                  <div className="githubGo" onClick={() => {window.open('https://github.com/kimyougmin/CoinAi')}}>
                    <p>CoinAi github 보러 가기</p>
                    <div className="blueBtn">
                      <ArrowForwardIcon className="arrowIcon"/>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div className="coinAi_title" ref={realTimeTitleRef}>
                    <p>RealTime Chat</p>
                  </div>
                  {realTimeTitleState ?
                    <div className="project_notice">
                      <p>해당 프로젝트는 실시간 채팅 기능을 구현 해봤습니다.</p>
                      <p>DB에서 데이터를 조회하는 구조가 아닌 <WhiteBold>데이터가 생성되는 즉시 상대방에게 전송</WhiteBold>하는 실시간 구조를 공부하기 위해 시작한
                        프로젝트입니다.</p>
                      <p>특별한 라이브러리 사용은 하지 않았고 각각 클라이언트 별로 node.js를 이용하여 메시지를 전송하도록 구현했습니다.</p>
                      <p>채팅을 보내면 <WhiteBold>브로드캐스트 통신</WhiteBold>으로 모든 사용자에게 보내고 사용자 아이디에 uuid를 PK로 이용하여 해당 유저에게만 송신 되도록
                        구현했습니다.</p>
                    </div> : null}
                  <div className="project_img">
                    <img src={Real}/>
                  </div>
                  <div className="realGithubGo" onClick={() => {window.open('https://github.com/kimyougmin/RealTimeChat')}}>
                    <p>RealTime Chat github 보러 가기</p>
                    <div className="blueBtn">
                      <ArrowForwardIcon className="arrowIcon"/>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div className="coinAi_title" ref={passoTitleRef}>
                    <p>Copy Passo</p>
                    <p>(2인)</p>
                  </div>
                  {passoTitleState ?
                    <div className="project_notice">
                      <p>CoinAi는 <WhiteBold>차트의 히스토리를 분석하여 24시간 후 코인의 가격을 예측</WhiteBold>하는 사이트입니다.</p>
                      <p>시중에 비슷한 서비스가 많지만 모두 유료입니다.</p>
                      <p>따라서 AI를 전공하고 있는 친구와 함께 만들고 있습니다.</p>
                      <p>차트를 구현하기 위해 <WhiteBold>Apexcharts</WhiteBold>를 사용하였습니다. </p>
                      <p><WhiteBold>BitCoin Api</WhiteBold>를 이용하여코인의 히스토리를 가져와 차트에서 출력하고 <WhiteBold>코인
                        목록을 선택할<br/> 때마다 차트와 해당 코인의 세부 정보가 바뀌도록 구현했습니다.</WhiteBold></p>
                      <p>프론트는 기능적인 부분을 완성했고 AI를 기반으로한 Api 업데이트를 준비중 입니다. </p>
                    </div> : null}
                  <div className="project_img">
                    <img src={Passo}/>
                  </div>
                  <div className="passoGithubGo" onClick={() => {window.open('https://github.com/kimyougmin/CopyPasso')}}>
                    <p>Copy Passo github 보러 가기</p>
                    <div className="blueBtn">
                      <ArrowForwardIcon className="arrowIcon"/>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div className="coinAi_title" ref={pacTitleRef}>
                    <p>P.A.C</p>
                    <p></p>
                  </div>
                  {pacTitleState ?
                    <div className="project_notice">
                      <p>대학교 2학년 과제로 만든 웹입니다. <WhiteBold>어린이 보호구역을 마커로 찍는 프로젝트</WhiteBold>입니다.</p>
                      <p><WhiteBold>어린이 보호 구역의 위도, 경도를 제공 해주는 Api를 이용하여 제작</WhiteBold>하였습니다.</p>
                      <p>구글 맵과 php 통신 같은 부분은 제가 제작하였고 팀원들은 디자인과 음성 출력 부분을 만들었습니다.</p>
                      <p>대한민국에는 어린이 보호 구역이 너무 많아 모두 출력하면 성능이 너무 떨어졌습니다.</p>
                      <p>따라서 해당 프로젝트는 <WhiteBold>구글 map Api에 화면 좌측 상단 값과 우측 하단 값을 가져와 그 사이의 위치에 해당하는 어린이 보호 구역만
                        출력</WhiteBold>하도록 만들었습니다.</p>
                    </div> : null}
                  <div className="project_img">
                    <img src={pac} style={{width: "1138px"}}/>
                  </div>
                  <div className="githubGo" onClick={() => {window.open('https://github.com/kimyougmin/P.A.C')}}>
                    <p>P.A.C github 보러 가기</p>
                    <div className="blueBtn">
                      <ArrowForwardIcon className="arrowIcon"/>
                    </div>
                  </div>
                </div>
                <div className="project coinAi">
                  <div className="coinAi_title" ref={tcaTitleRef}>
                    <p>T.C.A</p>
                    <p></p>
                  </div>
                  {tcaTitleState ?
                    <div className="project_notice">
                      <p>4학년 졸업 작품으로 구현한 프로젝트입니다.</p>
                      <p>처음으로 <WhiteBold>AI를 사용한 프로젝트</WhiteBold>입니다.</p>
                      <p><WhiteBold>구글 Bert를 한국어 버전으로 만든 KoBERT를 이용하여 fine tuning</WhiteBold> 후 텍스트를 분류하는 모델로 만들었습니다.</p>
                      <p><WhiteBold>fast Api 라이브러리</WhiteBold>를 이용하여 텍스트를 입력 받으면 모델에서 클린, 욕설, 세대갈등, 비하, 희화화 중 하나로 분류합니다. 분류된 값을 수신측에 반환하도록 만들었습니다.</p>
                      <p>처음으로 AI를 써봐서 공부를 변행하면서 제작하였습니다.</p>
                      <p>코드 등은 KoBERT에서 제공하는 학습 코드를 개량하여 만들었습니다.</p>
                    </div> : null}
                  <div className="project_img">
                    <img src={tca} style={{width: "1138px"}}/>
                  </div>
                  <div className="githubGo" onClick={() => {window.open('https://github.com/kimyougmin/TextClassifierApi')}}>
                    <p>T.C.A github 보러 가기</p>
                    <div className="blueBtn">
                      <ArrowForwardIcon className="arrowIcon"/>
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
                <PhoneAndroidIcon />
                <p>010-5260-1131</p>
              </div>
              <div className="contact_body_flex">
                <MailIcon />
                <p>dudals896@gmail.com</p>
              </div>
              <div>
                <img src={iGithub} onClick={() => {window.open('https://github.com/kimyougmin')}}/>
                <p>My Github!</p>
              </div>
            </div>
          </div>
          <p>COPYRIGHT 2024. Young Min Kim All rights reserved</p>
        </section>
      </div>
    )
}

export default App;