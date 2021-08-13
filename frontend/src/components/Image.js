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
      className={`d-flex align-items-end text-light justify-content-end hover foto ${
        card ? `card m-0 p-0` : "carru"
      }`}
      id={image.ciudad}
      onMouseEnter={() => setLoop(true)}
      onMouseLeave={() => setLoop(false)}
      style={{
        backgroundImage: `url(${image.img[index]})`,
      }}
    >
      {card && loop && children}
      {carousel && children}
    </div>
  );
};

export default Image;
