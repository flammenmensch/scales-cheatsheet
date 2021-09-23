import React from 'react';
import { Note } from '../../domain';

import './NoteComponent.scss';

interface Props {
  note: Note;
}

const NoteComponent = (props: Props) => (
  <span className="note" dangerouslySetInnerHTML={{ __html: props.note }} />
);

export default NoteComponent;
