import { ClassSerializerInterceptor, Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { AttendeesService } from "./attendees.service";

@Controller('events/:eventId/attendees')
export class EventAttendessController {
    constructor(private readonly attendeesService: AttendeesService){}

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    async findAll(@Param('eventId') eventId: number){
        return await this.attendeesService.findByEventId(eventId);
    }
}