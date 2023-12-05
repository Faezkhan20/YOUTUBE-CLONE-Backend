import { Router } from "express";
import { Login } from "../Controllers/Authcontroller.js";

const router=Router()

router.post("/login",Login)

export default router