const useStyles = () => ({
  main__logoWrapper: {
    width: "80%",
    right: "0",
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
});

export default useStyles;
