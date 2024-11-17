import styles from "./About.module.css";
import image from '../images/About/image.png'
import banner from '../images/banner.gif'
import { useEffect, useRef, useState } from "react";

const About=()=>{

    const elementRef = useRef<HTMLDivElement>(null);
    const height=useRef(0);
    const [dim,setDim]=useState<any>(undefined)
    const scale=useRef(-150);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (elementRef.current) {
                window.removeEventListener("scroll", handleScroll);
            }
        };

      }, []);

    const handleScroll=(e:any)=>{
        if (elementRef.current) {
            // Get the bounding client rectangle
            setDim(elementRef.current.getBoundingClientRect());
        }
        console.log("scroll event",window.scrollY)
    }

    if(dim && dim.y<400 && dim.y>0){
        console.log("case 1")
        scale.current=((dim.y)/400)*150
    }
    else if(dim && dim.y>400){
        console.log("case 2")
        scale.current=150
    }
    else if(dim && dim.y<0 && dim.y>-dim.height){
        console.log("case 3")
        scale.current=0
    }
    else if(dim && dim.y<-dim.height){
        console.log("case 4")
        scale.current=150
    }
    
    console.log(dim)

    return(
        <section ref={elementRef} className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={image} className={styles.image} style={{transform:"translateX(-"+scale.current+"%)"}}/></div>
                <div className={styles.body_wrapper}>
                    <p className={styles.title}>Where Crypto Meets Comedy!</p>
                    <p className={styles.text}>
                    $PNUt is a trending meme coin known for its playful branding and community-driven growth. It’s quickly gaining popularity through social media buzz and humor, making it a high-risk, high-reward option for adventurous investors.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About