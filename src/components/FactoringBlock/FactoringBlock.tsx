import React from "react";
import styles from './styles.module.css';
import Image from "next/image";
import FactoringImage from "@/assets/images/factoring.png";
import { useInView } from "react-intersection-observer";
import { classNames } from "@/utils";

export const FactoringBlock: React.FC = () => {
    const [titleRef, titleInView] = useInView({ threshold: 0.2 });
    const [textRef, textInView] = useInView({ threshold: 0.2 });
    const [ref, inView] = useInView({ threshold: 0.2 });
    const values = [
        'Сбор счетов-фактур от компании и их анализ.',
        'Оплата факторинговой компанией части или всей суммы счетов-фактур компании',
        'Оплата покупателем товаров или услуг компании',
        'Перечисление фактором оставшихся средств на счет компании после получения оплаты от покупателя'
    ];
    return (
        <div className={styles.block} id='FactoringBlock'>
            <div className={styles.background}>
                <Image src={FactoringImage} alt="image"/>
            </div>
            <div className={styles.content}>
                <div 
                    ref={titleRef} 
                    className={classNames(styles.header,
                        // @ts-ignore
                        textInView && styles.fade,
                    )}>
                    Что такое факторинг
                </div>
                <div 
                    ref={textRef} 
                    className={classNames(styles.text, 
                        //@ts-ignore
                        textInView && styles.fade)}>
                    <span>
                        Это способ получить деньги сразу, не дожидаясь, пока покупатели расплатятся за покупки. Финансовая организация платит компании часть суммы сразу (обычно до 80% от стоимости проданных товаров или услуг), остальное - когда покупатели оплатят свои счета.
                    </span>
                    <span>Процесс факторинга включает в себя:</span>
                </div>
                <div ref={ref} className={classNames(styles.values, 
                    // @ts-ignore
                    inView && styles.fade
                )}>
                    {values.map((value, index) => (
                        <div key={value} className={styles.value}>
                            <div className={styles.valueHeader}>
                                0{index + 1}
                            </div>
                            <div className={styles.valueText}>
                                {value}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    );
}