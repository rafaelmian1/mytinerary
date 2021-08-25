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
};
module.exports = validator;
