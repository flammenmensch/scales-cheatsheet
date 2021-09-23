export enum Note {
  C = 'C',
  C_SHARP = 'C&#9839;/D&#9837;',
  D = 'D',
  D_SHARP = 'D&#9839;/E&#9837;',
  E = 'E',
  F = 'F',
  F_SHARP = 'F&#9839;/G&#9837;',
  G = 'G',
  G_SHARP = 'G&#9839;/A&#9837;',
  A = 'A',
  A_SHARP = 'A&#9839;/B&#9837;',
  B = 'B',
}

export enum Step {
  MinorSecond = 1,
  MajorSecond,
  MinorThird,
  MajorThird,
}

export type Scale = Array<Note>;

export type ScaleFormula = Array<Step>;

export const chromaticScale: Scale = [
  Note.C,
  Note.C_SHARP,
  Note.D,
  Note.D_SHARP,
  Note.E,
  Note.F,
  Note.F_SHARP,
  Note.G,
  Note.G_SHARP,
  Note.A,
  Note.A_SHARP,
  Note.B,
];

export const CHROMATIC_SCALE_LENGTH = 12;

export const MajorScale: ScaleFormula = [
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
];

export const MinorScale: ScaleFormula = [
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
];

export const MajorPentatonicScale: ScaleFormula = [
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorThird,
  Step.MajorSecond,
];

export const MinorPentatonicScale: ScaleFormula = [
  Step.MinorThird,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorThird,
];

export const BluesScale: ScaleFormula = [
  Step.MinorThird,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MinorSecond,
  Step.MinorThird,
];

export const buildChromaticScaleFromRoot = (root: Note) => {
  const rootIndex = chromaticScale.indexOf(root);

  return [
    ...chromaticScale.slice(rootIndex),
    ...chromaticScale.slice(0, rootIndex),
  ];
};

export const getNoteIndicesByFormula = (formula: ScaleFormula) => {
  const result = new Set<number>();

  let prevIndex = 0;
  let formulaIndex = 0;

  result.add(0); // Add root note

  for (let i = 0; i < CHROMATIC_SCALE_LENGTH; i++) {
    if (i - prevIndex === formula[formulaIndex]) {
      result.add(i);
      prevIndex = i;
      formulaIndex++;
    }
  }

  return result;
};
