import * as fs from 'fs';
import * as path from 'path';
import { DATA_DIR, DATA_FILES } from './data.constants';

export function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  Object.values(DATA_FILES).forEach((file) => {
    const filePath = path.join(DATA_DIR, file);

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }
  });
}
