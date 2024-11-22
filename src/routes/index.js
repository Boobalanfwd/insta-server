import express from "express";
import postsRouter from "./posts.js";

const router = express.Router({
  mergeParams: true,
});

router.use("/api/posts", postsRouter);

export default router;
