import { useTranslation } from "react-i18next"
import ServiceCard from "./ServiceCard"
import { servicesItem } from "../../constants"
import ServiceType from "./ServiceType"

function Services() {
    const { t } = useTranslation()
    return (
        <div className="container" data-aos="fade-right">
            <h2 className="mt-10 text-[52px] font-bold text-[#020c31]" >{t('services')}</h2>
            <p className="text-[#666] "> {t("services__desc")}</p >
            <div className="flex flex-col justify-between items-center gap-10 mt-10">
                {servicesItem.map((service, ind) => (
                    <ServiceCard service={service} key={ind} />
                ))}
            </div>
            <ServiceType />
        </div >
    )
}

export default Services