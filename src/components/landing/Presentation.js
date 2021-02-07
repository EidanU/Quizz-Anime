const Presentation = ({ clas, titre, description, img }) => {
  return (
    <div className={clas}>
      <div className="TextPres">
        <h2>{titre}</h2>
        <br />
        <br />
        <p>{description}</p>
      </div>
      <div>
        <img src={img} alt={description} />
      </div>
    </div>
  );
};

export default Presentation;
