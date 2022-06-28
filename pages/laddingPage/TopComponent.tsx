import type { NextPage } from 'next'
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
const TopComponent: NextPage = () => {
    return (
        <div className={styles.ladding_page_header}>
                <Row className={styles.row}>
                    <Col xs={12} md={6} col={6} className={styles.col}>
                        <img src="../assets/mobile.png" alt="mobile" />
                    </Col>
                    <Col xs={12} md={6} col={6} className={styles.col}>
                        <Card className={styles.card}>
                            <p>FOODO</p>
                            <h4>Get Your Food In</h4>
                            <h2>FOODO</h2>
                            <p>I upload tech and computer programming related videos regularly to share my little knowledge with you guys.</p>
                            <Button className={styles.btn_start}>View Website</Button>
                        </Card>
                    </Col>
                </Row>
        </div>
    )
}
export default TopComponent
