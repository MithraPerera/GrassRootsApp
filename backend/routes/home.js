// Backend: Express Route
const express = require("express");
const router = express.Router();
const homeQueries = require("../db/queries/home");

// Express route for getting all events for a user
router.get("/events", (req, res) => {
  const user_id = req.query.user_id; // Access user_id from query parameters
  homeQueries
    .getEvents(user_id)
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
      console.log("user", user_id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/posts", (req, res) => {
  const user_id = req.query.user_id;
  homeQueries
    .getPosts(user_id)
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
      console.log("user", user_id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/communities", (req, res) => {
  const user_id = req.query.user_id;
  homeQueries
    .getCommunities(user_id)
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
      console.log("user", user_id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/AllPosts", (req, res) => {
  const user_id = req.query.user_id;
  homeQueries
    .getAllPosts(user_id)
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
      console.log("user", user_id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/comments/:post_id", (req, res) => {
  const post_id = req.params.post_id;
  homeQueries
    .getAllComments(parseInt(post_id))
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
