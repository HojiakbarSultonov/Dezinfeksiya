import React from 'react'
import { useTranslation } from 'react-i18next'

function ServiceCard({ service }) {
    const { t } = useTranslation()

    return (
        <div data-aos="fade-right" className='container border-solid flex items-center gap-12 border-2 p-3 rounded-lg'  >
            <img src={service.img} alt="" width={300} height={300} />
            <div className='mr-3 px-3' >
                <h2 className='text-[26px] font-bold text-[#020c31]'>{t(service.title)}</h2>
                <p>{t(service.descr)}</p>
            </div>
        </div>
    )
}

export default ServiceCard