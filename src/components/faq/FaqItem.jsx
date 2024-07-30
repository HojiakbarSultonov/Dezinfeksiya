
// import { Accordion } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function FaqItem(faq) {

    const { t } = useTranslation()
    console.log(faq)
    const { title, descr } = faq
    return (
        <Accordion defaultActiveKey={0} className='!w-full' >
            <Accordion.Item className='w-full'>
                <Accordion.Header  >
                    <h2 className='!text-[#676d83] !text-[24px] !font-medium'>
                        {t(title)}
                    </h2>
                </Accordion.Header>
                <Accordion.Body >
                    <p className='text-[#676d83] font-normal !text-[24px] '>

                        {t(descr)}
                    </p>

                </Accordion.Body>
            </Accordion.Item >
        </Accordion>



    )
}

export default FaqItem