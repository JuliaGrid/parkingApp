import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles({
  places: {
    width: "90%",
    margin: "auto",
    paddingTop: "30px",
    height: "100%",
  },

  places__list: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0",
    margin: "0",
  },

  main__wrapper: {
    width: "80%",
    position: "relative",
    paddingBottom: "20px",
    marginLeft: "auto",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
    minHeight: "100%",
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundColor: "#e6e9f1",
      width: "18px",
      marginLeft: "-18px",
      boxSizing: "border-box",
      marginTop: "345px",
      minHeight: "calc(100% - 345px)",
    },
  },

  main__logoWrapper: {
    width: "80%",
    right: "0",
    marginTop: "150px",
  },

  main__logo: {
    zIndex: 2,
    width: "115px",
    height: "115px",
    marginTop: "60px",
    marginLeft: "-57.5px",
    backgroundColor: " #e6e9f1",
    "& span": {
      display: "block",
      width: "115px",
      textAlign: "center",
      paddingTop: "20px",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "700",
      fontSize: "55px",
      lineHeight: "67px",
      color: "#44699f",
    },
  },

  main__addWrapper: {
    width: "80%",
    position: "absolute",
    right: "0",
  },

  main__add: {
    position: "relative",
    zIndex: 2,
    width: "115px",
    height: "85px",
    marginTop: "60px",
    marginLeft: "-57.5px",
    paddingTop: "30px",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px #e2e5e9",
    cursor: "pointer",
    "& svg": {
      display: "block",
      margin: "auto",
    },
    "& p": {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "16px",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#90949d",
      margin: "0",
      marginTop: "18px",
    },
  },

  edit: {
    width: "323px",
    margin: "auto",
    backgroundColor: "white",
    paddingTop: "30px",
    paddingBottom: "38px",
    top: "50%",
    marginTop: "-200px",
    left: "50%",
    marginLeft: "-161.5px",
    zIndex: 2,
  },

  edit__title: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "uppercase",
    color: "#515662",
    width: "230px",
    margin: "auto",
  },

  edit__number: {
    margin: "0",
    marginTop: "2px",
    color: "#44699f",
  },

  edit__form: {
    width: "247px",
    margin: "auto",
  },

  edit__name: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#757575",
    margin: "0",
    marginTop: "30px",
    marginBottom: "4px",
  },

  edit__group: {
    width: "247px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },
});

export default useStyles;
