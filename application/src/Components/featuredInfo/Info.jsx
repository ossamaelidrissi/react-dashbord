import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typed from 'react-typed'
import {useTranslation} from 'react-i18next';
import './style.scss';
export default function Info() {

        const {t,i18n} = useTranslation();
    return (
        <div className="featured">
                <div className="item">
                    <span className="title">{t("Compared to last year")}</span>
                    <div className = "Container">
                        <span className = "Users"><Typed className = "Typed" strings = {["140"]} typeSpeed = {200}/> </span>
                        <span className = "Rate"> +520 
                            <ArrowUpwardIcon className = "Icon" />
                        </span>
                    </div>
                </div>
                <div className="item">
                    <span className="title">{t("Compared to last month")}</span>
                    <div className = "Container">
                        <span className = "Users"><Typed className = "Typed" strings = {["520"]} typeSpeed = {200}/>  </span>
                        <span className = "Rate"> +280 
                            <ArrowUpwardIcon className = "Icon positive" />
                        </span>
                    </div>
                    
                </div>
                <div className="item">
                <span className="title">{t("Compared to last day")}</span>
                <div className = "Container">
                    <span className = "Users"><Typed className = "Typed" strings = {["533"]} typeSpeed = {200}/>  </span>
                    <span className = "Rate"> +13
                        <ArrowUpwardIcon className = "Icon" />
                    </span>
                </div>
                
            </div>
            </div>
    )
}


