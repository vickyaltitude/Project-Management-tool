import { Router } from "express";
import { getTeams } from "../controllers/teams.controller";

const router = Router();

router.get("/", getTeams);

export default router;
