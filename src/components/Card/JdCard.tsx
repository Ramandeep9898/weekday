import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export const JdCard = ({ data }: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={data.logoUrl}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={data.companyName}
        subheader={data.jobRole}
      />

      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Estimated Salary
        </Typography>
        <Typography variant="subtitle1" fontWeight="fontWeightMedium">
          About Company:
        </Typography>
        <Typography variant="subtitle2" fontWeight="fontWeightBold">
          About us
        </Typography>
        <Typography variant="body1">{data.jobDetailsFromCompany}</Typography>

        <Typography
          variant="subtitle1"
          letterSpacing={2}
          color="text.secondary"
          fontWeight="fontWeightBold"
        >
          Minimum Experience
        </Typography>
        <Typography variant="h6" fontWeight="fontWeightRegular">
          {data.minExp === null ? 0 : data.minExp} years
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" fullWidth>
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
};
