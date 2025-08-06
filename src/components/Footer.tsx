import { FunctionComponent, useCallback, useRef } from "react";
import styles from "./Footer.module.css";
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {

  const social=useRef([
    {title:"TikTok",url:""},
    {title:"Memes",url:""},
    {title:"Twitter",url:""},
    {title:"Telegram",url:""},
    {title:"Instagram",url:""}
  ]).current
  const contractAddress=useRef("TBA").current
  const buyLink=useRef("").current

  const onHomeButtonClick = useCallback(() => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="footer" data-scroll-to="footer">
      <div className={[styles.subwrapper, className].join(" ")}>
        {/* <button onClick={()=>onHomeButtonClick()} className={[styles.gotohome, className].join(" ")}>
          <div >Go<br></br> Home</div>
          <div className={[styles.gotohomeimgwrapper, className].join(" ")}><img
            className={[styles.gotohomeimg, className].join(" ")}
            loading="lazy"
            alt=""
            src="/marv-happy.png"
          /></div>
        </button> */}
        <div className={[styles.line, className].join(" ")}></div>
        <div className={[styles.body, className].join(" ")}>
          <div className={[styles.description2wrapper, className].join(" ")}>
            <div className={[styles.buymarv, className].join(" ")}><a href={buyLink} target="_blank">Buy $inuPUTIN</a></div>
            <div className={[styles.contractaddwrapper, className].join(" ")}>
              <p className={[styles.contractadd, className].join(" ")}>CA: {contractAddress}</p>
              <button onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(contractAddress)}} className={[styles.copyiconwrapper, className].join(" ")}>
                <img style={{height:"auto",width:"100%"}} src={copy_icon}></img>
              </button>
            </div>
          </div>
          <div className={[styles.description3wrapper, className].join(" ")}>
          </div>
        </div>
      </div>
    </section>     
  );
};

export default Footer;


