const slides = [
  [
    {
      ciudad: "Madrid",
      img: [
        "/assets/slides/madrid1.jpg",
        "/assets/slides/madrid2.jpg",
        "/assets/slides/madrid3.jpg",
        "/assets/slides/madrid4.jpg",
      ],
    },
    {
      ciudad: "Paris",
      img: [
        "/assets/slides/paris1.jpg",
        "/assets/slides/paris2.jpg",
        "/assets/slides/paris3.jpg",
        "/assets/slides/paris4.jpg",
      ],
    },
    {
      ciudad: "Venice",
      img: [
        "/assets/slides/venice1.jpg",
        "/assets/slides/venice2.jpg",
        "/assets/slides/venice3.jpg",
        "/assets/slides/venice4.jpg",
      ],
    },
    {
      ciudad: "London",
      img: [
        "/assets/slides/london1.jpg",
        "/assets/slides/london2.jpeg",
        "/assets/slides/london3.jpg",
        "/assets/slides/london4.jpg",
      ],
    },
  ],
  [
    {
      ciudad: "Buenos Aires",
      img: [
        "/assets/slides/baires1.jpg",
        "/assets/slides/baires2.png",
        "/assets/slides/baires3.jpg",
        "/assets/slides/baires4.jpg",
      ],
    },
    {
      ciudad: "Rio de Janeiro",
      img: [
        "/assets/slides/rio1.png",
        "/assets/slides/rio2.jpg",
        "/assets/slides/rio3.png",
        "/assets/slides/rio4.jpg",
      ],
    },
    {
      ciudad: "Punta del Este",
      img: [
        "/assets/slides/punta1.jpg",
        "/assets/slides/punta2.jpg",
        "/assets/slides/punta3.jpg",
        "/assets/slides/punta4.jpg",
      ],
    },
    {
      ciudad: "Cartagena de Indias",
      img: [
        "/assets/slides/carta1.jpg",
        "/assets/slides/carta2.jfif",
        "/assets/slides/carta3.jpg",
        "/assets/slides/carta4.jpg",
      ],
    },
  ],
  [
    {
      ciudad: "Berlin",
      img: [
        "/assets/slides/berlin1.jpg",
        "/assets/slides/berlin2.jpg",
        "/assets/slides/berlin3.jpg",
        "/assets/slides/berlin4.jpg",
      ],
    }, //CAMBIAR POR ASIATICOS
    {
      ciudad: "Athens",
      img: [
        "/assets/slides/atenas1.jpg",
        "/assets/slides/atenas2.jpg",
        "/assets/slides/atenas3.jpg",
        "/assets/slides/atenas4.jpg",
      ],
    },
    {
      ciudad: "Fujiyama Honshu",
      img: [
        "/assets/slides/fuji1.jpg",
        "/assets/slides/fuji2.jpg",
        "/assets/slides/fuji3.jpg",
        "/assets/slides/fuji4.jpg",
      ],
    },
    {
      ciudad: "Hong Kong",
      img: [
        "/assets/slides/hongkong1.jpg",
        "/assets/slides/hongkong2.jpg",
        "/assets/slides/hongkong3.jpg",
        "/assets/slides/hongkong4.jpg",
      ],
    },
  ],
  [
    {
      ciudad: "Bariloche",
      img: [
        "/assets/slides/bari1.jpg",
        "/assets/slides/bari2.jpg",
        "/assets/slides/bari3.jpg",
        "/assets/slides/bari4.jpg",
      ],
      descripcion: "Placeholder",
    },
    {
      ciudad: "Bariloche",
      img: [
        "/assets/slides/bari1.jpg",
        "/assets/slides/bari2.jpg",
        "/assets/slides/bari3.jpg",
        "/assets/slides/bari4.jpg",
      ],
      descripcion: "Placeholder",
    },
    {
      ciudad: "Bariloche",
      img: [
        "/assets/slides/bari1.jpg",
        "/assets/slides/bari2.jpg",
        "/assets/slides/bari3.jpg",
        "/assets/slides/bari4.jpg",
      ],
      descripcion: "Placeholder",
    },
  ],
];
const cities = [];
slides.forEach((slide) =>
  slide.forEach((city) => {
    cities.push({
      ciudad: city.ciudad,
      img: city.img,
      descripcion: "Placeholder",
    });
  })
);

const myTineraryControllers = {
  getCarouselSlides: (req, res) => {
    const slides12 = slides.slice(0, 3);
    res.json({ respond: slides12 });
  },
  getCities: (req, res) => res.json({ respond: cities }),
  postCities: (req, res) => {
    cities.push(req.body);
    console.log(cities);
    res.json({ success: true });
  },
  getCity: (req, res) => {
    res.json({
      response: cities.find((city) => city.ciudad === req.params.id),
    });
  },
};

module.exports = myTineraryControllers;
