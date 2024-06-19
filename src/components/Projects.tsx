import React from 'react';
import coinAi from "../Imgs/projectImg/coinai.png";
import langProject from "../Imgs/projectImg/langProject.png";
import passo from "../Imgs/projectImg/passo1.png";
import pac from "../Imgs/projectImg/pac.png";
import realtimechat from "../Imgs/projectImg/realtimechat.png";
import textClassifier from "../Imgs/projectImg/textclassifier.png";
import css from '../Imgs/langIcon/icon-css.png';
import html from '../Imgs/langIcon/icon-html.png';
import js from '../Imgs/langIcon/icon-js.png';
import react from '../Imgs/langIcon/icon-React.png';
import node from '../Imgs/langIcon/icon-node.png';
import php from '../Imgs/langIcon/icon-php.png';
import tensorFlow from '../Imgs/langIcon/icon-tensorflow.png';
import github from '../Imgs/langIcon/icon-github.png';
import typescript from '../Imgs/langIcon/icon-TypeScript.png';
import spring from '../Imgs/langIcon/icon-spring.png';
import python from '../Imgs/langIcon/icon-python.png';
import pytouch from '../Imgs/langIcon/icon-pytouch.png';
import portfolio from "../Imgs/projectImg/portfolio.png";
import '../Styles/Projects.css'

