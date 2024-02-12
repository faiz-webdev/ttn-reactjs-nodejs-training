import { Request, Response, Router } from "express";
import { add, division, multiplication, percentage, subs } from "../controller";

const router: Router = Router();

router.get("/add", add);

router.post("/subs", subs);

router.post("/division", division);

router.get("/multiplication", multiplication);

router.get("/percentage", percentage)

export default router;
