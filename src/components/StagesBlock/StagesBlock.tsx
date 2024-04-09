import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { classNames } from "@/utils";
import { FirstStageIcon } from "@/assets/icons/stage1";
import { StageSecondIcon } from "@/assets/icons/stage2";
import { StageThreeIcon } from "@/assets/icons/stage3";
import { StageFourIcon } from "@/assets/icons/stage4";
import { StageFiveIcon } from "@/assets/icons/stage5";
import { StageSixIcon } from "@/assets/icons/stage6";
import { StageSevenIcon } from "@/assets/icons/stage7";
import { StageEightIcon } from "@/assets/icons/stage8";
import { useInView } from "react-intersection-observer";

export const StagesBlock: React.FC = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [titleRef, titleInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [footerRef, footerInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const values = [
        {
            header: 'Предварительные переговоры и подготовка к сделке.',
            text: 'На этом этапе стороны обсуждают условия факторинговой сделки, определяют её основные параметры, такие как сумма финансирования, процентная ставка, срок финансирования, условия передачи прав требования и т. д.', 
            icon: <FirstStageIcon/>
        },
        {
            header: 'Сбор и анализ информации.',
            text: 'Фактор проводит проверку платёжеспособности клиента и его дебиторов, чтобы оценить риски сделки.',
            icon: <StageSecondIcon/>,
        },
        {
            header: 'Заключение договора факторинга.',
            text: 'Стороны подписывают договор, в котором определяются все условия факторинговой сделки. Договор должен содержать информацию о сумме финансирования, условиях передачи прав требования, порядке расчётов и других аспектах сделки.',
            icon: <StageThreeIcon/>,    
        },
        {
            header: 'Финансирование.',
            text: 'После заключения договора фактор перечисляет клиенту сумму финансирования в соответствии с условиями сделки.',
            icon: <StageFourIcon/>,
        },
        {
            header: 'Передача прав требования.',
            text: 'Клиент передаёт фактору права требования по оплате товаров или услуг, предоставленных дебиторам.',
            icon: <StageSixIcon/>,
        },
        {
            header: 'Оплата дебиторами.',
            text: 'Дебиторы оплачивают товары или услуги, предоставленные клиентом.',
            icon: <StageSevenIcon/>,
        },
        {
            header: 'Расчёты между сторонами.',
            text: 'Фактор перечисляет клиенту оставшуюся сумму за вычетом комиссии и процентов, а клиент оплачивает фактору комиссию и проценты в соответствии с условиями договора.',
            icon: <StageEightIcon/>,
        },
        {
            header: 'Завершение сделки.',
            text: 'После завершения всех расчётов сделка считается завершённой.',
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
                <div className={classNames(styles.header, 
                    //@ts-ignore
                    inView && styles.fade)} ref={ref}>Этапы работы</div>
                <div className={classNames(styles.subHeader, 
                    // @ts-ignore
                    titleInView && styles.fade
                )} ref={titleRef}>
                    Этапы заключения договора факторинга могут варьироваться в зависимости от условий сделки и требований законодательства. Вот основные этапы, которые могут быть характерны для большинства случаев:
                </div>
                {/* <div className={styles.divider}/> */}
                <div className={styles.row}>
                    <div className={styles.divider}/>
                    <>
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
                    </>
                </div>
                
                
                <div className={classNames(styles.rowValue, 
                    // @ts-ignore
                    animate && styles.animate)}>
                    <div className={styles.icon}>{debounceValue.icon}</div>
                    <div>
                        <strong>{debounceValue.header}</strong>
                        <span>{'\n\n'}</span>
                        <span>{debounceValue.text}</span>
                    </div>
                </div>
                <div className={classNames(styles.footerText, 
                    // @ts-ignore
                    footerInView && styles.fade
                )} ref={footerRef}>Это лишь общая схема этапов заключения договора факторинга. В зависимости от конкретных условий сделки и законодательства могут быть добавлены или изменены некоторые этапы. Также важно отметить, что факторинговые сделки могут иметь свои особенности и требования в разных странах и регионах.</div>
            </div>
        </div>

    );

}