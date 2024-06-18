import { Controller, Get } from "@nestjs/common";

@Controller("user")
export class UserController {

    @Get("/all")
    async getUsers() {
        return "Michelle Dupa Bentulan!"
    }

}