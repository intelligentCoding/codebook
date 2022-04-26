import express, { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
    id: string;
    content: string;
    type: 'text' | 'code'
}
export const CreateCellsRouter = (filename: string, dir: string) => {
    const router = express.Router();
    const fullPath = path.join(dir, filename);
    router.get('/cells', async (req, res)=> {
        // 1. Make sure cell storage file exists
            // if not exists add default list of cells.
    
        //Read the file
        // parse a list of cells out of it.
        // Send list of cells back to browser. 
    });
    
    router.post('/cells',async (req, res) => {
        // take cells from request obj
        const { cells }: { cells: Cell[]} = req.body;

        await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');
        res.send({status: 'ok'});
    });
    return Router;
}
