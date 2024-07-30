import { useTranslation } from 'react-i18next'
import Button from '../button/Button.jsx'

function ServiceTypeItem(serviceTypeItem) {
    const { title, descr, img } = serviceTypeItem
    const { t } = useTranslation()
    return (
        <div data-aos="fade-right" className='bg-[#F3F6F6] flex flex-col justify-between h-max w-[443px] p-5 mb-5'>
            <h2 className='text-[#020c31]  text-[32px] font-bold mb-5'>{t(title)}</h2>
            <p className='text-[#495157]'>{t(descr)}</p>
            <div className='flex items-end gap-10'>
                <Button />
                <img src={img} alt="" className='rounded-full' />
            </div>

        </div>
    )
}

export default ServiceTypeItem