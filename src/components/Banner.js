import CustomButton from "./ui/CustomButton";
const Banner = () => {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">FoodyNerd</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <CustomButton cssClass="btn btn--white btn--animated">
          <b>Discover</b>
        </CustomButton>
      </div>
    </div>
  );
};

export default Banner;
