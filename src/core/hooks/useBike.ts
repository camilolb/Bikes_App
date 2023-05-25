import {useQuery, useQueryClient} from 'react-query';
import di from '../di';

export function useBike() {
  // const queryClient = useQueryClient();
  return useQuery(['BIKES'], async () => {
    // await queryClient.invalidateQueries(['BIKES']);
    return di.storeUseCase.getBikes();
  });
}
