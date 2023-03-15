import React, { useState } from "react";
import http from "../api/Api";
import { Container, Box, Grid, Stack, Button, Typography } from "@mui/material";
import Character from "./Character";
import { useQuery } from "react-query";

const CharactersData = () => {
  const [page, setPage] = useState(1);

  const getCharactersData = async ({ queryKey }) => {
    const response = await http.get(`/character/?page=${queryKey[1]}`);
    return response;
  };

  const { data, isLoading, isPreviousData } = useQuery(
    ["characters", page],
    getCharactersData,
    {
      keepPreviousData: true,
    }
  );
  console.log(data);

  if (isLoading) {
    return (
      <Box>
        <Typography variant="h5">Loading....</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <Grid container columnSpacing={5} rowSpacing={5}>
          {data?.results?.map((character, index) => {
            return <Character character={character} key={index} />;
          })}
        </Grid>
        <Stack direction="row" justifyContent="center" marginTop={5}>
          <Button
            disabled={page === 1}
            onClick={() => setPage((old) => old - 1)}
            variant="outlined"
            color="primary"
          >
            Previous
          </Button>
          <Button
            disabled={isPreviousData && !data.info.next}
            onClick={() => setPage((old) => old + 1)}
            variant="outlined"
            color="primary"
          >
            Next
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CharactersData;
