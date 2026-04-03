import fs from 'fs';

const path = '/Users/eliocro/Desktop/res';

export function getFiles(): string[] {
  const entries = fs.readdirSync(path);
  return entries.map((f) => path + '/' + f);
}
