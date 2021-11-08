import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
  getMeow(): string {
    return "Meow!";
  }
}
