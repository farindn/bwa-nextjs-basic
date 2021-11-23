import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Error404() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
            console.log('redirecting')
        }, 2000);
    }, [])

    return (
        <div>
            <h1 className = 'title-404'>Error 404</h1>
            <h1 className = 'title-404'>This page could not be found.</h1>
        </div>
    )
}
