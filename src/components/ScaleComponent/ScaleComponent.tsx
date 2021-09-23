import React from 'react';
import {
  buildChromaticScaleFromRoot,
  getNoteIndicesByFormula,
  Note,
  ScaleFormula,
} from '../../domain';

import './ScaleComponent.scss';
import NoteList from '../NoteList/NoteList';

interface Props {
  title: string;
  root: Note;
  formula: ScaleFormula;
}

const ScaleComponent = (props: Props) => {
  const activeNotes = getNoteIndicesByFormula(props.formula);
  return (
    <div className="scale">
      <h3 className="scale__title">{props.title}</h3>
      <NoteList
        scale={buildChromaticScaleFromRoot(props.root)}
        renderNoteWrapper={(children, note, index) => (
          <span
            className={`scale__notes__note ${
              activeNotes.has(index) ? 'scale__notes__note--active' : ''
            }`}
          >
            {children}
          </span>
        )}
      />
    </div>
  );
};

export default ScaleComponent;
