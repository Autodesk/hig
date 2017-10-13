import { match, filter, group, mergeState, getModuleState } from './model';

describe('SideNav model', () => {
  const module1 = { id: '1', title: '1 cool module', groupId: 'X' };
  const module2 = { id: '2', title: '2 legit to quit', groupId: 'Y' };
  const modules = [module1, module2];

  const submoduleA = { id: 'A', title: 'A cool submodule', moduleId: '1' };
  const submoduleB = { id: 'B', title: 'Belive in your sumbodule', moduleId: '2' };
  const submodules = [submoduleA, submoduleB];

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

    it('returns any other props', () => {
      const result = filter({ modules, submodules, foo: 'bar' }, '');
      expect(result.foo).toEqual('bar');
    });
  });

  describe('group', () => {
    it('nests modules and submodules', () => {
      expect(group({ modules, submodules })).toEqual([
        {
          modules: [
            {
              id: '1', title: '1 cool module', groupId: 'X', submodules: [submoduleA]
            },
          ]
        },
        {
          modules: [
            {
              id: '2', title: '2 legit to quit', groupId: 'Y', submodules: [submoduleB]
            }
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
          activeModuleId: '1',
          moduleStates: {}
        };
        const result = mergeState(props, state);

        expect(result.modules[0].active).toBeTruthy();
        expect(result.submodules[0].active).not.toBeTruthy();
      });

      describe('as a prop', () => {
        it('uses the prop', () => {
          const state = {
            activeModuleId: '1',
            moduleStates: {}
          };
          const result = mergeState({
            ...props,
            activeModuleId: 'A'
          }, state);

          expect(result.modules[0].active).toBeTruthy();
          expect(result.submodules[0].active).toBeTruthy();
        });
      });
    });

    describe('with an active submodule', () => {
      it('sets active on the submodule and the parent module', () => {
        const state = {
          activeModuleId: 'A',
          moduleStates: {}
        };
        const result = mergeState(props, state);

        expect(result.modules[0].active).toBeTruthy();
        expect(result.submodules[0].active).toBeTruthy();
      });
    });

    describe('with a module with minimized false', () => {
      it('preserves the value', () => {
        const state = {
          moduleStates: {
            1: {
              minimized: false
            }
          }
        };
        const result = mergeState(props, state);

        expect(result.modules[0].minimized).not.toBeTruthy();
      });
    });

    describe('with a module without a minimized prop', () => {
      it('preserves the value', () => {
        const state = {
          moduleStates: {}
        };
        const result = mergeState(props, state);

        expect(result.modules[0].minimized).toBeTruthy();
      });
    });

    it('returns any other props', () => {
      const state = {
        moduleStates: {
          1: {
            minimized: false
          }
        }
      };
      const result = mergeState({ ...props, foo: 'bar' }, state);
      expect(result.foo).toEqual('bar');
    });
  });

  describe('.match', () => {
    describe('with a matching query', () => {
      const string = 'foo';
      const query = 'fo';

      it('returns true', () => {
        expect(match(string, query)).toEqual(true);
      });
    });

    describe('with a matching query with mis-matched case', () => {
      const string = 'foo';
      const query = 'Fo';

      it('returns true', () => {
        expect(match(string, query)).toEqual(true);
      });
    });

    describe('with a non-matching query', () => {
      const string = 'foo';
      const query = 'baz';

      it('returns false', () => {
        expect(match(string, query)).toEqual(false);
      });
    });
  });
});
