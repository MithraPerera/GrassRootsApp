/*
 * All routes for Communities Data are defined here
 * Since this file is loaded in server.js into /communities,
 *   these routes are mounted onto /communities
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const communitiesQueries = require("../db/queries/communities");

/* CREATE */

router.post("/", (req, res) => {
  const { name, description, location, cause, creation_date, picture_url } = req.body.params;

  communitiesQueries
    .addNewCommunity(
      name,
      description,
      location,
      cause,
      creation_date,
      picture_url
    )
    .then((data) => {
      return res.json(data);
    })
    .catch((e) => {
      console.log("Error: ", e);
      return res.status(500).send("Error adding new community");
    });
});

/* READ */

// Return all communities with a given name
router.get("/", (req, res) => {
  const { name } = req.query;
  communitiesQueries
    .getAllCommunitiesWithName(name)
    .then((communities) => {
      res.json({ communities });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Return all communities with a id
router.get("/community/:id", (req, res) => {
  const { id } = req.params;
  communitiesQueries
    .getCommunityById(id)
    .then((communities) => {
      res.json(communities);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Return all communities of a certain type
router.get("/:cause_id", (req, res) => {
  const cause = req.params.cause_id;

  if (cause == 0) {
    communitiesQueries
      .getAllCommunities()
      .then((communities) => {
        res.json({ communities });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    communitiesQueries
      .getAllCauseCommunities(cause)
      .then((communities) => {
        res.json({ communities });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
});

/* UPDATE */

// Update the name of the community
router.put("/name", (req, res) => {
  const id = parseInt(req.body.id);
  const newName = req.body.name;

  communitiesQueries
    .updateCommunityName(id, newName)
    .then((data) => {
      // console.log("data params: ", data);
      return res.json({ data });
    })
    .catch((e) => {
      console.log("Error: ", e);
      return res.status(500).send("Error adding new community");
    });
});

/* DELETE */

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  communitiesQueries
    .deleteCommunityById(id)
    .then((communities) => {
      res.json({ communities });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
