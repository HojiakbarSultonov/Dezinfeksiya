import { useTranslation } from "react-i18next"
import { aboutItem } from "../../constants"
import AboutCard from "./AboutCard"
import { useEffect } from "react"
import Aos from "aos"
import Button from "../button/Button"

function About() {
    const { t } = useTranslation()
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className="container" data-aos="fade-left">
            <h2 className="border-b font-bold text-[30px] mt-10" >{t("about")}</h2>
            <div className="flex justify-between items-center gap-10 mb-10">
                {aboutItem.map((about, ind) => (
                    <AboutCard about={about} key={ind} />
                ))}
            </div>
            <div className="about__call mt-20 flex items-center justify-between w-full">
                <div ></div>
                <div className="flex flex-col  justify-center gap-11  h-full w-1/2" 
                   >
                    <h2 className="about__call-title w-[458px] leading-[48px] text-[#fafafa] text-[40px] font-bold">{t("about__call-title")}</h2>
                    <p className="about__call-desc text-white font-normal w-[40%]">{t("about__call-desc")}</p>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default About