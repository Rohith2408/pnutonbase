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
                    <p className={styles.title}>Where Crypto Meets Comedy!</p>
                    <p className={styles.text}>
                    Dintlo is a trending meme coin known for its playful branding and community-driven growth. It’s quickly gaining popularity through social media buzz and humor, making it a high-risk, high-reward option for adventurous investors.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About