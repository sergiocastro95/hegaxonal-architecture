import getUserByIdInteractor from './getUserById.interactor';
import UserTest from '../../infrastructure/data-sources/UserTest.dataSource';

const userRepository = new UserTest();

const getUserById = getUserByIdInteractor(userRepository);
export { getUserById };
