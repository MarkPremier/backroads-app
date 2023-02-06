import { tours } from "../data";

import Title from "./Title";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, title, text } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
