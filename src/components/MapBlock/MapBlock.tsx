/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from './styles.module.scss';
import MapImage from "@/assets/images/map.png";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { classNames } from "@/utils";


export const MapBlock: React.FC = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });
    const [textRef, textInView] = useInView({ threshold: 0.2 });

    return (
        
        <div className={styles.block} id='MapBlock' >
          
           <div 
           className={classNames(
           styles.mapContent)}>
            <div className={styles.background}>
                <Image src={MapImage} alt="image"/>
            </div>
            <div 
                ref={ref}
                className={classNames(
                styles.mainText, 
                // @ts-ignore
                inView && styles.fade
            )}>
                <span>Основным нашим направлением является оказание факторинговых услуг, преимущественно </span>
                <span className={styles.blueText}>российским дальневосточным торговым и производственным компаниям.</span>
            </div>
            <div 
                ref={textRef} 
                className={classNames(styles.row, 
                     // @ts-ignore
                inView && styles.fade
                )}>
                <div className={styles.column}>
                    <div className={styles.columnTitle}>01</div>
                    <div className={styles.columnValue}>
                        Мы стремимся стать надежным партнером для компаний самых разных отраслей, обслуживая как крупные предприятия и организации, так и небольшие компании.
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.columnTitle}>02</div>
                    <div className={styles.columnValue}>
                        В нашей команде работают специалисты своего дела, которые ответят на все ваши вопросы и помогут с заполнением документов.
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}