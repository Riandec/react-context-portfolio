import React, { useContext } from 'react'
import { DataContext } from '../App' 
import { Container, SkillsCom } from '../styles/styles';

function About() {
    const data = useContext(DataContext);

  return (
    <Container>
        <h1>About</h1>
        <hr />
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <img style={{ borderRadius: '100%' }} src={data.basics?.image} alt={data.basics?.name} width="200px" />
            <ul style={{ listStyle: 'none' }}>
                <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}><strong>{data.basics?.name}</strong></li>
            </ul>
            <hr />
            <h3>My skills</h3>
            <SkillsCom>
                {data.skills?.map((value, index) => (
                    <li key={index}>
                        <strong>{value.name}</strong>
                        <br />
                        Level: {value.level}
                    </li>
                ))}
            </SkillsCom>
        </div>
    </Container>
  )
}

export default About