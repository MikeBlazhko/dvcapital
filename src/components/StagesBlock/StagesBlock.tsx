import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { classNames } from "@/utils";
import { FirstStageIcon } from "@/assets/icons/stage1";
import { StageSecondIcon } from "@/assets/icons/stage2";
import { StageThreeIcon } from "@/assets/icons/stage3";
import { StageFourIcon } from "@/assets/icons/stage4";
import { StageFiveIcon } from "@/assets/icons/stage5";

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
    const [debounceValue, setDebounceValue] =useState(activeValue);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (animate){
            setTimeout(() => {
                setDebounceValue(activeValue);
                setAnimate(false);
            }, 200)
        }

    }, [animate]);


    return (
        <div className={styles.block} id='StagesBlock'>
            <div className={styles.content}>
                <div className={styles.header}>Этапы работы</div>
                <div className={styles.divider}/>
                <div className={styles.row}>
                    {values.map((val, index) => (
                        // @ts-ignore
                        <div key={index} className={classNames(styles.value,activeValue.text === val.text && styles.activeValue )} 
                            onClick={() => {
                                setAnimate(true);
                                setActiveValue(val);

                            }}>
                            <span>0{index + 1}</span>
                            <div className={styles.radio}>
                            {activeValue.text === val.text && (<div className={styles.center}/>)}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className={classNames(styles.rowValue, 
                    // @ts-ignore
                    animate && styles.animate)}>
                    <div className={styles.icon}>{debounceValue.icon}</div>
                    <span>{debounceValue.text}</span>
                </div>
            </div>
        </div>

    );

}