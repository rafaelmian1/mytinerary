const capitalize = (string) =>
  string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
    .join(" ");

export default capitalize;
