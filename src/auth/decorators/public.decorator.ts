import { SetMetadata } from '@nestjs/common';

export const Public = (...args: string[]) =>
  SetMetadata('Public-decorator', args);
