import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredPhoto from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-Item text-white" >
<div className=" hero-overlay bg-opacity-60 ">
<div className="pt-8">
<SectionTitle
        subHeading={"---Check it out---"}
        heading={"Featured Item"}
      />
</div>
      <div className=" md:flex justify-center items-center py-20 px-36 ">
      <div>
        <img src={featuredPhoto} alt="" />
      </div>
      <div className="md:ml-10">
        <p>Aug 20,2029</p>
        <p className="uppercase">Where can i get some</p>
        <p>
          Duis quam porttitor egestas dictumst pretium id. Lobortis rhoncus
          sagittis non lacus congue magnis. Platea aenean dis non pede venenatis
          vel. Dignissim tristique ex eros condimentum conubia justo. Magnis
          auctor vulputate odio egestas ipsum senectus proin curabitur ad.
          Imperdiet consectetuer sapien turpis ad ut. Posuere bibendum fusce
          conubia lacinia magnis elementum gravida eleifend condimentum. Finibus
          litora leo parturient nisl ipsum donec praesent dapibus tempus ac.
        </p>
        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
      </div>
      </div>
</div>
    </div>
  );
};

export default Featured;
