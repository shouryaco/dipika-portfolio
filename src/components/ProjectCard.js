import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, onClick, fullImage }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        style={{ cursor: 'pointer' }}
        onClick={() => onClick(fullImage, title)}  // Call onClick with image URL and title
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

