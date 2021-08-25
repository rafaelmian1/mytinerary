const usersReducer = (
  state = { countries: [], userLoggedIn: false, user: null },
  action
) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload
          .map(
            (country) => {
              return {
                name: country.name.includes("(")
                  ? country.name.slice(0, country.name.indexOf(" (")) +
                    country.name.slice(country.name.indexOf(")") + 1)
                  : country.name,
              };
            }
            // .filter((item) => !item.startsWith("("))
            // .join(" ")
          )
          .filter((country) => country.name.length < 20),
      };
    case "LOGGED_IN":
      return {
        ...state,
        userLoggedIn: true,
        user: action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        userLoggedIn: Boolean(action.payload),
        user: action.payload,
      };
    case "RESET_USER":
      return {
        ...state,
        userLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