function Projects() {
    return (
        <div>
            <p className={'projects-title'}>Projects</p>
            <div className={'project'}>
                <p className={'project-title'}>CoinAi</p>
                <p className={'project-count'}>2인(진행중)</p>
                <div className={'project-body'}>
                    <img src={coinAi}/>
                    <div>
                        <p className={'body-content'}>CoinAi는 차트의 히스토리를 분석하여 24시간 후 코인의 가격을 예측하는 사이트입니다. 시중에 비슷한 서비스가
                            많지만 모두 유료입니다. 따라서 AI를 전공하고 있는
                            친구와 함께 만들고 있습니다.<br/><br/>프론트는 기능적인 부분을 완성했고 AI를 기반으로한 Api 업데이트를 준비중 입니다.<br/><br/>
                            차트를 구현하기 위해 Apexcharts를 사용하였습니다. 코인 Api를 이용하여코인의 히스토리를 가져와 차트에서 출력하고 코인 목록을 선택할 때마다 차트와 해당
                            코인의 세부 정보가 바뀌도록 구현했습니다.</p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>Front-end</p>
                        {[typescript, html, css, react].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <div className={'footer-line'}>
                        <p>Back-end</p>
                        {[python].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <img src={github}/>
                </div>
            </div>
            <div className={'project'}>
                <p className={'project-title'}>RealTimeChat</p>
                <p className={'project-count'}>1인</p>
                <div className={'project-body'}>
                    <img src={realtimechat}/>
                    <div>
                        <p className={'body-content'}>해당 프로젝트는 실시간 채팅 기능을 구현 해봤습니다. DB에서 데이터를 조회하는 구조가 아닌 데이터가 생성되는 즉시 상대방에게 전송하는 실시간 구조를 공부하기 위해 시작한 프로젝트입니다. <br/><br/>특별한 라이브러리 사용은 하지 않았고 각각 클라이언트 별로 node.js를 이용하여 메시지를 전송하도록 구현했습니다. <br/><br/>채팅을 보내면 브로드캐스트 통신으로 모든 사용자에게 보내고 사용자 아이디에 uuid를 PK로 이용하여 해당 유저에게만 송신 되도록 구현했습니다.</p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>Front-end</p>
                        {[typescript, html, css, react].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <div className={'footer-line'}>
                        <p>Back-end</p>
                        {[js, node].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <img src={github}/>
                </div>
            </div>
            <div className={'project'}>
                <p className={'project-title'}>Long Project</p>
                <p className={'project-count'}>5인</p>
                <div className={'project-body'}>
                    <img src={langProject}/>
                    <div>
                        <p className={'body-content'}>대학 연구실에서 진행한 프로젝트입니다. 기수제를 도입하여 1년 단위로 유지보수, 업데이트를 진행합니다. 저는 1기 프론트 팀장으로 활동했고 Prosemirror 라이브러리를 이용하여 이미지를 핸들링하는 에디터를 만들었습니다.<br/><br/>
                            프론트 3명, 백 2명으로 진행되었고 각 팀장이 기술적은 부분을 구현했습니다.<br/><br/>
                            1기에서는 기본적인 블로그의 기능을 구현했습니다. 글 작성, 조회 등을 구현했고 교내에서 학생들을 대상으로 서비스를 진행하므로 보안적인 부분에 많은 신경을 썻습니다. </p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>Front-end</p>
                        {[js,typescript, html, css, react].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <div className={'footer-line'}>
                        <p>Back-end</p>
                        {[spring].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <img src={github} />
                </div>
            </div>
            <div className={'project'}>
                <p className={'project-title'}>Copy Passo</p>
                <p className={'project-count'}>2인</p>
                <div className={'project-body'}>
                    <img src={passo}/>
                    <div>
                        <p className={'body-content'}>기존의 Passo라는 차량 중고 거래 사이트가 있습니다. 2003년에 만들어진 사이트라 성능이 많이 떨어지는 사이트입니다. 친구와 함께 해당 사이트를 카피하여 성능을 올려 보기로 했습니다.
                            <br/><br/>
                            필자는 Ui가 복잡한 사이트이기 때문에 컴포넌트와 useState의 리랜더가 불필요하게 작동하지 않도록 신경썼습니다.
                            <br/><br/>
                            이미지를 처리하는 과정을 어떻게 할지에 대하며 가장 많이 소통하였습니다. 처음으로 이미지를 통신하는 프로젝트였어서 DB 구조와 어떻게 DB로 전송하는지에 대하여 공부를 많이 했던 프로젝트입니다.</p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>Front-end</p>
                        {[js, html, css, react].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <div className={'footer-line'}>
                        <p>Back-end</p>
                        {[node, js].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <img src={github}/>
                </div>
            </div>
            <div className={'project'}>
                <p className={'project-title'}>P.A.C</p>
                <p className={'project-count'}>3인</p>
                <div className={'project-body'}>
                    <img src={pac}/>
                    <div>
                        <p className={'body-content'}>대학교 2학년 과제로 만든 웹입니다. 어린이 보호구역을 마커로 찍는 프로젝트입니다.  어린이 보호 구역의 위도, 경도를 제공 해주는 Api를 이용하여 제작하였습니다.
                            <br/><br/>
                            구글 맵과 php 통신 같은 부분은 제가 제작하였고 팀원들은 디자인과 음성 출력 부분을 만들었습니다.
                            <br/><br/>
                            대한민국에는 어린이 보호 구역이 너무 많아 모두 출력하면 성능이 너무 떨어졌습니다. 따라서 해당 프로젝트는 구글 map Api에 화면 좌측 상단 값과 우측 하단 값을 가져와 그 사이의 위치에 해당하는 어린이 보호 구역만 출력하도록 만들었습니다.</p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>Front-end</p>
                        {[js, html, css].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <div className={'footer-line'}>
                        <p>Back-end</p>
                        {[php].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <img src={github}/>
                </div>
            </div>
            <div className={'project'}>
                <p className={'project-title'}>TextClassifier Api</p>
                <p className={'project-count'}>1인</p>
                <div className={'project-body'}>
                    <img src={textClassifier}/>
                    <div>
                        <p className={'body-content'}>4학년 졸업 작품으로 구현한 프로젝트입니다. 처음으로 AI를 사용한 프로젝트입니다. 구글 Bert를 한국어 버전으로 만든 KoBERT를 이용하여 fine tuning 후 텍스트를 분류하는 모델로 만들었습니다.
                            <br/><br/>
                            fast Api 라이브러리를 이용하여 텍스트를 입력 받으면 모델에서 클린, 욕설, 세대갈등, 비하, 희화화 중 하나로 분류합니다. 분류된 값을 수신측에 반환하도록 만들었습니다.
                            <br/><br/>
                            처음으로 AI를 써봐서 공부를 변행하면서 제작하였습니다. 코드 등은 KoBERT에서 제공하는 학습 코드를 개량하여 만들었습니다. </p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>library</p>
                        {[python, tensorFlow, pytouch].map((e) => {
                            return <img style={{width: '100px'}} src={e}/>
                        })}
                    </div>
                    <img src={github}/>
                </div>
            </div>
            <div className={'project'}>
                <p className={'project-title'}>Portfolio</p>
                <p className={'project-count'}>1인</p>
                <div className={'project-body'}>
                    <img src={portfolio}/>
                    <div>
                        <p className={'body-content'}>대학교 2학년 과제로 만든 웹입니다. 어린이 보호구역을 마커로 찍는 프로젝트입니다.  어린이 보호 구역의 위도, 경도를 제공 해주는 Api를 이용하여 제작하였습니다.
                            <br/><br/>
                            구글 맵과 php 통신 같은 부분은 제가 제작하였고 팀원들은 디자인과 음성 출력 부분을 만들었습니다.
                            <br/><br/>
                            대한민국에는 어린이 보호 구역이 너무 많아 모두 출력하면 성능이 너무 떨어졌습니다. 따라서 해당 프로젝트는 구글 map Api에 화면 좌측 상단 값과 우측 하단 값을 가져와 그 사이의 위치에 해당하는 어린이 보호 구역만 출력하도록 만들었습니다. </p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div className={'project-footer'}>
                    <div className={'footer-line'}>
                        <p>Front-end</p>
                        {[typescript, html, css, react].map((e) => {
                            return <img src={e}/>
                        })}
                    </div>
                    <img src={github}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
