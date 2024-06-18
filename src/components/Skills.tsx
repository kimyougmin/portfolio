import React from 'react';
import css from '../langIcon/icon-css.png';
import html from '../langIcon/icon-html.png';
import js from '../langIcon/icon-js.png';
import react from '../langIcon/icon-React.png';
import docker from '../langIcon/icon-docker.png';
import node from '../langIcon/icon-node.png';
import nginx from '../langIcon/icon-nginx.png';
import ubuntu from '../langIcon/icon-ubuntu.png';
import mysql from '../langIcon/icon-mysql-skils.png';
import github from '../langIcon/icon-github.png';
import '../Styles/Skills.css'

interface  iconObject {
    frontEnd: string[]
    backEnd: string
    server: string[]
    etc: string[]
}

function Skills() {
    const iconUrl: iconObject = {
        frontEnd: [js, css, html, react],
        backEnd: node,
        server: [nginx, ubuntu, mysql],
        etc: [docker, github]
    }
    return (
        <div className={'skills'}>
            <p className={'skills-title'}>Skills</p>
            <div className={'skills-line'}>
                <p>Front-end</p>
                {iconUrl.frontEnd.map((e) => {return <img src={e}/>})}
            </div>
            <div className={'skills-line'}>
                <p>Back-end</p>
                <img src={iconUrl.backEnd}/>
            </div>
            <div className={'skills-line'}>
                <p>Server</p>
                {iconUrl.server.map((e) => {return <img src={e}/>})}
            </div>
            <div className={'skills-line'}>
                <p>etc</p>
                {iconUrl.etc.map((e) => {return <img src={e}/>})}
            </div>
        </div>
    );
}

export default Skills;