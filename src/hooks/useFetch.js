import { useEffect, useState } from "react";

const useFetch = (url) => { 

    const [data, setData]           = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError]         = useState(null)

    useEffect(() => { //the function fires everytime that this component is rendred
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data for that Resource')
            }
            return res.json()
        })
        .then(data =>{
            setData(data)
            setIsPending(false)
            setError(false)
        })
        .catch(err => { //catch error in case the fetch fails
            setError(err.message)
            setIsPending(false)
        })
    }, [url])

    return { data, isPending, error}

}

export default useFetch