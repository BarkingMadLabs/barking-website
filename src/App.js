import React, { useState, Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Menu, Header, Image } from 'semantic-ui-react';

const Projects = () => {
  return (
    <h1>Projects</h1>
  );
};

const About = () => {
  return (
    <h1>About</h1>
  );
};

const News = () => {
  return (
    <h1>News</h1>
  );
};

const Home = () => {
  var headerStyle = {
    backgroundColor: 'white',
    padding: '30px'
  };

  var ikimonoStyle = {
    backgroundColor: '#312783',
    color: 'white',
    padding: '0px'
  };

  var trodonStyle = {
    backgroundColor: '#fcea10',
    padding: '0px'
  };

  var doggieStyle = {
    backgroundColor: '#f39200',
    color: 'white',
    padding: '0px'
  };

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={10} style={headerStyle}>
          <Image src='logo-completo-negro.png' width={400}></Image>
        </Grid.Column>
        <Grid.Column width={6} textAlign={"justified"} style={{'font-size': '18px', 'font-family': 'sans-serif'}}>
          Ut occaecat duis quis incididunt dolore duis velit sit nisi id. Mollit nulla aute sit commodo
          adipisicing in proident esse consectetur. Consectetur nisi adipisicing eiusmod proident occaecat 
          minim ut fugiat. Laboris laboris incididunt occaecat cupidatat duis quis est commodo pariatur culpa 
          reprehenderit pariatur cupidatat. Do aute pariatur est tempor.Dolor aliqua adipisicing eiusmod ullamco adipisicing eu occaecat esse aliquip deserunt non. Nostrud incididunt consectetur enim deserunt magna laboris laboris elit in minim fugiat et magna. Ea laboris enim minim do excepteur.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={ikimonoStyle}>
        <Grid.Column width={4}>
          <Image src='ikimono.png' height={450}></Image>
        </Grid.Column>
        <Grid.Column width={12} textAlign={"justified"} style={{'font-size': '18px', 'font-family': 'sans-serif'}}>
        Soy uno aunque de tres en tres, cabeza, tronco y extremidades. Soy siempre el mismo pero algo cambia en mi.
          <Image src='ikimono2.png'></Image>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={trodonStyle}>
        <Grid.Column width={4} textAlign={"justified"} style={{'font-size': '18px', 'font-family': 'sans-serif'}}>
        ¿Qué hubiera pasado si , hace 65 millones de año, un meteorito NO hubiera chocado con la tierra?
        </Grid.Column>
        <Grid.Column width={12}>
          <Image src='trodon.png'></Image>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={doggieStyle}>
        <Grid.Column width={10}>
          <Image src='cryptodoggie.png'></Image>
        </Grid.Column>
        <Grid.Column width={6} textAlign={"justified"} style={{'font-size': '24px', 'font-family': 'sans-serif'}}>
          Mi fiel y querido amigo tiene mil colores y texturas diferentes, personalidad y carácter mutable, mil estados de ánimo… pero siempre es adorable.
        </Grid.Column>
      </Grid.Row>      
    </Grid>
  );
};

const LandingPage = () => {
  return (
    <>
      <Home/>
    </>
  )
};

const Page = () => {
  
  const [current, setCurrent] = useState('home');

  const menuChanged = (e, { name }) => {
    setCurrent(name);
  }
  return (
    <>
      <Menu secondary>
        <Menu.Item
          name='home'
          active={current === 'home'}
          onClick={menuChanged}
        />
        <Menu.Item
          name='projects'
          active={current === 'projects'}
          onClick={menuChanged}
        />
        <Menu.Item
          name='about'
          active={current === 'about'}
          onClick={menuChanged}
        />
        <Menu.Item
          name='news'
          active={current === 'news'}
          onClick={menuChanged}
        />
      </Menu>
      {current === 'home' && <Home/>}
      {current === 'projects' && <Projects/>}
      {current === 'about' && <About/>}
      {current === 'news' && <News/>}
    </>
  );
};

class App extends Component {
  state = {current: 'projects'};

  render() {
    return (
      <div className="App">
        {/* <Page {...this.state} /> */}
        <LandingPage/>
    </div>
    )
  }
}

export default App;
