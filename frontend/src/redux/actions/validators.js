const validator = {
  capitalize: (string) => {
    string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
      .join(" ");
  },
  name: (string) => {
    for (let i = 0; i < string.length; i++) {
      if (!isNaN(string.charAt(i))) {
        return false;
      }
    }
    return true;
  },
  email: (email) => {
    let at = 0;
    let dot = 0;
    for (let i = 0; i < email.length; i++) {
      if (email.charAt(i) === "@") {
        at++;
        dot = i;
      }
    }
    dot = email.slice(dot).includes(".");
    return at === 1 && dot;
  },
  password: (password) => {
    for (let i = 0; i < password.length; i++) {
      if (!isNaN(password.charAt(i))) {
        return password.length > 7;
      }
    }
    return false;
  },
  img: (img) => {
    return img.includes(".");
  },
  country: (country) => {
    return country && country !== "choose";
  },
};
export default validator;
