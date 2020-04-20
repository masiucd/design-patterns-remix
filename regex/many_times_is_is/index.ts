export function countS(S: String) {
  const re = /(is)/g;
  return S.match(re)?.length;
}

export const x = 'existing pessimist optimist this is';
export const xx = 'is you strange?';
export const xxx = 'legia';
