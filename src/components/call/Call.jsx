import { useTranslation } from 'react-i18next'
import callImg from '../../assets/call.png'
import axios from 'axios'

function Call() {
    const { t } = useTranslation()

    const SendMessage = e => {
        e.preventDefault()
        const token = "7382380526:AAHh9IGDOdVc-LJemnyAMiRQ6DQUNjpyToA"
        const chat_id = 866985442
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const name = document.getElementById("name").value
        const number = document.getElementById("number").value
        const message = `${name}  ${number}`

        axios({
            url: url,
            method: 'POST',

            data: {
                "chat_id": chat_id,
                "text": message
            }

        }).then((res) => {
            document.getElementById('myForm').reset()
            alert('sending')
        }).catch((err) => console.log(err))
    }
    return (
        <div className="callBg h-[550px] mt-20 rounded-[12px] p-[20px] flex justify-center items-center ">
            <form id='myForm' type="submit" className='bg-white p-[20px] h-[385px] flex flex-col justify-between ' onSubmit={SendMessage}>
                <h2 className='text-[32px] text-[#242825] font-bold'>{t('formTitle')}</h2>
                <input id='name' type="text" className='pl-4 w-full rounded-2xl bg-[#F2F2F2] h-[50px]' name='name' placeholder={t("name")} />
                <input type="text" id="number" className='pl-4 w-full rounded-2xl bg-[#F2F2F2] h-[50px]' name='number' placeholder={"+99898 123 45 67"} />
                <button className='bg-[#242825] rounded-lg text-white h-[50px] font-semibold' type='submit'>{t("send")}</button>
            </form>
            <img src={callImg} alt="" />
        </div>
    )
}

export default Call