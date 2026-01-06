import * as fs from 'fs';
import * as path from 'path';
import { DATA_DIR, DATA_FILES } from '../data/data.constants';
import usersSeed from './users.seed.json';
import productsSeed from './products.seed.json';

function seedFile(fileName: string, seedData: any[]) {
  const filePath = path.join(DATA_DIR, fileName);

  const current = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  if (current.length === 0) {
    fs.writeFileSync(filePath, JSON.stringify(seedData, null, 2));
    console.log(`Seed aplicado a ${fileName}`);
  } else {
    console.log(`Seed ignorado (${fileName} ya tiene datos)`);
  }
}

export function runSeed() {
  seedFile(DATA_FILES.users, usersSeed);
  seedFile(DATA_FILES.products, productsSeed);
}