import React from 'react'
import { useTranslation } from 'react-i18next'

function Button() {
    const { t } = useTranslation()
    return (
        <div className="w-[180px] h-[50px] flex items-center justify-center rounded-3xl ounded-full text-xl bg-[#3360FF] text-white">{t("btn")}</div>
    )
}

export default Button