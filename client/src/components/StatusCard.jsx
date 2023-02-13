import React from 'react'
import { ImHeartBroken } from "react-icons/im";
import { BiGhost } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";

const StatusCard = ({status}) => {
  return (
    <span className="favorite">
    {status}{" "}
    {status === "Alive" ? (
      <BsFillSuitHeartFill className="icon-live" />
    ) : status === "unknown" ? (
      <BiGhost className="icon-live" />
    ) : (
      <ImHeartBroken className="icon-live" />
    )}
  </span>
  )
}

export default StatusCard
