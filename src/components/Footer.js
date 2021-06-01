const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div>
      <h4>
        Made with ♥
        <br />
        {year}{" "}
      </h4>
    </div>
  );
};

export default Footer;
