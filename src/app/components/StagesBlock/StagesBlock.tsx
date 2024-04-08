import React, { useState } from "react";
import styles from './styles.module.css';
import { classNames } from "@/app/utils";
import { FirstStageIcon } from "@/app/assets/icons/stage1";
import { StageSecondIcon } from "@/app/assets/icons/stage2";
import { StageThreeIcon } from "@/app/assets/icons/stage3";
import { StageFourIcon } from "@/app/assets/icons/stage4";
import { StageFiveIcon } from "@/app/assets/icons/stage5";

export const StagesBlock: React.FC = () => {
    const values = [
        {
            text: 'Заключение договора между факторинговой компанией и клиентом', 
            icon: <FirstStageIcon/>
        },
        {
            text: 'Анализ дебиторской задолженности клиента и определение условий факторингового обслуживания.',
            icon: <StageSecondIcon/>,
        },
        {
            text: 'Покупка дебиторской задолженности клиента',
            icon: <StageThreeIcon/>,    
        },
        {
            text: 'Оплата счетов-фактур клиента',
            icon: <StageFourIcon/>,
        },
        {
            text: 'Мониторинг оплаты счетов покупателями и возврат неоплаченных счетов клиенту',
            icon: <StageFiveIcon/>,
        },
    ];

    const [activeValue, setActiveValue] = useState(values[0]);
    return (
        <div className={styles.block} id='StagesBlock'>
            <div className={styles.content}>
                <div className={styles.header}>Этапы работы</div>
                <div className={styles.divider}/>
                <div className={styles.row}>
                    {values.map((val, index) => (
                        // @ts-ignore
                        <div key={index} className={classNames(styles.value,activeValue.text === val.text && styles.activeValue )} 
                            onClick={() => setActiveValue(val)}>
                            <span>0{index + 1}</span>
                            <div className={styles.radio}>
                            {activeValue.text === val.text && (<div className={styles.center}/>)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.rowValue}>
                    <div className={styles.icon}>{activeValue.icon}</div>
                    <span>{activeValue.text}</span>
                </div>
            </div>
        </div>

    );

}