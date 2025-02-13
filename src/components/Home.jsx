import React, { useContext } from 'react'
import { DataContext } from '../App'
import { Container, HomeLayout } from '../styles/styles';

function Home() {
    const data = useContext(DataContext);
    console.log(data);

  return (
    <Container>
        <h1>Home</h1>
        <hr />
        <HomeLayout>
            <img style={{ borderRadius: '10px' }} src={data.basics?.image} alt={data.basics?.name} width="300px" />
            <ul style={{ listStyle: 'none', padding: '0 2rem' }}>
                <li style={{ fontSize: '2rem' }}><strong>Name</strong> : {data.basics?.name}</li>
                <li style={{ fontSize: '1.2rem' }}><strong>Headline</strong> : {data.basics?.headline}</li>
                <li style={{ fontSize: '1.2rem' }}><strong>Label</strong> : {data.basics?.label}</li>
                <li style={{ fontSize: '1.2rem' }}><strong>Region</strong> : {data.basics?.region}</li><br />
                <li style={{ fontSize: '1rem' }}>{data.basics?.summary}</li>
            </ul>
        </HomeLayout>
    </Container>
  )
}

export default Home