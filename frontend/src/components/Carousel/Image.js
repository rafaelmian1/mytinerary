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
      className={`d-flex align-items-end text-light justify-content-end hover foto ${
        image.descripcion ? `card m-0 p-0` : "carru"
      }`}
      id={image.ciudad}
      onMouseEnter={() => setLoop(true)}
      onMouseLeave={() => setLoop(false)}
      style={{
        backgroundImage: `url(${image.img[index]})`,
      }}
    >
      <div className="descripcion d-flex flex-column align-items-center">
        <h5 className="mx-3 fs-1">{image.ciudad}</h5>
        {image.descripcion && loop && (
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            quibusdam, officiis nostrum cum voluptas dolores tempore debitis
            inventore ab non laborum laudantium, harum recusandae deserunt
            doloremque quidem quaerat? Assumenda, debitis.
          </span>
        )}
      </div>
    </div>
  );
};

export default Image;
