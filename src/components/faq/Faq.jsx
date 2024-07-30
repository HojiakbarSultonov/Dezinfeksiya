
import { faq } from '../../constants';
import FaqItem from './FaqItem';
function Faq() {
    return (
        <div className='mt-10 flex  justify-between  w-full'>
            <h2 className='w-[30%] text-[48px] font-bold text-[#020c31]'>ФАҚ</h2>
            <div className='!w-70%'>
                {
                    faq.map((faq, ind) => (
                        <FaqItem key={ind} {...faq} ind={ind} />
                    ))
                }
            </div>
        </div>
    )
}

export default Faq