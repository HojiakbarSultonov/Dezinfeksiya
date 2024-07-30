import { useTranslation } from 'react-i18next'
import Button from '../button/Button'
import GuaranteeImg from '../../assets/gurantee.jpg'
import guaranteLogo from '../../assets/guranteLogo.svg'

function ServiceGuarante() {
    const { t } = useTranslation()

    return (
        <div className="guarante flex items-center justify-between w-full p-10 rounded-xl" >
            <div >
                <img src={GuaranteeImg} alt="" className='rounded-lg' />
            </div>
            <div className="flex flex-col  justify-center gap-11  h-full w-1/2" data-aos="fade-right"             
               
              
               >
                <img src={guaranteLogo} alt="" width={100} height={100}  data-aos-duration="2000"/>
                <h2 className=" leading-[48px] text-[#fafafa] text-[32px] font-bold">{t("guaranteTitle")}</h2>
                <Button  />
            </div>
        </div>
    )
}

export default ServiceGuarante