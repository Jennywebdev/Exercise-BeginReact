/**
 * DO NOT UPDATE
 * This is the exercise objets that will be used to create the exercises.
 */

import SplitComponent from '../exercise/01';
// Markdown
import { ReactComponent as SplitComponentMarkdown } from '../exercise/01.md';
// Exercise 1
import Solution1Exercise1 from '../solution/1-1';
import Solution1Exercise2 from '../solution/1-2';

export const EXERCISES = [
  {
    name: '1-split-component',
    parts: {
      exercise: <SplitComponent />,
      md: <SplitComponentMarkdown />,
      solutions: [
        <Solution1Exercise1 key={1} />,
        <Solution1Exercise2 key={1} />,
      ],
    },
  },
];
