import React from "react";
import {
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Character = ({ character }) => {
  return (
    <Grid item lg={4} md={4} sm={12} xs={12}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h6">{character.name}</Typography>
            <Typography variant="subtitle1">Status - {character.status}</Typography>
            <Typography variant="subtitle1">
              Species - {character.species}
            </Typography>
            <Typography variant="subtitle1">
              Gender - {character.gender}
            </Typography>
            <Typography variant="subtitle1">
              Location - {character.location.name}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`${character.image}`}
          alt="character images"
        />
      </Card>
    </Grid>
  );
};

export default Character;
