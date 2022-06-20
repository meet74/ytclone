import {useEffect, useState} from 'react'

function useCheckMobileScreen() {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    console.log(width);
    return (width <= 850);
}

export default useCheckMobileScreen