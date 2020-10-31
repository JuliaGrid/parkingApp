const useStyles = () => ({
  login: {
    paddingTop: "100px",
  },

  login__block: {
    left: "50%",
    marginLeft: "-250px",
    zIndex: 3,
    width: "404px",
    margin: "auto",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px #e2e5e9",
  },

  login__form: {
    width: "202px",
    margin: "auto",
    paddingTop: "15px",
    paddingBottom: "50px",
    fontSize: "12px",
    fontFamily: "Open Sans, sans-serif",
    lineHeight: "16px",
    color: "#757575",
    "& > label": {
      display: "block",
      marginTop: "35px",
    },
  },

  login__input: {
    width: "188px",
    marginTop: "4px",
    paddingLeft: "10px",
    paddingRight: "2px",
    paddingTop: "8px",
    paddingBottom: "8px",
    border: "1px solid #b4c8da",
    fontSize: "inherit",
    lineHeight: "inherit",
    fontFamily: "inherit",
    "&:hover": {
      border: "1px solid rgb(88, 96, 104)",
    },
    "&:focus": {
      outline: "none",
      border: "1px solid #44699f",
    },
  },

  login__wrongSomething: {
    width: "404px",
    fontSize: "12px",
    fontFamily: "Open Sans, sans-serif",
    color: "#ad7777",
    zIndex: 3,
  },
});

export default useStyles;
