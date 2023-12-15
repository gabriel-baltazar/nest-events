import { IsDateString, IsString, Length } from 'class-validator';
export class CreateEventDto {
    @IsString()
    @Length(5, 255, {message: "Nome deve ter entre 5 e 255 caracteres"})
    name: string;
    @Length(5, 255)
    description: string;
    @IsDateString()
    when: Date;
    @Length(5, 255)
    @Length(10, 20)
    address: string;
}