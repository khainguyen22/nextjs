import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Setting = (props: Props) => {
    const router = useRouter();
    const a = JSON.stringify(router.query);
    console.log(a)
  return (
    <>
        <p>Setting {a}</p>
    </>
  )
}

export default Setting