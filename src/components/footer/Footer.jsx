import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import { CiLocationOn } from "react-icons/ci"
import { t } from "i18next"
import { LuMoveUpRight } from "react-icons/lu"
import { MdOutlinePhone } from "react-icons/md"
function Footer() {
    return (
        <footer className="flex gap-20 h-[100px] my-20">
            <Link to={'/'}>
                <img src={logo} alt="" width={300} />
            </Link>

            <div className="flex flex-col gap-10">
                <div className="flex gap-3 items-center">
                    <CiLocationOn className="text-[40px]"/>
                    <p>{t('Uzb')}</p>
                    <LuMoveUpRight className="text-[30px]"/>
                </div>
                <div className="flex items-center gap-3">
                    <MdOutlinePhone className="text-[40px]"/>
                    <p>+998 99 119 99 33</p>
                    <LuMoveUpRight className="text-[30px]"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer