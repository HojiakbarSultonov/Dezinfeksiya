//  import logo from '@/assets/logo.png';
import HeroImg from '../../assets/heroImg.jpg'
import heroLeftImg from '../../assets/hero-left-Img.png'

import { useTranslation } from 'react-i18next'
import Button from '../button/Button'
function Hero() {

    const { t } = useTranslation()
    return (
        <div className="container flex gap-3 " data-aos='fade-right'>
            <div className='mt-20 w-1/2'  >
                <h1 className='w-8 font-bold m-0 text-[#3375FF] text-[64px]'>{t("hero__title")}</h1>
                <div className='flex items-center'>
                    <p className='-mt-40'>{t("hero__desc")}.</p>
                    <img src={heroLeftImg} alt="" width={300} />
                </div>
                <Button /></div>
            <div className=" w-1/2">
                <img src={HeroImg} alt="" />
            </div>


        </div >
    )
}

export default Hero