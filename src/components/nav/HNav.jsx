// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { navLinks } from "../../constants"
// import { useTranslation } from 'react-i18next';
// import Button from '../button/Button';
// import logo from '../../assets/logo.png'

// const HNav = () => {
//     const lng = localStorage.getItem('i18nextLng') || 'uz'
//     const { t, i18n } = useTranslation()
//     const handleChange = (e) => {
//         const selectedLng = e.target.value
//         i18n.changeLanguage(selectedLng)
//     }
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand href="#home">
//                     <Nav.Linkink to={'/'}>
//                         <img src={logo} alt="" width={300} />
//                     </Nav.Linkink>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         {navLinks.map(nav => (
//                             <li key={nav.name}>
//                                 <Nav.Link href={nav.route} className={'hover:text-blue-600 text-[#00000098] text-xl '}>{t(nav.name)}</Nav.Link>
//                             </li>
//                         ))}
//                         <Nav.Link href="#home">Home</Nav.Link>

//                         <div className="flex items-center justify-between gap-8">
//                             <select name="" id="" className="w-[120px] h-[37px]  border-2 border-black  rounded-lg" onChange={handleChange} value={lng}>
//                                 <option value="uz">Ozbekcha</option>
//                                 <option value="ru">Русский</option>
//                             </select>
//                             <Button />
//                         </div>

//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default HNav;