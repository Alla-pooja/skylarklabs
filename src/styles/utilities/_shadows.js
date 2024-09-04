// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
export const shadowStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ...generateShadows(theme),
  },
}));

const generateShadows = (theme) => {
  let classList = {};

  theme.shadows.map((shadow, ind) => {
    classList[`.elevation-z${ind}`] = {
      boxShadow: `${shadow} !important`,
    };
    return null;
  });

  return classList;
};
