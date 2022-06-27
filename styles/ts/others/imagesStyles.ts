import { StyleRules } from "@mui/styles";
import { blackColor, hexToRgb } from "../nextjs-material-kit-pro";

const imagesStyles: StyleRules = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  imgRounded: {
    borderRadius: "6px !important" as any,
  },
  imgRoundedCircle: {
    borderRadius: "50% !important" as any,
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(" +
      hexToRgb(blackColor) +
      ", 0.24), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem",
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)",
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)",
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)",
  },
  imgCardOverlay: {
    position: "absolute" as "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem",
  },
};

export default imagesStyles;
