import React from "react";
import cardData from "./newCardData";
import Card from "./card";
const cardList = () => {
    return (
        <>
            <div className="container" >
                <div className="row align-items-center" >
                        {cardData.map((card, index) => {
                           return <Card key={index} team={card.team5} />
                        })}
                </div>
            </div>
        </>
    )
}


export default cardList;