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
  return (
    <Grid>
      <Grid.Column width={8}>
        <Image src='BM-bn.jpg' width='256' height='256'></Image>
        <Button color='black'>Read more</Button>
      </Grid.Column>
      <Grid.Column width={8}>
        Ut occaecat duis quis incididunt dolore duis velit sit nisi id. Mollit nulla aute sit commodo
        adipisicing in proident esse consectetur. Consectetur nisi adipisicing eiusmod proident occaecat 
        minim ut fugiat. Laboris laboris incididunt occaecat cupidatat duis quis est commodo pariatur culpa 
        reprehenderit pariatur cupidatat. Do aute pariatur est tempor.Dolor aliqua adipisicing eiusmod ullamco adipisicing eu occaecat esse aliquip deserunt non. Nostrud incididunt consectetur enim deserunt magna laboris laboris elit in minim fugiat et magna. Ea laboris enim minim do excepteur.
      </Grid.Column>
    </Grid>
  );
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
        <Page {...this.state} />
    </div>
    )
  }
}

export default App;
