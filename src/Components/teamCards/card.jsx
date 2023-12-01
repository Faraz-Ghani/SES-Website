import React from "react";
import { FaLinkedin , FaTwitterSquare } from "react-icons/fa";


const Card = ({team}) => {
    const {tenure , members} = team;
    return (
        <>
            {
                members.map((data, index) => {
                        return (
                            <>
                                <div key={index} className="col-lg-3 col-md-4 col-sm-12" >
                                    <div className="main-card wow animate__animated animate__fadeInUp" >
                                        <div className="main-card-content " >
                                            <div className="team-images">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <div className="member-data team-data">
                                                <h6>{data.name}</h6>
                                                <h5>{data.post}</h5>
                                                <small>{data.description}</small>
                                                <div className="social">
                                                        <>
                                                        {data.LinkedIn?<a href={data.LinkedIn} > <FaLinkedin /> </a>: ""}
                                                        {data.Twitter? <a href={data.Twitter} > <FaTwitterSquare/> </a> : ""}
                                                        </>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                })
            }
        </>
    )
}

export default Card;





