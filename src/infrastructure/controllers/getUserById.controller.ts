import { Request, Response } from 'express';
import { getUserById } from '../../application/interactors';
const getUserByIdController = async (request: Request, response: Response): Promise<void> => {
    const { id } = request.params;
    const user = await getUserById(parseInt(id, 10));
    response.json(user);
};

export default getUserByIdController;
