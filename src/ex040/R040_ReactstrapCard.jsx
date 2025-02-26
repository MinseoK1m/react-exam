import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardImg,
} from "reactstrap";


import myImg from '/img/mong.jpg';

const R040_ReactstrapCard = () => {
    return(
        <div className="col-5">
            <Card>
                <CardImg src = {myImg}
                  alt="Card image"/>
                  <CardBody className="d-flex flex-column align-items-center">
                    <CardTitle>Card 제목</CardTitle>
                    <CardSubtitle>Card 부제목</CardSubtitle>
                    <CardText>Card 내용</CardText>
                    <Button>버튼</Button>
                </CardBody>
            </Card>
        </div>
);
};

export default R040_ReactstrapCard;
