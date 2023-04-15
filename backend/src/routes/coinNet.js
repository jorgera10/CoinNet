import { Router } from "express";
import {
  deleteCapital,
  getCapital,
  postCapital,
  putCapital,
} from "../controller/coinNet";

const router = Router();

router.get("/coinNet", getCapital);
router.post("/coinNet", postCapital);
router.put("/coinNet/:id", putCapital);
router.delete("/coinNet/:id", deleteCapital);

export default router;
