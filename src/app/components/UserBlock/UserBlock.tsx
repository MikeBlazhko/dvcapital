import React from "react";

import Image from "next/image";
import UserImage from "@/app/assets/images/user2.png";
import styles from './styles.module.css';
import { LikeIcon } from "@/app/assets/icons/like-icon";
import { PlusIcon } from "@/app/assets/icons/plus-icon";
import { FileIcon } from "@/app/assets/icons/file-icon";
import { Button, Checkbox, Input } from "@/app/atoms";
import { UserIcon } from "@/app/assets/icons/user-icon";
import { PhoneIcon } from "@/app/assets/icons/phone-icon";

export const UserBlock: React.FC = () => {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <div className={styles.header}>Ответим на все ваши вопросы и подберем нужный вид факторинга для вашей компании</div>
                    <div className={styles.inputs}>
                        <Input placeholder="Имя" before={<UserIcon/>}/>
                        <Input placeholder="Номер телефона" before={<PhoneIcon/>}/>
                        <div className={styles.checkboxRow}>
                            <Checkbox/>
                            <div>
                                <span>Я согласен с </span>
                                <span className={styles.policy}>политикой конфиденциальности</span>
                            </div>
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