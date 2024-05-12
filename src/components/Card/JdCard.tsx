import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const JdCard = ({ data }: any) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const truncatedText = data.jobDetailsFromCompany.slice(0, maxLength);
  const shouldTruncate = data.jobDetailsFromCompany.length > maxLength;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <div className="flex-row card-header">
          <Avatar src={data.logoUrl}></Avatar>

          <div className="">
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {capitalizeFirstLetter(data.companyName)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {capitalizeFirstLetter(data.jobRole)}
            </Typography>
          </div>
        </div>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Location: {data.location}
        </Typography>
        <Typography variant="subtitle1" fontWeight="fontWeightMedium">
          About Company:
        </Typography>
        <Typography variant="subtitle2" fontWeight="fontWeightBold">
          About us
        </Typography>
        <Typography variant="body1">
          {expanded ? data.jobDetailsFromCompany : truncatedText}
          {shouldTruncate && (
            <span
              onClick={handleToggle}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {expanded ? " Show less" : " Show more"}
            </span>
          )}
        </Typography>
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
