import React, { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';
import ServiceOneImage from "@/assets/images/services1.jpeg";
import ServiceTwoImage from "@/assets/images/services2.jpeg";
import ServiceThreeImage from "@/assets/images/services3.jpeg";
import ServiceFourImage from "@/assets/images/services4.jpeg";
import ServiceFiveImage from "@/assets/images/services5.jpeg";
import ServiceSixImage from "@/assets/images/services6.jpeg";
import { CollapsedText } from "../CollapsedText";
import Image from "next/image";
import { classNames } from "@/utils";
import { useInView } from "react-intersection-observer";

export const ServicesBlock: React.FC = () => {

    const values = [
        {
            title: "Факторинг с регрессом",
            text: "Если покупатель не оплачивает свой счет в установленные сроки, факторинговая компания может потребовать от компании-клиента вернуть полученные средства. Это делается для того, чтобы факторинговая компания могла защитить свои инвестиции и избежать убытков. Факторинг с регрессом обычно предлагается компаниям, которые имеют высокий уровень риска неоплаты счетов своими покупателями, и может быть привлекательным для компаний, которые хотят получить доступ к краткосрочному финансированию, но не хотят принимать на себя все риски, связанные с неоплатой счетов.",
            image: ServiceOneImage,
        },
        {
            title: "Факторинг без регресса",
            text: "услуга, при которой факторинговая компания берет на себя все риски по неоплате счетов покупателями. Если покупатель не оплатит счет, факторинговая компания сама будет искать способы вернуть свои деньги. В этом случае компания-клиент не будет нести ответственности за неоплату счетов. Этот вид факторинга обычно предлагается компаниям с низким уровнем риска неоплаты счетов, и он может быть более привлекательным для компаний, которые хотят полностью избавиться от рисков, связанных с неоплатой счетов. Однако, факторинговые компании могут взимать более высокие комиссии за этот вид обслуживания, так как они не несут риска неполучения платежей от клиентов.",
            image: ServiceTwoImage,
        },
        {
            title: "Грузовой факторинг",
            text: "Вид факторинга, который используется транспортными компаниями и логистическими операторами. Он позволяет им получать краткосрочный кредит, продавая свои грузовые документы (коносаменты, накладные и т.д.) факторинговым компаниям. Грузовой факторинг может быть полезен транспортным компаниям и логистическим операторам, которые нуждаются в быстром доступе к капиталу для финансирования своих операций. Он также снижает их финансовые риски, так как факторинговые компании берут на себя риск неполучения оплаты за груз.",
            image: ServiceThreeImage,
        },
        {
            title: "Факторинг для предприятий",
            text: "Услуга, которая позволяет компании получить краткосрочный кредит, продав свои счета-фактуры факторинговой компании. Факторинговая компания оплачивает часть суммы сразу, а остаток - после получения оплаты от покупателей. Это может быть полезно для компаний, которые нуждаются в быстром доступе к капиталу, но не хотят брать долгосрочный кредит. Факторинговые компании также могут помочь управлять дебиторской задолженностью и снизить финансовые риски.",
            image: ServiceFourImage,
        },
        {
            title: "Факторинг для поставщиков товаров",
            text: "Услуга, которая позволяет компаниям получать быстрый доступ к деньгам за проданные товары. Факторинговые компании покупают счета-фактуры у компаний и оплачивают им часть суммы сразу, а остальное - после получения оплаты от покупателей. Это позволяет компаниям получать деньги за свои товары быстрее, чем если бы они ждали оплаты от своих покупателей. Факторинг также может помочь снизить финансовые риски, поскольку факторинговые компании принимают на себя риск неоплаты счетов покупателями.",
            image: ServiceFiveImage,
        },
        {
            title: "Закрытый факторинг",
            text: "Форма факторингового соглашения, при которой компания-клиент и факторинговая компания заключают договор без уведомления дебиторов (покупателей). В этом случае факторинговая компания приобретает право требования к дебиторам и становится их новым кредитором. Закрытый факторинг обычно используется, когда компания-клиент хочет сохранить конфиденциальность своих финансовых операций или избежать негативных последствий, связанных с раскрытием информации о своей задолженности. Однако, использование закрытого факторинга может привести к снижению доверия со стороны покупателей и увеличению рисков неполучения платежей.",
            image: ServiceSixImage,
        }

    ];

    const [ref0, inView0] = useInView({ threshold: 0, triggerOnce: true });
    const [ref1, inView1] = useInView({ threshold: 0, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0, triggerOnce: true });
    const [ref4, inView4] = useInView({ threshold: 0, triggerOnce: true });
    const [ref5, inView5] = useInView({ threshold: 0, triggerOnce: true });

    const refs = [ref0, ref1, ref2, ref3, ref4, ref5];
    const views = [inView0, inView1, inView2, inView3, inView4, inView5];

    return (
            <div className={styles.block} id='ServicesBlock'>
            <div className={styles.content}>
                <div className={styles.header}>Услуги</div>
                <div className={styles.values}>
                    {values.map((val, index) => (
                            <div ref={refs[index]} key={val.title} id={'animatedCard' + index} 
                            className={classNames(styles.animateValue,
                            // @ts-ignore
                            views[index] && styles.fade)}>
                                <div className={styles.value}>
                                <div className={styles.valueImage}>
                                    <Image src={val.image} alt={val.title} />
                                </div>
                                <div className={styles.valueContent}>
                                    <div className={styles.valueTitle}>{val.title}</div>
                                    <CollapsedText text={val.text}/>
                            </div>
                            </div>
                        </div>
                    ))}   
                    
                </div>        
            </div>
        </div>
    );
}