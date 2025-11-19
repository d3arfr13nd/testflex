import { IsOptional, IsEnum, IsInt, IsNumber, IsDateString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { RoomType } from '../entities/room.entity';

export class FilterRoomsDto {
  @IsOptional()
  @IsEnum(RoomType)
  type?: RoomType;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  capacity?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @IsOptional()
  @IsDateString()
  date?: string; // YYYY-MM-DD format for availability snapshot
}

