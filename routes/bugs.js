import express from "express";
const router = express.Router();

let bugs = [];

// Get all bugs
router.get("/", (req, res) => {
  res.json(bugs);
});

// Create a bug
router.post("/", (req, res) => {
  const bug = {
    id: Date.now(),
    title: req.body.title
  };
  bugs.push(bug);
  res.status(201).json(bug);
});

// Delete a bug
router.delete("/:id", (req, res) => {
  bugs = bugs.filter((b) => b.id != req.params.id);
  res.json({ success: true });
});

export default router;
