import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/operation", (req: Request, res: Response) => {
  const val1: number = 10;
  const val2: number = 20;
  const result: number = val1 + val2;
  res.send({ message: "Addition", data: result });
});

router.get("/subs", (req: Request, res: Response) => {
  const val1: number = 30;
  const val2: number = 20;
  const result: number = val1 - val2;
  res.send({ message: "Substraction", data: result });
});

router.get("/division", (req: Request, res: Response) => {
  const val1: number = 30;
  const val2: number = 20;
  const result: number = val1 / val2;
  res.send({ message: "Division", data: result });
});

router.get("/multiplication", (req: Request, res: Response) => {
  const val1: number = 30;
  const val2: number = 20;
  const result: number = val1 * val2;
  res.send({ message: "Multiplication", data: result });
});

router.get("/percentage", (req: Request, res: Response) => {
  const val1: number = 30;
  const percentage: number = 50;
  const result: number = (val1 * percentage) / 100;
  res.send({ message: "Percentage", data: result });
});

export default router;
