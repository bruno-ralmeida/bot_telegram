import { Test, TestingModule } from '@nestjs/testing';
import { IbmWatsonService } from './ibm-watson.service';

describe('IbmWatsonService', () => {
  let service: IbmWatsonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IbmWatsonService],
    }).compile();

    service = module.get<IbmWatsonService>(IbmWatsonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
