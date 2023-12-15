/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';

import style from './Sandwiches.module.css';

function Sandwiches(): JSX.Element {
    const [butterbrot, setButterbrot] = useState<string>('Sandwiches');
    function handeleAddBread(): void {
        setButterbrot('${butterbrot} Bread');
    }
    function handeleAddCheese(): void {
        setButterbrot('${butterbrot} Cheese');
    }
    function handeleAddSalami(): void {
        setButterbrot('${butterbrot} Salami');
    }
    function handeleAddClear(): void {
        setButterbrot('Sandwiches');
    }
    return (
        <><h1>Sandwiches</h1><img src="https://cdni.rbth.com/rbthmedia/images/2021.03/original/6042013a15e9f959781a71dc.jpg" alt="" />
        <p>{butterbrot}</p>
        <div className={`${style.container} ${style.anotherClass}`}>
            <button type="button" onClick={handeleAddBread} className={style.btn}>Add bread</button>
            <button type="button" onClick={handeleAddCheese} className={style.btn}>Add Cheese</button>
            <button type="button" onClick={handeleAddSalami} className={style.btn}>Add Salami</button>
            <button type="button" onClick={handeleAddClear} className={style.btn}>Remove all ingredients</button>

        </div>
        </>
        );
}
export default Sandwiches;
