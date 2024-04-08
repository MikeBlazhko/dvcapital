import { XCircleIcon } from "@/app/assets/icons/x-circle-icon";
import { Modal as AntModal, Form } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import  ModalImage from "@/app/assets/images/modal.png";
import { UserIcon } from "@/app/assets/icons/user-icon";
import { PhoneIcon } from "@/app/assets/icons/phone-icon";
import styles from './styles.module.css';
import { Button, Checkbox, Input } from "@/app/atoms";
import { useForm, useWatch } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { ModalCheckIcon } from "@/app/assets/icons/modal-check-icon";
interface Props {
    open: boolean;
    onClose: ()=> void;

}

export const Modal: React.FC<Props> = ({open, onClose}) => {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [checked, setChecked] = useState(false);
   const [success, setSuccess] = useState(false);


    return (
        <AntModal 
            wrapClassName={styles.wrapModal} 
            className={styles.modal} 
            rootClassName={styles.rootModal}  
            centered open={open} 
            onCancel={onClose} 
            footer={<></>} 
            closeIcon={<div className={styles.closeIcon}><XCircleIcon/></div>}>
            <div className={styles.block}>
                {!success && (
                    <div className={styles.column}>
                        <div className={styles.header}>
                            Ответим на все ваши вопросы и подберем нужный вид факторинга для вашей компании
                            </div>
                            <Input 
                                placeholder="Имя" 
                                before={<UserIcon/>}
                                name={'name'}
                                value={name} 
                                onChange={(e) => setName(e)}
                                />
                            <Input 
                                withMask 
                                placeholder="Номер телефона" 
                                before={<PhoneIcon/>} 
                                name={'phone'}
                                value={phone} 
                                onChange={(e) => setPhone(e)}
                                />
                        <div className={styles.checkboxRow}>
                            <Checkbox value={checked} onChange={(e) => setChecked(e)}/>
                            <div>
                                <span>Я согласен с </span>
                                <span className={styles.policy}>политикой конфиденциальности</span>
                            </div>
                        </div>
                        <Button 
                        disabled={!checked || name.trim().length === 0 || phone.replace("_", '').trim().length !== 18}
                            onClick={() => setSuccess(true)}>
                            Связаться
                        </Button>
                    </div>
                )}
                {success && (
                    <div className={styles.succesColumn}>
                        <ModalCheckIcon/>
                        <span>Данные успешно отправлены. Мы свяжемся с вами в ближайшее время</span>
                    </div>
                )}
                <div className={styles.image}>
                    <Image src={ModalImage} alt="image"/>
                </div>
            </div>
        </AntModal>

    );

}