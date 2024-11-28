const express = require("express");
const router = express.Router();
const buyController = require("../controllers/BuyController");
const { authenticate } = require("../middlewares/authenticate");

router.get("/", authenticate, buyController.getPurchasesByUserID);
router.put("/", authenticate, buyController.createNewPurchaseOrder);
router.get("/:id", authenticate, buyController.getPurchaseByPurchaseID);
router.post("/:id", authenticate, buyController.createNewPurchaseOrder);
router.put("/buyPages", authenticate, buyController.AddPages);

module.exports = router;
