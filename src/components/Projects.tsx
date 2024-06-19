import React from 'react';
import coinAi from "../Imgs/projectImg/coinai.png";
import langProject from "../Imgs/projectImg/langProject.png";
import passo from "../Imgs/projectImg/passo1.png";
import pac from "../Imgs/projectImg/pac.png";
import realtimechat from "../Imgs/projectImg/realtimechat.png";
import textClassifier from "../Imgs/projectImg/textClassifier.png";
import '../Styles/Projects.css'

function Projects() {

    return (
        <div>
            <p>Projects</p>
            <div className={'projects'}>
                <p className={'projects-title'}>CoinAi</p>
                <p className={'projects-count'}>2인(진행중)</p>
                <div className={'projects-body'}>
                    <img src={coinAi}/>
                    <div>
                        <p className={'body-content'}>CoinAi는 차트의 히스토리를 분석하여 24시간 후 코인의 가격을 예측하는 사이트입니다. 시중에 비슷한 서비스가 많지만 모두 유료입니다. 따라서 AI를 전공하고 있는
                            친구와 함께 만들고 있습니다.<br/><br/>프론트는 기능적인 부분을 완성했고 AI를 기반으로한 Api 업데이트를 준비중 입니다.<br/><br/>
                            차트를 구현하기 위해 Apexcharts를 사용하였습니다. 코인 Api를 이용하여코인의 히스토리를 가져와 차트에서 출력하고 코인 목록을 선택할 때마다 차트와 해당
                            코인의 세부 정보가 바뀌도록 구현했습니다.</p>
                        <p className={'body-readme'}>자세히 보기 {'->'} README</p>
                    </div>
                </div>
                <div>
                    <p>Front-end</p>
                </div>
                <div>
                    <p>Back-end</p>
                </div>
                <div>
                    <p>DB</p>
                </div>
                <img />
            </div>
        </div>
    );
}

export default Projects;
