const express = require("express");
const router = express.Router();

// to get all the data
router.get("/", (req, res) => {
  req.conn.query("SELECT * FROM todo", (error, result) => {
    if (error) {
      res.status(500).send("Cannot fetch the data");
    }
    res.json(result.rows);
  });
});

// to get data of specific id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  req.conn.query("select * from todo where id=$1", [id], (error, result) => {
    if (error) {
      res.status(500).send("Cannot fetch the data");
    }
    res.json(result.rows);
  });
});

// to insert the data
router.post("/", (req, res) => {
  const task = req.body.task;
  const id = req.body.id;
  req.conn.query(
    "insert into todo (id,task) values ($1,$2)",
    [id, task],
    (error, result) => {
      if (error) {
        res.status(500).send("Cannot add the value");
      }
      res.send(task + " is added succesfully");
    }
  );
});

// to delete tha data
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  req.conn.query("delete from todo where id=$1", [id], (error, result) => {
    if (error) {
      res.status(500).send("Cannot delete the value");
    }
    res.send("Id " + id + " data is successfully deleted.");
  });
});

// to update the value
router.put("/:id", (req, res) => {
  const id = req.body.id;
  const task = req.body.task;
  req.conn.query(
    "update todo set task=$1 where id=$2",
    [task, id],
    (error, result) => {
      if (error) {
        res.status(500).send("Cannot update the value");
      }
      res.send("Id " + id + " data is successfully updated.");
    }
  );
});
module.exports = router;
