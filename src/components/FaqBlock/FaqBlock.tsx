/* eslint-disable react/jsx-no-comment-textnodes */
import React, { PropsWithChildren, useState } from "react";
import styles from './styles.module.css';
import { classNames } from "@/utils";
import { ArrowIcon } from "@/assets/icons/arrow-icon";

interface Props {
    title: string;
    
}

const ExpandedItem: React.FC<PropsWithChildren<Props>> = ({children, title}) => {
    const [open, setOpen]  = useState(false);
    return (
        <div 
            className={classNames(
            styles.item ,
            `${open && styles.activeItem}`)
            }
            onClick={() => setOpen(!open)} 
            >
            <div className={styles.column}>
                <div className={styles.columnTitle}>{title}</div>
                <span>{children}</span>
            </div>
            <div className={classNames(styles.icon, `${open && styles.activeIcon}`)}>
                <ArrowIcon/>
            </div>
        </div>
    );
}

export const FaqBlock: React.FC = () => {
    return (
        <div className={styles.block} id='FaqBlock'>
            <div className={styles.content}>
                <div className={styles.header}>Вопрос-ответ</div>
                <div className={styles.items}>
                    <ExpandedItem title="Сколько стоит факторинг?">
                        Ключевая ставка ЦБ РФ +10%
                    </ExpandedItem>
                    <ExpandedItem title="Кому будет полезен факторинг">
                        <ol>
                            <li>
                                <strong>Торговые компании.</strong> Факторинг позволяет торговым компаниям получать финансирование под уступку денежных требований к своим клиентам. Это может быть полезно, если клиенты задерживают оплату или если компании необходимо быстро получить денежные средства.
                            </li>
                            <li>
                                <strong>Производители и поставщики.</strong> Факторинг может помочь производителям и поставщикам получить оплату за свои товары и услуги, особенно если они работают с новыми клиентами или клиентами, которые имеют проблемы с оплатой.
                            </li>
                            <li>
                                <strong>Компании, работающие с сезонными колебаниями спроса.</strong> Факторинг может предоставить дополнительное финансирование в периоды, когда спрос на продукцию компании снижается.
                            </li>
                            <li>
                                <strong>Компании с большим количеством мелких клиентов.</strong> Факторинг может упростить процесс получения оплаты от большого количества мелких клиентов.
                            </li>
                            <li>
                                <strong>Компании, которые хотят улучшить свою ликвидность.</strong> Факторинг предоставляет доступ к денежным средствам, которые могут быть использованы для финансирования текущей деятельности компании.
                            </li>
                        </ol>
                    </ExpandedItem>
                    <ExpandedItem title="Каким поставщикам подойдет факторинг">
                        <span>Факторинг подойдёт поставщикам, которые:</span>
                        <ul>
                            <li>работают с отсрочкой платежа;</li>
                            <li>имеют широкий круг покупателей, среди которых есть крупные, средние и мелкие компании;</li>
                            <li>сталкиваются с задержками платежей со стороны покупателей</li>
                            <li>хотят повысить свою финансовую устойчивость и улучшить показатели ликвидности.</li>
                        </ul>
                        <span>Факторинг может быть особенно полезен поставщикам, работающим в таких отраслях, как производство, оптовая торговля, сфера услуг.</span>
                    </ExpandedItem>
                </div>
            </div>
        </div>
    );
}