import React, { useEffect, useState } from "react";

import Image from "next/image";
import UserImage from "@/assets/images/user2.png";
import styles from './styles.module.scss';
import { Button, Checkbox, Input } from "@/atoms";
import { UserIcon } from "@/assets/icons/user-icon";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { useInView } from "react-intersection-observer";
import { classNames } from "@/utils";
import { Modal } from "../Modal";

export const UserBlock: React.FC = () => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.2 });

    const sendForm =() =>  {
        return fetch('http://dvcapital.ru/mail.php', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name, phone})
        })
        .then(response => response.json())
        .then(body => {
            console.log(body);
            setModal(true);
            setDisabled(true);
        })
        .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        if (disabled){
            setPhone('');
            setName('');
            setChecked(false);
            setDisabled(false);
        }
    }, [name, phone]);
   
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
                        onClick={() =>sendForm()}
                        disabled={!checked || name.trim().length === 0 || phone.replace("_", '').trim().length !== 18 || disabled}
                    >Связаться</Button>
                </div>
                <div className={styles.image}>
                    <Image src={UserImage} alt={""}/>
                </div>
            </div>
            <Modal open={modal} defaultSuccess onClose={() => setModal(false)}/>
        </div>
    );
}