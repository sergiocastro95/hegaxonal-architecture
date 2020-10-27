import UserRepository from '../../application/repositories/UserRepository';
import User from '../../domain/User';

class UserTest implements UserRepository {
    public async getById(id: number): Promise<User> {
        const user: User = {
            id,
            name: 'Pedro Piqueras',
            img: 'https://www.google.com',
            email: 'adsasd@aasd.com',
            phone: '666666666',
            city: 'Orihuela',
            country: 'España'
        };
        return user;
    }
}

export default UserTest;
