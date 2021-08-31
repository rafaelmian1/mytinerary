import { useEffect, useRef, useState } from "react";

const Image = ({ image, card, carousel, act, children }) => {
  const [index, setIndex] = useState(0);
  const [loop, setLoop] = useState(false);
  const interval = useRef(null);
  useEffect(() => {
    if (loop) {
      interval.current = setTimeout(
        () => setIndex(index === 3 ? 0 : index + 1),
        2000
      );
    }
    return () => clearTimeout(interval.current);
  });

  if (act) {
    return (
      <div
        className={`text-center text-light foto`}
        id={image.city}
        style={{
          backgroundImage: `url(${image.img})`,
          height: "40vh",
        }}
      >
        <div className="description">
          <h5 className="px-3 fs-1">{image.name}</h5>
          <h5>{image.description}</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`d-flex align-items-end justify-content-end text-light foto ${
          card ? `cityCard m-0 p-0` : "carru hover"
        }`}
        id={image.city}
        onMouseEnter={() => setLoop(true)}
        onMouseLeave={() => setLoop(false)}
        style={{
          backgroundImage: `url(${card ? image.img[0] : image.img[index]})`,
        }}
      >
        {card && loop && (
          <div className="description d-flex flex-column align-items-start">
            <h5 className="px-3 fs-1">{image.city}</h5>
            <h5>{image.description}</h5>
          </div>
        )}
        {carousel && children}
      </div>
    );
  }
};

export default Image;
