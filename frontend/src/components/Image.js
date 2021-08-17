import { useEffect, useRef, useState } from "react";

const Image = ({ image, card, carousel, children }) => {
  const [index, setIndex] = useState(0);
  const [loop, setLoop] = useState(false);
  const interval = useRef(null);
  useEffect(() => {
    if (loop) {
      interval.current = setTimeout(
        () => setIndex(index === 3 ? 0 : index + 1),
        1200
      );
    }
    return () => clearTimeout(interval.current);
  });

  return (
    <div
      className={`d-flex align-items-end justify-content-end text-light hover foto ${
        card ? `card m-0 p-0` : "carru"
      }`}
      id={image.city}
      onMouseEnter={() => setLoop(true)}
      onMouseLeave={() => setLoop(false)}
      style={{
        backgroundImage: `url(${image.img[index]})`,
      }}
    >
      {card && (
        <div className="description d-flex flex-column align-items-start">
          <h5 className="px-3 fs-1">{image.city}</h5>
          {loop && (
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              quibusdam, officiis nostrum cum voluptas dolores tempore debitis
              inventore ab non laborum laudantium, harum recusandae deserunt
              doloremque quidem quaerat? Assumenda, debitis.
            </span>
          )}
        </div>
      )}
      {carousel && children}
    </div>
  );
};

export default Image;
