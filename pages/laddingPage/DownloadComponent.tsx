import type { NextPage } from 'next'
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
const DownloadComponent: NextPage = () => {
    return (
        <div className={styles.ladding_page_download}>
            <Container className={styles.container}>
                <h3>Get Food With Foodo</h3>
                <h3>Download The App</h3>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className={styles.download_app}>
                    <img
                        src="../assets/en_badge_web_generic.png"
                        className={styles.img_fluid} alt="image" />
                    <img
                        src="../assets/get-it-on-app-store.webp"
                        className={styles.img_fluid} alt="image" />
                </div>
            </Container>
        </div>
    )
}
export default DownloadComponent
