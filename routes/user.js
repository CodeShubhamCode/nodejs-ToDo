import experss from "express";
import { User } from "../models/user.js";
import { getMyProfile, login, logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const router = experss.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/me",isAuthenticated,getMyProfile);



export default router;
