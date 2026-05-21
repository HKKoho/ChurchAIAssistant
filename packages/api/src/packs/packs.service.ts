import { Injectable } from '@nestjs/common';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

@Injectable()
export class PacksService {
  private readonly packsDir: string;

  constructor() {
    this.packsDir =
      process.env['SKILLS_PACKS_DIR'] ?? resolve(process.cwd(), '../../skills/packs');
  }

  listPacks(): unknown[] {
    if (!existsSync(this.packsDir)) return [];
    return readdirSync(this.packsDir)
      .filter((f) => f.endsWith('.json'))
      .flatMap((f) => {
        try {
          const raw = readFileSync(join(this.packsDir, f), 'utf8');
          const data = JSON.parse(raw) as Record<string, unknown>;
          return [
            {
              id: data['id'],
              name: data['name'],
              icon: data['icon'],
              tagline: data['tagline'],
              description: data['description'],
              color: data['color'],
              version: data['version'],
            },
          ];
        } catch {
          return [];
        }
      });
  }

  getPack(id: string): unknown {
    const filePath = join(this.packsDir, `${id}.json`);
    if (!existsSync(filePath)) return null;
    try {
      return JSON.parse(readFileSync(filePath, 'utf8'));
    } catch {
      return null;
    }
  }
}
