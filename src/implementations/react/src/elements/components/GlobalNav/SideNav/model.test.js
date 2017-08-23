import { match, filter, group, mergeState, getModuleState } from './model';

describe('SideNav model', () => {
  let module1 = { id: '1', title: '1 cool module', groupId: 'X' };
  let module2 = { id: '2', title: '2 legit to quit', groupId: 'Y' };
  let modules = [module1, module2];

  let submoduleA = { id: 'A', title: 'A cool submodule', moduleId: '1' };
  let submoduleB = { id: 'B', title: 'Belive in your sumbodule', moduleId: '2' };
  let submodules = [submoduleA, submoduleB];

  describe('filter', () => {
    it('returns submodules matching the query', () => {
      const query = 'A';
      const result = filter({ modules, submodules }, query);

      expect(result.submodules).toEqual(expect.arrayContaining([submoduleA]));
      expect(result.submodules).not.toEqual(expect.arrayContaining([submoduleB]));
    });

    it('returns modules matching the query', () => {
      const query = '1';
      const result = filter({ modules, submodules }, query);

      expect(result.modules).toEqual(expect.arrayContaining([module1]));
      expect(result.modules).not.toEqual(expect.arrayContaining([module2]));
    });

    it('returns modules with submodules matching the query', () => {
      const query = 'A';
      const result = filter({ modules, submodules }, query);

      expect(result.modules).toEqual(expect.arrayContaining([module1]));
      expect(result.modules).not.toEqual(expect.arrayContaining([module2]));
    });
  });

  describe('group', () => {
    it('nests modules and submodules', () => {
      expect(group({ modules, submodules })).toEqual([
        {
          modules: [
            { id: '1', title: '1 cool module', groupId: 'X', submodules: [submoduleA] },
          ]
        },
        {
          modules: [
            { id: '2', title: '2 legit to quit', groupId: 'Y', submodules: [submoduleB] }
          ]
        }
      ]);
    });
  });

  describe('mergeState', () => {
    const props = { modules: [module1], submodules: [submoduleA] };

    describe('with an active module', () => {
      it('sets active on the module', () => {
        const state = {
          activeModule: '1',
          moduleStates: {}
        }
        const result = mergeState(props, state);

        expect(result.modules[0].active).toBeTruthy();
        expect(result.submodules[0].active).not.toBeTruthy();
      });
    });

    describe('with an active submodule', () => {
      it('sets active on the submodule', () => {
        const state = {
          activeModule: 'A',
          moduleStates: {}
        }
        const result = mergeState(props, state);

        expect(result.modules[0].active).not.toBeTruthy();
        expect(result.submodules[0].active).toBeTruthy();
      });
    });

    describe('with a module with minimized false', () => {
      it('preserves the value', () => {
        const state = {
          moduleStates: {
            '1': {
              minimized: false
            }
          }
        }
        const result = mergeState(props, state);

        expect(result.modules[0].minimized).not.toBeTruthy();
      });
    });

    describe('with a module without a minimized prop', () => {
      it('preserves the value', () => {
        const state = {
          moduleStates: {}
        }
        const result = mergeState(props, state);

        expect(result.modules[0].minimized).toBeTruthy();
      });
    });
  });

  describe('.match', () => {
    describe('with a matching query', () => {
      let string = 'foo';
      let query = 'fo';

      it('returns true', () => {
        expect(match(string, query)).toEqual(true);
      });
    });

    describe('with a matching query with mis-matched case', () => {
      let string = 'foo';
      let query = 'Fo';

      it('returns true', () => {
        expect(match(string, query)).toEqual(true);
      });
    });

    describe('with a non-matching query', () => {
      let string = 'foo';
      let query = 'baz';

      it('returns false', () => {
        expect(match(string, query)).toEqual(false);
      });
    });
  });

});
