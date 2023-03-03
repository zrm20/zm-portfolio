import { SxProps, useTheme } from "@mui/material";
import { CODE_BACKGROUND_IMG } from "../../../constants/imageUrls";
import chroma from "chroma-js";

interface Style {
  root: SxProps;
};

export default function useStyles(): Style {
  const { palette } = useTheme();

  return {
    root: {
      flex: 1,
      backgroundImage: `url(${CODE_BACKGROUND_IMG})`,
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
    },
  }
};
