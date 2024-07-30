import { useTranslation } from 'react-i18next'
import { serviceTypeItems } from '../../constants'
import ServiceTypeItem from './ServiceTypeItem'
import ServiceGuarante from './ServiceGuarante'

function ServiceType() {
  const { t } = useTranslation()
  return (
    <div className='mt-20'>
      <h2 className='mb-5 text-[#020c31] text-[52px] font-bold'>{t("typeService")}</h2>
      <div className='flex flex-wrap gap-10 mb-5'>
        {serviceTypeItems.map((serviceTypeItem, ind) => (
          <ServiceTypeItem key={ind} {...serviceTypeItem} />
        ))}
      </div>
      <ServiceGuarante />
    </div>
  )
}

export default ServiceType