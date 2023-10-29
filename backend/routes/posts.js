const express = require("express");
const router = express.Router();
const postQueries = require("../db/queries/posts");

//express route for getting all posts for a community
router.get("/:CommunityId", (req, res) => {
  const CommunityId = req.params.CommunityId;
  postQueries
    .getPosts(parseInt(CommunityId))
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//express route for getting all posts for a community
router.get("/:CommunityId/:post_id", (req, res) => {
  const CommunityId = req.params.CommunityId;
  const post_id = req.params.post_id;
  postQueries
    .getComments(parseInt(CommunityId), parseInt(post_id))
    .then((results) => {
      res.json(results.rows);
      console.log("results from route", results.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
