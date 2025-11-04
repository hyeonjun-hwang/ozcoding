function Card({ title, content, image }) {
  const titleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    border: "solid 0.5px gray",
    margin: "4px",
  };
  return (
    <div style={titleStyle}>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p>{content}</p>
      <img src={image} style={{ height: "28px" }} />
    </div>
  );
}

export default Card;
