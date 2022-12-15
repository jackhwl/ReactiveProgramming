import { DataService } from './data.service';
import { Person } from './sw.models';
import { cold } from 'jasmine-marbles';
import { TestScheduler } from 'rxjs/testing';
import { throttleTime } from 'rxjs/operators';

fdescribe('DataService', () => {
  let mockPeople:any;
  beforeEach(() => {
    mockPeople = [
      { name: 'Juke Piewalker' },
      { name: 'Sobe Han' }
    ] as Person[];
  });
  describe('getPeople', () => {
    let mockHttp:any;
    let dataService: DataService;
    beforeEach(() => {
      mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
      dataService = new DataService(mockHttp);
    });

    it('should get people', () => {
      const httpCall = cold('x|', { x: {results: mockPeople }})
      mockHttp.get.and.returnValue(httpCall)
      const actual = dataService.getPeople()
      const expected = cold('a|', { a: mockPeople })
      expect(actual).toBeObservable(expected)
    })

    it('should return an empty array when the http call fails', () => {
      const httpCall = cold('#')
      mockHttp.get.and.returnValue(httpCall)
      const actual = dataService.getPeople()
      const expected = cold('(a|)', { a: [] })
      expect(actual).toBeObservable(expected)
    })
  });
});
