export enum Note {
  C = 'C',
  C_SHARP = 'C&#9839;',
  D = 'D',
  D_SHARP = 'D&#9839;',
  E = 'E',
  F = 'F',
  F_SHARP = 'F&#9839;',
  G = 'G',
  G_SHARP = 'G&#9839;',
  A = 'A',
  A_SHARP = 'A&#9839;',
  B = 'B',
}

export enum Step {
  First = 0,
  MinorSecond,
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

export const CHROMATIC_SCALE_LENGTH = chromaticScale.length;

export const MajorScale: ScaleFormula = [
  Step.First,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
];

export const NaturalMinorScale: ScaleFormula = [
  Step.First,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
];

export const HarmonicMinorScale: ScaleFormula = [
  Step.First,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MinorThird,
];

export const MelodicMinorScale: ScaleFormula = [
  Step.First,
  Step.MajorSecond,
  Step.MinorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MajorSecond,
];

export const MajorPentatonicScale: ScaleFormula = [
  Step.First,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorThird,
  Step.MajorSecond,
];

export const MinorPentatonicScale: ScaleFormula = [
  Step.First,
  Step.MinorThird,
  Step.MajorSecond,
  Step.MajorSecond,
  Step.MinorThird,
];

export const BluesScale: ScaleFormula = [
  Step.First,
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

  for (let i = 0; i < CHROMATIC_SCALE_LENGTH; i++) {
    if (i - prevIndex === formula[formulaIndex]) {
      result.add(i);
      prevIndex = i;
      formulaIndex++;
    }
  }

  return result;
};
