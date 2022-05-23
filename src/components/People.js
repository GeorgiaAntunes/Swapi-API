import React, { useState, useEffect, }from 'react';
import axios from 'axios';
import { CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, Grid } from './Styles/Card.style';
// import { Divider } from 'semantic-ui-react';

export default function People() {
  const [people, setPeople] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const peopleURL = `https://swapi.dev/api/people/`;
    axios.get(peopleURL).then((res) => {
      setPeople(res.data.results);
    })
    .catch((err) => console.log(err));
  }, [])
  
  
  return (
    <>
        {people.length ? (
        people.map((person, i) => (
          <Grid>
            <CardWrapper key={person.i} >
              <CardHeader>
                  <CardHeading> {person.name}</CardHeading>
                </CardHeader>
                <CardBody>
                  <CardFieldset> 
                    <strong>Height: </strong>
                    <p>{person.height}</p>  
                  </CardFieldset>
                  <CardFieldset> 
                    <strong>Mass: </strong>
                    <p>{person.mass}</p> 
                  </CardFieldset>
                  <CardFieldset> 
                    <strong>Hair Color: </strong>
                    <p>{person.hair_color}</p> 
                  </CardFieldset>
                  <CardFieldset> 
                    <strong>Gender: </strong>
                    <p>{person.gender}</p> 
                  </CardFieldset>
            
                </CardBody>
            </CardWrapper>
          </Grid>
          
        ))
      ) : (
        <section>
          <li>People not found.</li>
        </section>
      )}
    </>
  )
}
