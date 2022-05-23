import React, { useState, useEffect, }from 'react';
import axios from 'axios';
import { CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, Grid } from './Styles/Card.style';

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const planetsURL = `https://swapi.dev/api/planets/`;
    axios.get(planetsURL).then((res) => {
      setPlanets(res.data.results);
    })
    .catch((err) => console.log(err));
  }, [])
  
  return (
    <>
        {planets.length ? (
        planets.map((planet, i) => (
          <Grid>
            <CardWrapper key={planet.i} columns={4}>
              <CardHeader>
                  <CardHeading> {planet.name}</CardHeading>
                </CardHeader>
                <CardBody>
                  <CardFieldset> 
                    <strong>Climate: </strong>
                    <p>{planet.climate}</p>  
                  </CardFieldset>
                  <CardFieldset> 
                    <strong>Diameter: </strong>
                    <p>{planet.diameter}</p>
                  </CardFieldset>
                  <CardFieldset> 
                    <strong>Rotation Period: </strong>
                    <p>{planet.rotation_period}</p>  
                  </CardFieldset>
                  <CardFieldset>
                    <strong>Population: </strong>
                    <p>{planet.population}</p>
                  </CardFieldset>
                </CardBody>
            </CardWrapper>
          </Grid>
        ))
      ) : (
        <section>
          <li>Planets not found.</li>
        </section>
      )}
    </>
  )
}
