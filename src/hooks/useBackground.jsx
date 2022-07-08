import { useEffect, useState } from "react"

const useBackground = (icon) => {
    const[back, setBack] = useState('few-clouds') 
    useEffect(() => {
        if (icon == null || icon == '01d' || icon == '02d') {
            setBack('https://wallpaperstock.net/wallpapers/thumbs1/44113wide.jpg')
        } else if (icon == '04d' || icon == '03d') {
            setBack('https://mojomagasin.no/wp-content/uploads/2012/03/1223184_75165767sxc.jpg')
        } else if (icon == '09d' || icon == '10d') {
            setBack('https://services.meteored.com/img/article/lluvias-primer-fin-de-semana-de-diciembre-alerta-pronostico-tiempo-clima-1638535255310_1280.jpg')
        } else if (icon == '11d') {
            setBack('https://services.meteored.com/img/article/noviembre-diciembre-tiempo-clima-pronostico-tormentas-alerta-1638182913321_1280.jpg')
        } else if (icon == '13d' || icon == '50d') {
            setBack('https://www.gtush.com/wp-content/uploads/2019/09/clima-frio-1-e1569421004942.jpg')
        }
    }, [])

    return back
}

export default useBackground;



