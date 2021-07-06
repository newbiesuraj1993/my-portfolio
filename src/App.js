import styled from 'styled-components';
import { useState, useEffect } from 'react'
import './App.css';
import SideBar from './components/side-bar/side-bar.component';
import HomePage from './pages/home-page.pages';
import { Route, Switch as Switching } from 'react-router';
import AboutPage from './pages/about.page';
import ContactPage from './pages/contact.page';
import BlogsPage from './components/blogcomponent/blogs.component';
import PortFolioPage from './pages/portfolios.page';
import ResumePage from './pages/resume.page';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';


function App() {


  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme==='light-theme') {
      setTheme('dark-theme');
      setChecked(false)
    }else {
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div className="App">

      <SideBar navToggle={navToggle}/>
      <div className="light-dark-mode">
        <div className="left-contennt">
          <Brightness4Icon />
        </div>
        <div className="right-content">
          <Switch value="" checked={checked} size="medium" inputProps={{ 'aria-label': '' }} onClick={themeToggler} />
        </div>
      </div>


      <div className="hamburger-menu">
        <IconButton onClick={()=> setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>

        <Switching>
          <Route path='/' exact >
            <HomePage theme={theme}/>
          </Route>
          <Route path='/about' exact >
            <AboutPage />
          </Route>
          <Route path='/contact' exact >
            <ContactPage />
          </Route>
          <Route path='/blogs' exact >
            <BlogsPage />
          </Route>
          <Route path='/portfolios' exact >
            <PortFolioPage />
          </Route>
          <Route path='/resume' exact >
            <ResumePage />
          </Route>
        </Switching>

      </MainContentStyled>
    </div>
  );
}


const MainContentStyled = styled.main`

  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  display: flex;
  @media screen and (max-width:1200px){
    margin-left: 0;
    }
 


`;

export default App;
