import React from "react";

import Image from "next/image";
import UserImage from "@/app/assets/images/user.jpeg";
import styles from './styles.module.css';
import { LikeIcon } from "@/app/assets/icons/like-icon";
import { PlusIcon } from "@/app/assets/icons/plus-icon";
import { FileIcon } from "@/app/assets/icons/file-icon";
import { Button } from "@/app/atoms";

export const AdvantageBlock: React.FC = () => {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <div className={styles.header}>Наши преимущества</div>
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
                    <Button flex>Связаться</Button>
                </div>
                <div className={styles.image}>
                    <Image src={UserImage} alt={""}/>
                </div>
            </div>
        </div>
    );
}