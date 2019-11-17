import React, { useState, Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Menu, Image } from 'semantic-ui-react';

const ContentPage = () => {
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
  
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const menuChanged = (e, { name }) => {
    setCurrentLanguage(name);
  }
  return (
    <>
      <Menu secondary>
        <Menu.Item
          name='en'
          active={currentLanguage === 'en'}
          onClick={menuChanged}
        />
        <Menu.Item
          name='es'
          active={currentLanguage === 'es'}
          onClick={menuChanged}
        />
      </Menu>
      {currentLanguage === 'en' && <ContentPage/>}
      {currentLanguage === 'es' && <ContentPage/>}
    </>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
    </div>
    )
  }
}

export default App;
