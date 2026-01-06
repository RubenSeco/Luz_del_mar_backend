import * as fs from 'fs';
import * as path from 'path';

const DATA_DIR =
  process.env.NODE_ENV === 'production'
    ? '/data'
    : path.join(process.cwd(), 'data');


export function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }

  const files = ['productos.json', 'users.json'];

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }
  }
}