import aboutUs from "../../assets/images/about-us.jpg";

const About = () => {
  return (
    <section className="min-h-screen w-full h-screen white-bg">
      {/* Content Layer */}
      <div className="w-full col-center z-10">
        <div className=" col-center text-center gap-2">
          <p className="font-sans mt-15 text-[#d19b54]">Welcome to Haven</p>
          <h3 className="text-4xl font-color">
            Where Timeless Comfort Meets Serene Luxury
          </h3>
          <p className="max-w-2xl my-3 p-font-color">
            Dear Guest, <br /> Welcome to Haven, your serene retreat where every
            detail is thoughtfully designed to offer a stay that feels both
            luxurious and personal. Here, the gentle rhythm of nature blends
            seamlessly with warm hospitality to create an atmosphere unlike any
            other.
            <br />
            Warmest regards
          </p>
        </div>
        <img
          className="w-96 bg-center bg-cover mt-2"
          src={aboutUs}
          alt="about-us"
        />
        <div></div>
      </div>
    </section>
  );
};

export default About;
