
import { BsLightningCharge } from "react-icons/bs";
import { PiHandshakeDuotone, PiMedalLight } from 'react-icons/pi'
import serviceImg1 from '../assets/serviceImg.png'
import serviceImg2 from '../assets/serviceImg2.png'
import serviceImg3 from '../assets/serviceImg3.png'
import serviceTypeImg1 from '../assets/serviceType.jpg'
import serviceTypeImg2 from '../assets/serviceType1.jpg'
import serviceTypeImg3 from '../assets/serviceType3.jpg'
import serviceTypeImg4 from '../assets/serviceType4.jpg'
import serviceTypeImg5 from '../assets/serviceType5.jpg'


export const navLinks = [
    { name: "asosiy", route: "/" },
    { name: "biz haqimizda", route: "/#about" },
    { name: "xizmatlar", route: "/services" },
    { name: "faq", route: "/faq" },
]

export const aboutItem = [
    { icon: BsLightningCharge, title: "about__title1", desc: "about__desc1" },
    { icon: PiMedalLight, title: "about__title2", desc: "about__desc2" },
    { icon: PiHandshakeDuotone, title: "about__title3", desc: "about__desc3" },
]
export const servicesItem = [
    { img: serviceImg1, title: "service__Item-title1", descr: "serviceItem-descr1" },
    { img: serviceImg2, title: "service__Item-title2", descr: "serviceItem-descr2" },
    { img: serviceImg3, title: "service__Item-title3", descr: "serviceItem-descr3" },
]
export const servicesType = [
    { img: serviceTypeImg1, title: "service__Type-title1", descr: "serviceType-descr1" },
    { img: serviceTypeImg2, title: "service__Type-title2", descr: "serviceType-descr2" },
    { img: serviceTypeImg3, title: "service__Type-title3", descr: "serviceType-descr3" },
    { img: serviceTypeImg4, title: "service__Type-title4", descr: "serviceType-descr4" }

]

export const serviceTypeItems = [
    {
        title: 'typeTitle1',
        descr: "typeDescr1",
        img: serviceTypeImg1
    },
    {
        title: 'typeTitle2',
        descr: "typeDescr2",
        img: serviceTypeImg2
    },
    {
        title: 'typeTitle3',
        descr: "typeDescr3",
        img: serviceTypeImg3
    },
    {
        title: 'typeTitle4',
        descr: "typeDescr4",
        img: serviceTypeImg4
    },
    {
        title: 'typeTitle5',
        descr: "typeDescr5",
        img: serviceTypeImg5
    }]

export const faq = [
    { title: "faqTitle1", descr: "faqDescr1", eventKey: "0" },
    { title: "faqTitle2", descr: "faqDescr2", eventKey: "1" },
    { title: "faqTitle3", descr: "faqDescr3", eventKey: "2" }
]