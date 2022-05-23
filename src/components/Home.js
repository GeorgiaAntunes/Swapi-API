import React from 'react'
import { CardHeader, CardBody, Grid } from './Styles/Card.style';

export default function Home() {
  return (
    <>
      <Grid>
      <CardHeader>
        <h2> The Star Wars API </h2>
        </CardHeader>
        <CardHeader>
        <strong> What is this? </strong>
        </CardHeader>
        <CardBody>
          <p>
          The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data 
          source for all the data from the Star Wars canon universe!
          </p>
          <p>
          We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. 
          Then we went and stuck an API on the front so you can access it all!
          </p>
          <p>
          This project is open source and you can contribute on GitHub.
          </p>
        </CardBody>
        <CardHeader>
        <strong> (what happened to swapi.co?) </strong>
        </CardHeader>
        <CardBody>
          <p>
          All the Star Wars data you've ever wanted:
          Planets, Spaceships, Vehicles, People, Films and Species
          </p>
          <p>
          This project is open source and you can contribute on GitHub.
          </p>
        </CardBody>
      </Grid>
    </>
  )
}
