import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="me" />

      <div className="section-center about-center">
        <article className="about-info">
          <p>
            I'm undertaking my second year at Deakin university, studying a
            Master of IT, majoring in cyber security. I have experience with web
            development and am always looking to expand my knowledge.
          </p>
          <p>
            This website was established to display ant projects I may complete,
            and will be updated as I continue to learn.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
