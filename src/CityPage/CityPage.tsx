/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import React from 'react';

import style from './CityPage.module.css';

function CityPage(): JSX.Element {
    return (
        <div className={style.cityClass}>
            <h1>Alles über Stadt</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam, mollitia tempore ex quisquam dignissimos porro modi, odit assumenda eaque amet! Obcaecati recusandae, perspiciatis nobis natus incidunt vitae ipsam distinctio voluptates, iusto non est quibusdam adipisci sit consectetur debitis nihil?</p>
            <img src="https://img.goodfon.ru/original/1920x1200/9/11/berlin-germaniya-muzey-bode.jpg" alt="" />
        </div>
    );
}
export default CityPage;
