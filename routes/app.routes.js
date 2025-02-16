import { Router } from "express";
import {
  createPoll,
  getAllPolls,
  votePoll,
} from "../controllers/app.controller.js";

const router = Router();

router.post("/polls", createPoll);
router.post("/polls/:id/vote", votePoll);
router.get("/polls", getAllPolls);

export default router;
