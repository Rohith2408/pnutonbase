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
  const contractAddress=useRef("0x33A3Db507c8D087e069d81B5119eC570c689a66c").current

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
            <div className={[styles.buymarv, className].join(" ")}>Buy $PNUT</div>
            <div className={[styles.contractaddwrapper, className].join(" ")}>
              <p className={[styles.contractadd, className].join(" ")}>Contract address: {contractAddress}</p>
              <button onClick={()=>{alert("Contract Address Copied");navigator.clipboard.writeText(contractAddress)}} className={[styles.copyiconwrapper, className].join(" ")}>
                <img style={{height:"auto",width:"100%"}} src={copy_icon}></img>
              </button>
            </div>
          </div>
          <div className={[styles.description3wrapper, className].join(" ")}>
            {/* <div style={{width:"33%",gap:"3%",display:"flex",flexDirection:"column"}}>
              <div className={[styles.marvtext, className].join(" ")}>MARV</div>
              <div className={[styles.jointext, className].join(" ")}>Join Marv at Marv Army</div>
              <div style={{ display: "flex", flexDirection: "row", gap: "5%" }}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Twitter"
                  src={twitter_icon}
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Telegram"
                  src={telegram_icon}
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Dex"
                  src={dex_icon}
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Dex"
                  src={dextools_icon}
                />
              </a>
            </div>
            </div> */}
            {/* <div style={{width:"33%",display:"flex",flexDirection:"column",justifyContent:'start'}}>
              <div className={[styles.gopolatitle, className].join(" ")}>Go Marv!</div>
              <div className={[styles.gopolalist, className].join(" ")}>
                <div>Join Marvarmy</div>
                {
                  social.map((item)=>
                  <div><a onClick={()=>window.open(item.url)}>{item.title}</a></div>
                  )
                }
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>     
  );
};

export default Footer;


