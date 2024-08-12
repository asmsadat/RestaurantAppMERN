import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            numquam sunt dignissimos adipisci totam laudantium corrupti
            recusandae, qui aliquid repellendus. Velit voluptatibus doloremque
            distinctio dolorum labore odio nostrum hic iusto enim eum eius,
            aperiam voluptates cum quidem magni perferendis soluta impedit
            quisquam fugit placeat cumque dignissimos? Qui, magni. Dolorem ut,
            saepe eaque fugiat qui quam a placeat quasi deleniti error vero
            dolor sapiente, accusamus quisquam aliquam porro. Necessitatibus
            soluta eius natus sunt, assumenda quia reprehenderit. Sapiente ad
            debitis quidem nihil earum, deserunt tempora quaerat placeat
            possimus magnam eaque voluptatibus ullam harum, voluptates cum
            laudantium in non dolorum omnis tenetur maiores?
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
                <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="./about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
