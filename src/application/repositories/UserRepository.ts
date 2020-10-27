import User from '../../domain/User';

export default interface UserRepository {
    getById(id: number): Promise<User>;
}
