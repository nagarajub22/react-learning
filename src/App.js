import { useState } from 'react';
import './App.css';
import LESSONS_LIST from './config/config';
import ContentPane from './main/content-pane/ContentPane';
import Footer from './main/footer/Footer';
import Header from './main/header/Header';
import NavigationPane from './main/navigation-pane/NavigationPane';

function App() {

  const [currentLesson, setCurrentLesson] = useState(LESSONS_LIST[0]);

  const onChangeLesson = (lesson) => {
    setCurrentLesson(lesson);
  }

  return (
    <>
      <Header title="Reactjs"/>
      <main>
        <NavigationPane lessons={LESSONS_LIST} currentLesson={currentLesson} changeLesson={onChangeLesson}/>
        <ContentPane lesson={currentLesson}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
