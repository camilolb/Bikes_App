import {useQuery} from 'react-query';
import di from '../di';

export function useBikeById(id?: string) {
  return useQuery(
    [],
    async () => {
      return di.storeUseCase.getBike(id || '');
    },
    {
      enabled: !!id,
    },
  );
}
