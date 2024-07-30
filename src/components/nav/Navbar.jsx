import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../../constants"
import logo from '../../assets/logo.png'
import { useTranslation } from "react-i18next"
import Button from "../button/Button"


function Navbar() {

    const lng = localStorage.getItem('i18nextLng') || 'uz'
    const { t, i18n } = useTranslation()
    const handleChange = (e) => {
        const selectedLng = e.target.value
        i18n.changeLanguage(selectedLng)
    }
    return (


    <nav className="container sticky top-0 z-10  bg-white flex justify-between items-center h-[120px]">
        <Link to={'/'}>
            <img src={logo} alt="" width={300} />
        </Link>
        <div className="flex justify-between space-x-10 ">
            <ul className="flex items-center space-x-10">
                {navLinks.map(nav => (
                    <li key={nav.name}>
                        <NavLink to={nav.route} className={'hover:text-blue-600 text-[#00000098] text-xl '}>{t(nav.name)}</NavLink>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-between gap-8">
                <select name="" id="" className="w-[120px] h-[37px]  border-2 border-black  rounded-lg" onChange={handleChange} value={lng}>
                    <option value="uz">Ozbekcha</option>
                    <option value="ru">Русский</option>
                </select>
                <Button />
            </div>
        </div>


    </nav>
    )

}


export default Navbar