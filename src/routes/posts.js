import express from "express";
import multer from "multer";
import path from "path";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/posts.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const originalName = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );
    cb(null, originalName + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getAll);
router.post("/", upload.single("image"), create);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
