import { IsOptional, Min, IsString, IsEnum, Max } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Min(0)
  @Max(100)
  limit: number = 8;

  @IsOptional()
  @Min(0)
  offset: number = 1;

  @IsString()
  @IsEnum(['asc', 'desc'])
  sort_direction: 'asc' | 'desc';
}
