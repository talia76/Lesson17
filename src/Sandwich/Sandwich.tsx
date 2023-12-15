/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';

import style from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
    const [sandwich, setSandwich] = useState<string>('Buterbrot configured');
    function handeleAddCheese(): void {
        setSandwich('${sandwich} Cheese');
    }
    function handeleAddBread(): void {
        setSandwich('${sandwich} Bread');
    }
    function handeleAddSalami(): void {
        setSandwich('${sandwich} Salami');
    }
    function handeleAddClear(): void {
        setSandwich('Buterbrot');
    }
    // Хук UseState возвращает массив из двух элементов
    // (состояние, функция для обновления состояния)
    // Состояние -  может быть чем угодно, например, строка или число,массив...
    return (
        <><h1>Sandwich</h1><img src="https://100foto.club/uploads/posts/2022-11/1668343862_18-100foto-club-p-sendvichi-dlya-kofeen-29.jpg" alt="" />
        <p>{sandwich}</p>
        <div className={`${style.container} ${style.anotherClass}`}>
            <button type="button" onClick={handeleAddBread} className={style.btn}>Add Brot</button>
            <button type="button" onClick={handeleAddCheese} className={style.btn}>Add Cheese</button>
            <button type="button" onClick={handeleAddSalami} className={style.btn}>Add Salami</button>
            <button type="button" onClick={handeleAddClear} className={style.btn}>Clingen</button>
        </div>
        </>
        );
}
