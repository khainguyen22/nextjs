import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const About = (props: Props) => {
    const router = useRouter()
    return (
        <div> <button type="button" onClick={() => router.push('/')}>
            Home
        </button>
            <button type="button" onClick={() => router.push('/products/')}>
                products
            </button>
        </div>
    )
}

export default About