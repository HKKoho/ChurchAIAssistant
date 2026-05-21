import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PacksService } from './packs.service.js';

@Controller('api/v1/packs')
export class PacksController {
  constructor(private readonly packsService: PacksService) {}

  @Get()
  listPacks() {
    return { success: true, data: this.packsService.listPacks() };
  }

  @Get(':id')
  getPack(@Param('id') id: string) {
    const pack = this.packsService.getPack(id);
    if (!pack) throw new NotFoundException(`Pack "${id}" not found`);
    return { success: true, data: pack };
  }
}
