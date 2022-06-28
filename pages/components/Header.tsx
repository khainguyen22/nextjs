import type { NextPage } from 'next'
import { useEffect, useState, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import { Container, Row, Col, Nav } from 'react-bootstrap'
import styles from '/styles/header.module.scss'

const Header: NextPage = () => {
    return (
        <div className={styles.header}>
            <Container>
                <Nav className={styles.navbar}>
                    <Link href={'/'}>
                        <a className={styles.nav_link}>Home</a>
                    </Link>
                    <Link href={'/laddingPage'}>
                        <a className={styles.nav_link}>Ladding Page</a>
                    </Link>
                </Nav>
            </Container>
        </div>
    )
}
export default Header
