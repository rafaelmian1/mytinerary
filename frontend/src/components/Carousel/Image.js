import { useEffect, useRef, useState } from "react";

const Image = ({ image }) => {
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
      className="d-flex align-items-end text-light justify-content-center fotito"
      id={image.ciudad}
      onMouseEnter={() => setLoop(true)}
      onMouseLeave={() => setLoop(false)}
      style={{
        backgroundImage: `url(${image.img[index]})`,
      }}
    >
      <div className="descripcion d-flex align-items-center">
        <h5 className="mx-3">{image.ciudad}</h5>
      </div>
    </div>
  );
};

export default Image;
