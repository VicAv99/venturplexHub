import { Test, TestingModule } from '@nestjs/testing';
import { Database } from './database-provider';

describe('Database', () => {
  let provider: Database;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Database],
    }).compile();
    provider = module.get<Database>(Database);
  });
  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
