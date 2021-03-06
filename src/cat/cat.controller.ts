import { Controller, Get } from "@nestjs/common";
import { CatService } from "./cat.service";

@Controller()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getMeow(): string {
    return this.catService.getMeow();
  }
}
