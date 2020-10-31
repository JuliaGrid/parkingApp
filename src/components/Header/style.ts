import headerImg from "../../img/header-img.jpg";

const useStyles = () => ({
  header: {
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "990px",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  },

  header__wrapper: {
    width: "88%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header__profile: {
    display: "flex",
    alignItems: "center",
  },

  header__exit: {
    cursor: "pointer",
  },

  header__name: {
    margin: "0",
    marginLeft: "15px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "100%",
    color: "#515662",
    // textAlign: "right",
  },

  header__avatar: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    marginLeft: "15px",
  },
});

export default useStyles;
