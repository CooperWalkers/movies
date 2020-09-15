import React from "react"
import { formatDate } from "../helpers"

const Review = ({
  content: {
    title,
    text: { text },
    poster: {
      file: { url },
    },
    creationDate,
  },
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title} />
    <p>{text}</p>
    <h5>{formatDate(creationDate)}</h5>
  </div>
)

export default Review
