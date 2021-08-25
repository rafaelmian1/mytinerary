const usersReducer = (
  state = {
    countries: [],
    user: JSON.parse(localStorage.getItem("user")),
  },
  action
) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload
          .map((country) => {
            return {
              name: country.name.includes("(")
                ? country.name.slice(0, country.name.indexOf(" (")) +
                  country.name.slice(country.name.indexOf(")") + 1)
                : country.name,
            };
          })
          .filter((country) => country.name.length < 25),
      };
    case "LOGGED_IN":
      return {
        ...state,
        userLoggedIn: true,
        user: action.payload,
      };

    case "RESET_USER":
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user")),
      };
    default:
      return state;
  }
};

export default usersReducer;
