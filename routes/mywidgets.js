const express = require("express");
// Create variable for database model
const Saved = require("../models/widget");
// Instantiate a router (mini app that only handles routes)
const router = express.Router();

// GET HTTP request - get and show all widgets
router.get("/Widgets", (req, res) => {
  console.log("Server-side GET Route hit");
  Saved.find()
    .then((widgets) => {
      return widgets.map((widget) => widget.toObject());
    })
    .then((widget) => res.status(200).json({ widget: widget }))
    .catch((err) => {
      console.log("Failed to get: ", err);
    });
});

// PATCH HTTP request - edit selected widget
router.patch("/Widgets/:id", (req, res) => {
  console.log("Server-side PATCH Route hit");
  console.log("Req.body: ", req.body);
  Saved.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name: req.body.info.name,
        type: req.body.info.type,
        quantity: req.body.info.quantity,
        cost: req.body.info.cost,
        manufacturer: req.body.info.manufacturer,
        madeAt: req.body.info.madeAt,
        notes: req.body.info.notes
      },
    }
  )
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log("Failed to edit: ", err);
    });
});

// DELETE HTTP request - delete selected widget
router.delete("/Widgets/:id", (req, res) => {
  console.log("Server-side DELETE Route hit");
  console.log("Req.body: ", req.body);
  Saved.findOneAndDelete({
    _id: req.params.id,
  })
    .then((deletedWidget) => {
      res.json({ message: "Deleted Widget", deletedWidget });
    })
    .catch((err) => {
      console.log("Failed to delete: ", err);
    });
});

// POST HTTP request - add new widget
router.post("/Widgets", (req, res) => {
  console.log("Server-side POST Route hit");
  console.log("Req.body: ", req.body);
  Saved.create({
    name: req.body.info.name,
    type: req.body.info.type,
    quantity: req.body.info.quantity,
    cost: req.body.info.cost,
    manufacturer: req.body.info.manufacturer,
    madeAt: req.body.info.madeAt,
    notes: req.body.info.notes,
  })
    .then((addedWidget) => {
      console.log("Added :", addedWidget);
      res.json({ message: "Widget Added", addedWidget });
    })
    .catch((err) => {
      console.log("Failed to add widget: ", err);
    });
});

module.exports = router;
