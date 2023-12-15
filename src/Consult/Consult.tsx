import React, { useState } from 'react';

import style from './Consult.module.css';

function Consult(): JSX.Element {
    const [consult, setConsult] = useState<number>(0);
    function handlePlus(): void {
        setConsult(consult + 1);
    }
    function handelMinus(): void {
        setConsult(consult - 1);
    }
    return (
        <><h1>Counter</h1>
        <img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className={`${style.container} ${style.consultClass}`}>
            <button className={style.btn} type="button" onClick={handlePlus}>Add Consult</button>
            <span style={{ color: 'red' }}>{consult}</span>
            <button className={style.btn} type="button" onClick={handelMinus}>Remove Consult</button>
        </div>
        </>
    );
}
export default Consult;
