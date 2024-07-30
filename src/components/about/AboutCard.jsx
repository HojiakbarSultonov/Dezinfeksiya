import { useTranslation } from "react-i18next"

function AboutCard(about) {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-2 mt-10 w-1/4" data-aos='fade-left' data-aos-duration="1000">
            <about.about.icon className="text-blue-500 text-[80px] h-100 " />
            <h2 className=" font-bold text-2xl">{t(about.about.title)}</h2>
            <p className="text-[14px] ">{t(about.about.desc)}</p>
        </div>
    )
}

export default AboutCard