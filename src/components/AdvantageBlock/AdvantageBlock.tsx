import React, { useState } from "react";

import Image from "next/image";
import UserImage from "@/assets/images/user.jpeg";
import styles from './styles.module.scss';
import { LikeIcon } from "@/assets/icons/like-icon";
import { PlusIcon } from "@/assets/icons/plus-icon";
import { FileIcon } from "@/assets/icons/file-icon";
import { Button } from "@/atoms";
import { Modal } from "../Modal";
import { useInView } from "react-intersection-observer";
import { classNames } from "@/utils";

export const AdvantageBlock: React.FC = () => {
    const [modal, setModal] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
    const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true })
    return (
        <div className={styles.block} id='AdvantageBlock' >
            <div className={classNames(
                styles.content)}>
                <div 
                    ref={ref} 
                    className={classNames(styles.column, 
                    // @ts-ignore
                    inView && styles.fade)}>
                    <div className={styles.header}>Наши преимущества</div>
                    <div className={styles.smallImage}>
                        <Image src={UserImage} alt={""}/>
                    </div>
                    <div className={styles.values}>
                        <div className={styles.value}>
                            <LikeIcon/>
                            <span>Индивидуальный подход к каждому клиенту</span>
                        </div>
                        <div className={styles.value}>
                            <PlusIcon/>
                            <span> Быстрое пополнение оборотных средств</span>
                        </div>
                        <div className={styles.value}>
                            <FileIcon/>
                            <span>Минимальный пакет документов</span>
                        </div>
                    </div>
                    <Button flex className={styles.button} onClick={() => setModal(true)}>Связаться</Button>
                </div>
                <div 
                    ref={imageRef} 
                    className={classNames(styles.image, 
                    // @ts-ignore
                    imageInView && styles.fade)}>
                    <Image src={UserImage} alt={""}/>
                </div>
            </div>
            <Modal open={modal} onClose={() => setModal(false)}/>
        </div>
    );
}