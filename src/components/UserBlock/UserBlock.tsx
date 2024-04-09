import React, { useState } from "react";

import Image from "next/image";
import UserImage from "@/assets/images/user2.png";
import styles from './styles.module.css';
import { Button, Checkbox, Input } from "@/atoms";
import { UserIcon } from "@/assets/icons/user-icon";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { useInView } from "react-intersection-observer";
import { classNames } from "@/utils";

export const UserBlock: React.FC = () => {
const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [checked, setChecked] = useState(false);
   const [ref, inView] = useInView({ threshold: 0.2 });
   
    return (
        <div className={styles.block} id='UserBlock'>
            <div ref={ref} className={classNames(styles.content, 
                //@ts-ignore
                inView && styles.fade
            )}>
                <div className={styles.column}>
                    <div className={styles.header}>Ответим на все ваши вопросы и подберем нужный вид факторинга для вашей компании</div>
                    <div className={styles.smallImage}>
                        <Image src={UserImage} alt={""}/>
                    </div>
                    <div className={styles.inputs}>
                        <Input placeholder="Имя" before={<UserIcon/>} value={name} 
                                onChange={(e) => setName(e)}/>
                        <Input withMask placeholder="Номер телефона" before={<PhoneIcon/>} value={phone} 
                                onChange={(e) => setPhone(e)}/>
                        <div className={styles.checkboxRow}>
                            <Checkbox value={checked} onChange={(e) => setChecked(e)}/>
                            <div>
                                <span>Я согласен с </span>
                                <span className={styles.policy}>политикой конфиденциальности</span>
                            </div>
                        </div>
                    </div>
                    <Button 
                        flex
                        disabled={!checked || name.trim().length === 0 || phone.replace("_", '').trim().length !== 18}
                    >Связаться</Button>
                </div>
                <div className={styles.image}>
                    <Image src={UserImage} alt={""}/>
                </div>
            </div>
        </div>
    );
}