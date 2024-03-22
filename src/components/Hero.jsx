import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
 const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

 const handlerVideoSrcSet = () => {
  if(window.innerWidth < 760) {
    setVideoSrc(smallHeroVideo)
    } else{
      setVideoSrc(heroVideo)
    }
 }
 useEffect(() =>{
window.addEventListener('resize', handlerVideoSrcSet)
return ()=> {
  window.removeEventListener('resize',handlerVideoSrcSet)
}
 }, [])

useGSAP(() => {
  gsap.to('#hero', {opacity: 1, delay: 1.5 })
  gsap.to('#cta1',  {opacity:1 ,delay:1.5, translateY:0 })
  gsap.to('#cta2',  {opacity:1 ,delay:1.6, translateY:0 })
}, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col" >
        <p className="hero-title" id='hero'>iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc}> 
          <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <a id="cta1" href="#highlights" className="btn opacity-0 translate-y-20">Buy</a>
        <p id="cta2" className=" font-normal text-xl opacity-0 translate-y-20">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero  