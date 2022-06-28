import type { NextPage } from 'next'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import TopComponent from './TopComponent'
import SeviceComponent from './SeviceComponent'
import AboutComponent from './AboutComponent'
import DownloadComponent from './DownloadComponent'
import ContactComponent from './ContactComponent'
import Header from '../components/Header'
const LaddingPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ladding Page</title>
            </Head>
            <div className={styles.backgound}></div>
            <div className={styles.texture}></div>
            <header className={styles.header}>
                <Header />
                <Container>
                    <TopComponent />
                </Container>
            </header>
            <main className={styles.main}>
                <Container>
                    <SeviceComponent />
                    <AboutComponent />
                    <DownloadComponent />
                </Container>
            </main>
            <footer className={styles.footer}>
                <Container>
                    <ContactComponent />
                </Container>
            </footer>
        </>
    )
}
export default LaddingPage
