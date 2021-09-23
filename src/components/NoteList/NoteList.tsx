import React from 'react';
import NoteComponent from '../NoteComponent/NoteComponent';
import { Note, Scale } from '../../domain';

import './NoteList.scss';

interface Props {
  scale: Scale;
  className?: string;
  itemClassName?: string;
  renderNoteWrapper?: (
    children: React.ReactNode,
    note: Note,
    index: number,
    notes: Scale,
  ) => React.ReactNode;
}

const NoteList = (props: Props) => (
  <ul className={`note-list ${props.className || ''}`}>
    {props.scale.map((note, index, items) => (
      <li key={`${note}_${index}`} className={props.itemClassName}>
        {props.renderNoteWrapper ? (
          props.renderNoteWrapper(
            <NoteComponent note={note} />,
            note,
            index,
            items,
          )
        ) : (
          <NoteComponent note={note} />
        )}
      </li>
    ))}
  </ul>
);

export default NoteList;
