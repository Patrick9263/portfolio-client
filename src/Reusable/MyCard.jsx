import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./MyCard.scss";

const MyCard = ({ title, subTitle, children }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Subtitle className="cardSubtitle">{subTitle}</Card.Subtitle>
        <Card.Text className="cardText">{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

MyCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MyCard.defaultProps = {
  subTitle: "",
};

export default MyCard;
