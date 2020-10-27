import UserRepository from '../repositories/UserRepository';
import User from '../../domain/User';

const getUserByIdInteractor = (userRepository: UserRepository) => async (id: number): Promise<User> => {
    const user: User = await userRepository.getById(id);
    return user;
};

export default getUserByIdInteractor;
