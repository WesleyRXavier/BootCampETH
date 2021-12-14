import { Request, Response } from 'express';


function index(req: Request, res: Response) {
    return res.json('Rota de filmes');
}

export { index }