import banner from "../../assets/banner.png";
const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-14 ">
      {/* right side of content */}
      <div className="md:w-1/2 w-full md:py-8 pl-4   md:pl-16">
        <h1 className="w-full font-primary text-4xl md:mb-4 font-semibold mb-2">
          New Release this week
        </h1>
        <p className="font-primary mb-6 text-base   ">
          It's time to update you{" "}
          <span className="text-pink-700">reading list</span> with some of the
          leatest and greatest releases in the literary world. From
          heart-pumping thrillers to captivating memoirs, this week's new
          releases offer something for everyone.
        </p>
        <button className="w-full md:w-auto self-start font-primary font-semibold border bg-yellow-400 border-yellow-500 bg-primary text-white px-6 py-2 rounded-md  hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-colors duration-300">
          Subscribe
        </button>
      </div>

      {/* left side of image of the content */}
      <div className=" md:w-1/2 h-80 flex md:justify-end items-center justify-center mb-8">
        <img
          className="object-cover  h-80 md:h-60 rounded-xl"
          src={banner}
          alt="Banner showing a collection of new books"
        />
      </div>
    </div>
  );
};

export default HeroSection;
