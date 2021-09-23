import React from 'react';
import NoteList from '../NoteList/NoteList';
import { chromaticScale, Note } from '../../domain';
import './RootNoteSelector.scss';

interface Props {
  selectedRoot: Note;
  onChange: (root: Note) => void;
}

const RootNoteSelector = (props: Props) => (
  <NoteList
    className="root-note-selector"
    scale={chromaticScale}
    renderNoteWrapper={(children, note) => (
      <a
        className={`root-note-selector__note ${
          note === props.selectedRoot
            ? 'root-note-selector__note--selected'
            : ''
        }`}
        onClick={() => props.onChange(note)}
        href={`${process.env.PUBLIC_URL}/#${encodeURIComponent(note)}`}
      >
        {children}
      </a>
    )}
  />
);

export default RootNoteSelector;
