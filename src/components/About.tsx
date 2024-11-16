import styles from "./About.module.css";
import image from '../images/About/gif-1.gif'
import banner from '../images/banner.gif'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
                <div className={styles.body_wrapper}>
                    <p className={styles.title}>Unleash the fire of fortune</p>
                    <p className={styles.text}>
                    Blaze, the fiery demon dragon, soars through the skies of a volcanic underworld, igniting opportunities with the flames from his tail and ruling the crypto realm with a crown of power. Born from the dark lands of chaos, Blaze brings the heat to meme coins, promising blazing-fast transactions and unrivaled potential. Join the flight and let the fire fuel your fortune!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About