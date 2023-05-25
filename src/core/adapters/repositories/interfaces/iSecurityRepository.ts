import {IUserEntity} from '../../../domain';

export interface ISecurityRepository {
  loginWithEmail(userName: string, password: string): Promise<IUserEntity>;
  registerWithEmail(userName: string, password: string): Promise<IUserEntity>;
  userLogout(): Promise<void>;
}
