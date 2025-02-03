import { Col, Row } from "react-bootstrap";
import Ad from "./Ad";
import women from '../../../public/ads/woman.png'
import play from '../../../public/ads/playstation.png'
import par from '../../../public/ads/parphnw.png'
import speak from '../../../public/ads/speakers.png'

export default function Ads() {
  return (
    <div className="container">
        <Row className="g-4">
            <Col lg={6} sm={12}>
            <Ad title={ "PlayStation 5"} description={"Black and White version of the PS5 coming out on sale."} img={play}/>
            </Col>
            
            <Col lg={6} sm={12}>
            <Row className="g-4">
                <Col sm={12}>
                <Ad title={ "Women’s Collections"} description={"Featured woman collections that give you another vibe."} img={women}/>
                </Col>
                <Col sm={12}>
                
                <Row>
                    <Col sm={6}>
                    <Ad title={ "Speakers"} description={"Amazon wireless speakers"} img={speak}/>
                    </Col>
                    <Col sm={6}>
                    <Ad title={ "Perfume"} description={"GUCCI INTENSE OUD EDP"} img={par}/>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Col>
        </Row>
    </div>
  )
}
