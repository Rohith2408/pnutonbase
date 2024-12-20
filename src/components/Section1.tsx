import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import coingecko_icon from '../images/Section1/coingecko.png'
import image from '../images/Section1/image.png'
import banner from '../images/banner.gif'
import insta_icon from '../images/Section1/instagram.png'
import whitehouse_image from '../images/Section1/whitehouse.png'

const Section1=()=>{

    const socialIcons= useRef([
        { src: telegram_icon, link: "https://t.me/PnutOnBase" },
        { src: twitter_icon, link: "https://x.com/PeanutOnBase" },
        { src:dex_icon, link: "https://dexscreener.com/base/0x430Bd97e6d8e6ee66aB170508006F6a297FA209C" },
        { src: dextools_icon, link: "https://www.dextools.io/app/en/base/pair-explorer/0x430bd97e6d8e6ee66ab170508006f6a297fa209c?t=1731850388592" },
        // { src:coingecko_icon, link: "" },
        // { src:insta_icon, link: "" }
    ]).current
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()
    const ca=useRef("0x33A3Db507c8D087e069d81B5119eC570c689a66c").current

    useEffect(()=>{

    },[currentbg])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    {/* <img className={styles.banner} src={banner}/> */}
                    <p className={styles.title}>$Pnut</p>
                    <div className={styles.socialWrapper}>
                    {
                        socialIcons.map((icon) => (
                            <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                <img
                                    className={styles.socialicons}
                                    loading="lazy"
                                    alt=""
                                    src={icon.src}
                                />
                            </a>
                        ))}
                    </div>
                    <div className={styles.cawrapper}>
                        <p className={styles.caHeading}>CA</p>
                        <p className={styles.ca} >{ca}</p>
                        <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                    </div>
                </div>
                <img className={styles.penguin}/>
                <img src={whitehouse_image} className={styles.whitehouse}/>
            </div>
        </section>
    )
}

export default Section1