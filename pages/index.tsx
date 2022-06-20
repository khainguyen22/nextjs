import type { NextPage } from 'next'
import styles from '/styles/Products.module.scss'
import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import { Container, Row, Col, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import Button from './components/button'


const Home: NextPage = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  useMemo(() => {
    console.log(visible);

  }, [visible])

  return (
    <Container className={styles.container}>
      <main className={styles.main}>
        <button type="button" className={styles.color} onClick={() => router.push('/about')}>
          Click me
        </button>
        {
          visible != true ? <button type="button" onClick={() => setVisible(true)}>Show button</button> :
            <button type="button" onClick={() => setVisible(false)}>Hidden button</button>
        }
        {
          visible && <Button />
        }
        <div style={{ height: "2000px" }}></div>
        <Link href="/about">
          <Nav.Link> Click me</Nav.Link>
        </Link>

      </main>
    </Container>
  )
}
export default Home
