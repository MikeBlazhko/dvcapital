import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import BackgroundFirst from "@/assets/images/background1.png";
import BackgroundSecond from "@/assets/images/background2.png";
import BackgroundThrid from "@/assets/images/background3.png";
import BackgroundFour from "@/assets/images/background4.png";

import { LogoIcon } from "@/assets/icons/logo-icon";
import { ArrowIcon } from "@/assets/icons/arrow-icon";
import { DocumentIcon } from "@/assets/icons/document-icon";
import { DownloadIcon } from "@/assets/icons/download-icon";
import { FullUserIcon } from "@/assets/icons/full-user-icon";
import UserImage from "@/assets/images/user.png";
import styles from './styles.module.scss';
import Link from "next/link";
import { classNames } from "@/utils";

enum TabAlias {
    General = 'General',
    Registration = 'Registration',
    Issue = 'Issue',
    Messages = 'Messages'
}


const tabs = [
    {label: 'Общие сведения', value: TabAlias.General},
    {label: 'Регистрационные документы', value: TabAlias.Registration},
    {label: 'Эмиссионные документы', value: TabAlias.Issue},
    {label: 'Сообщения', value: TabAlias.Messages},
];

const mainInfo = [
    {title: 'ОГРН:', value: '1085012002470\nот 06.03.2023 г.'},
    {title: 'Юридический адрес:', value: '143914, Московская область,\nГ.О. Реутов, г. Реутов, Транспортный пер., д. 10, офис 6'},
    {title: 'ИНН:', value: '5012047676'},
    {title: 'Фактический адрес:', value: '127055, г. Москва,\nТихвинский переулок,\nд.11 стр.2, комната 28'},
    {title: 'КПП:', value: '504101001'},
    {title: 'Уставный капитал:', value: '70 млн ₽'},

];

const documents: Record<string, string[]> = {
    [TabAlias.Registration]: ['ustav_i_vnutrennie_dokumenty'],
    [TabAlias.Issue]: [
        'emissionnye_dokumenty', 
        'emissionnye_dokumenty/bo1', 
        'emissionnye_dokumenty/bo2', 
        'emissionnye_dokumenty/bo3', 
        'emissionnye_dokumenty/bo4',
        'emissionnye_dokumenty/bo5',
    ]
}


const files = [
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
    {label: 'Политика конфиденциальности', href: 'https://policies.google.com/privacy'},
   
];

export const InvestBlock: React.FC = () => {
    const [activeTab, setActiveTab] = useState(tabs[3]);

    const fetch = async () => {
        // @ts-ignore
        documentWidget.load({
            companyDirectory: 'naftatrans',
            linkItemClass: ['help', 'testClass'],
        });
    }

   useEffect(() => {
    fetch();
   },[activeTab]);

   const headerImage = useMemo(() => {
      switch (activeTab.value) {
    case TabAlias.General:
      return BackgroundFirst;
    case TabAlias.Registration:
      return BackgroundSecond;
      case TabAlias.Issue:
      return BackgroundThrid;
    default:
      return BackgroundFour;
  }

   }, [activeTab]);

    return (
        <div className={styles.block}>
            <div className={styles.background}>
                <Image src={headerImage} alt="image"/>
            </div>
            <div className={styles.gradiend}></div>
            <div className={styles.content}>
                <div className={styles.topRow}>
                   <div className={styles.logo}>
                     <LogoIcon/>
                   </div>
                    <div className={styles.divider}></div>
                    <Link href='/'>
                        <div className={styles.topRowText}>
                            <div>{'на cайт\nкомпании'}</div>
                            <ArrowIcon/>
                        </div>
                    </Link>
                </div>
               <div className={styles.tabs}>
                {tabs.map((val) => (
                    <div 
                        key={val.value} 
                        onClick={() => setActiveTab(val)} 
                        className={classNames(
                            styles.tab, 
                            // @ts-ignore
                            val.value === activeTab.value && styles.activeTab
                            )}>
                        {val.label}
                    </div>
                ))}
               </div>
                    <div className={styles.info}>
                        {activeTab.value === TabAlias.General && (
                            <div className={styles.mainInfo}>
                                <div className={styles.mainInfoGrid}>
                                    {mainInfo.map((info) => (
                                        <div key={info.title} className={styles.mainInfoColumn}>
                                            <div className={styles.mainInfoTitle}>{info.title}</div>
                                            <div className={styles.mainInfoValue}>{info.value}</div>
                                        </div>

                                    ))}
                                </div>
                                <div className={styles.avatarColumn}>
                                    <div className={styles.avatar}>
                                        <Image src={UserImage} alt='general'/>
                                    </div>
                                    <div className={styles.mainInfoTitle}>
                                        Генеральный директор:
                                    </div>
                                    <div className={styles.mainInfoValue}>
                                        Нечаев Андрей Анатольевич
                                    </div>
                                </div> 
                            </div>

                        )}
                        {[TabAlias.Issue, TabAlias.Registration].includes(activeTab.value) && (
                            <span className={styles.documentGrids}>
                                {documents[activeTab.value].map((value) => (
                                    <div key={value} className={classNames('document-widget_wrapper', styles.documentGrid)} data-document_type={value}>
                                        <div className="document-widget_item button">
                                            <a href="" target="_blank" className={styles.document}>
                                                <div className={styles.documentIconBlock}>
                                                <div className={styles.documentIcon}>
                                                    <DocumentIcon/>
                                                </div>
                                                <div className={styles.downloadIcon}>
                                                    <DownloadIcon/>
                                                </div>
                                                </div>
                                                <div data-param="ORIGIN"></div>
                                            </a>
                                        </div>
                                    </div>  
                                ))}
                            </span>
                        )}
                        {activeTab.value === TabAlias.Messages && (
                            <div className={styles.filesGrid}>
                                {files.map((value) => (
                                    <div key={value.label} >
                                        <div className="document-widget_item button">
                                            <a href={value.href} target="_blank" className={styles.document}>
                                                <div className={styles.documentIconBlock}>
                                                <div className={styles.documentIcon}>
                                                    <DocumentIcon/>
                                                </div>
                                                <div className={styles.downloadIcon}>
                                                    <DownloadIcon/>
                                                </div>
                                                </div>
                                                <div>{value.label}</div>
                                            </a>
                                        </div>
                                    </div>  
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.footer}>
                        © 2024 ООО «ДВ Капитал»
                    </div>
               </div>
                <div className={styles.label}>
                <FullUserIcon/>
                <span>Cтраница для инвесторов</span>
               </div>
            
        </div>
    );
}