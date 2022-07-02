import { useState } from "react"


export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const fetching = async () => {
        try {
            setIsLoading(true)//что бы показалась крутилка
            await callback()//получаем калбек принятый аргументом
        } catch (e) {//если ошибка
            setError(e.message);
        } finally {
             setIsLoading(false) //в любои случае убираем крутилку
        }
    }
return [fetching, isLoading, error ]
}