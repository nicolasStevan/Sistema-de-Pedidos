import { Router, Request, Response } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    res.send("Meu servidor Web Funcionando!");
    }
);

export { router };