import React from "react";
import styles from './styles.module.css';
import MapImage from "@/app/assets/images/map.png";
import Image from "next/image";

export const MapBlock: React.FC = () => {
    return (
        <div className={styles.block}>
           <div className={styles.content}>
            <div className={styles.background}>
                <Image src={MapImage} alt="image"/>
            </div>
            <div className={styles.mainText}>
                <span>Основным нашим направлением является оказание факторинговых услуг, преимущественно </span>
                <span className={styles.blueText}>российским дальневосточным торговым и производственным компаниям.</span>
            </div>
            <div className={styles.row}>
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