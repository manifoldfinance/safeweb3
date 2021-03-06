import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import deepEqual from 'fast-deep-equal/es6';

export const initialDataAtom = atomFamily<string, unknown>((queryKey) => {
  const anAtom = atom(undefined);
  anAtom.debugLabel = `initialDataAtom/${queryKey}`;
  return anAtom;
}, deepEqual);
