import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScaleComponent from './components/ScaleComponent/ScaleComponent';
import RootNoteSelector from './components/RootNoteSelector/RootNoteSelector';
import Heading from './components/Heading/Heading';
import Row from './components/Row/Row';
import reportWebVitals from './reportWebVitals';
import {
  BluesScale,
  MajorPentatonicScale,
  MajorScale,
  MinorPentatonicScale,
  MinorScale,
  Note,
} from './domain';

import 'reset.css/reset.css';
import './index.scss';

const getDefaultRootNote = () => {
  const hash = window.location.hash;

  if (/^#\w+/.test(hash)) {
    return decodeURIComponent(hash).replace('#', '') as Note;
  }

  return Note.C;
};

const App = () => {
  const [root, setRoot] = useState(getDefaultRootNote());

  return (
    <>
      <Row>
        <Heading text="Scales cheatsheet" />
      </Row>
      <div className="sticky">
        <Row>
          <RootNoteSelector
            selectedRoot={root}
            onChange={(note) => setRoot(note)}
          />
        </Row>
      </div>
      <Row>
        <ScaleComponent title="Major" root={root} formula={MajorScale} />
        <ScaleComponent title="Minor" root={root} formula={MinorScale} />
        <ScaleComponent
          title="Major Pentatonic"
          root={root}
          formula={MajorPentatonicScale}
        />
        <ScaleComponent
          title="Minor Pentatonic"
          root={root}
          formula={MinorPentatonicScale}
        />
        <ScaleComponent title="Blues" root={root} formula={BluesScale} />
      </Row>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
