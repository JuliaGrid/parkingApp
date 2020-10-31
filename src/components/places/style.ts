const useStyles = () => ({
  places__item: {
    width: "217px",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px #e2e5e9",
    display: "flex",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "42px",
  },

  places__titleBack: {
    marginTop: "-12px",
  },

  places__titleNumber: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#ffffff",
    width: "119px",
    marginTop: "-30px",
  },

  places__status: {
    display: "flex",
    marginTop: "22px",
    marginLeft: "18px",
  },

  places__statusName: {
    margin: "0",
    marginLeft: "8px",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "13px",
    lineHeight: "18px",
    marginBottom: "20px",
    color: "#90949d",
  },

  places__setting: {
    display: "flex",
    right: "-56px",
    marginTop: "14px",
    cursor: "pointer",
  },

  places__bookButton: {
    border: "1px solid #e6e9f1",
    width: "183px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    color: "#44699f",
    paddingTop: "9px",
    paddingBottom: "9px",
    marginTop: "10px",
    marginLeft: "16px",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
  },

  places__bookWrapper: {
    width: "135px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },

  places__itemBooked: {
    width: "217px",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px #e2e5e9",
    display: "flex",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "42px",
    "& div:nth-child(1) svg path": {
      fill: "#ad7777",
    },
    "& svg circle": {
      stroke: "#ad7777",
    },
  },

  places__itemBook: {
    width: "217px",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px #e2e5e9",
    display: "flex",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "42px",
    "& div:nth-child(1) svg path": {
      fill: "#44699f",
    },
    "& svg circle": {
      stroke: "#44699f",
    },
  },
});

export default useStyles;
