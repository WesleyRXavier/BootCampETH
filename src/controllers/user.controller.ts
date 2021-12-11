import { Request, Response } from 'express';
import { User } from '../model/User';
interface UserResult {
    _id: string,
    name: string,
    email?: string,
    password?: string
}

async function view(req: Request, res: Response) {

    const { id } = req.params;
    if (!id) {
        return res.status(404).json({
            message: "user nao encontrado",
        })
    }

    User.findById(id, (error: any, result: UserResult) => {
        if (error) {
            console.log('errorro');
            return res.status(500).json(error)
        }
        return res.status(200).json({
            user: {
                id: result._id,
                name: result.name


            }
        })
    })
}


async function destroy(req: Request, res: Response) {
    const { id } = req.params;

    const idExiste = await User.findById(id);
    if (!id || !idExiste) {
        return res.status(404).json({
            message: "user nao encontrado",
        })
    }

    User.findByIdAndDelete(id, (error: Error | string | undefined, result: UserResult)=>{
        if(error) {
            console.log('errorro');
            return res.status(500).json(error)
        }
        console.log('Result: ', typeof result)
        return res.status(200).json({message:"user deletado"});
    });





}
export { view, destroy };