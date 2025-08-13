import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUserParamDto {
    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    isMarried: boolean;
}