import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync, existsSync } from 'fs';

@Injectable()
export class FileStorageService {

  
  read<T>(filePath: string): T[] {
    if (!existsSync(filePath)) {
      return [];
    }

    const data = readFileSync(filePath, 'utf-8');
    if (!data) {
      return [];
    }

    return JSON.parse(data) as T[];
  }

  write<T>(filePath: string, data: T[]): void {
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  }
}