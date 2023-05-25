import {useMutation} from 'react-query';
import di from '../di';
import {SessionStorageType, useSession} from '../frameworks/jotai';
import {IUserEntity} from '../domain';

export function useRegisterWithEmail() {
  const [sessionInformation, setSessionInformation] = useSession();
  return useMutation<IUserEntity, Error, {username: string; password: string}>(
    ['REGISTER_USER'],
    user => {
      return di.securityUseCase.registerwithEmail(user.username, user.password);
    },
    {
      onSuccess: async e => {
        const {token} = sessionInformation as SessionStorageType;
        if (token === '') setSessionInformation({token: e.Token, user: e});
      },
    },
  );
}
