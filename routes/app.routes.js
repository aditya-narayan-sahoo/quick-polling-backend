import { Router } from "express";
import {
  createPoll,
  deletePoll,
  getAllPolls,
  getPoll,
  votePoll,
} from "../controllers/app.controller.js";

const router = Router();

router.post("/polls", createPoll);
router.post("/polls/:id/vote", votePoll);
router.get("/polls/:id", getPoll);
router.get("/polls", getAllPolls);
router.delete("/polls/:id", deletePoll);

export default router;
