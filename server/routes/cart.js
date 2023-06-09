const express = require("express");
const router = express.Router();
const {
  getCart,
  getCartItems,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = require("../controllers/cart");

// GET /cart/:cart_id/items
router.get("/items", getCartItems);

// POST /cart/:cart_id/items
router.post("/items/add", addItem);

// DELETE /cart/:cart_id/items
// router.delete("/items/delete/:product_id", deleteItem);

// PUT /cart/:cart_id/items/increase
router.put("/:cart_id/items/increase", increaseItemQuantity);

// PUT /cart/:cart_id/items/decrease
router.put("/:cart_id/items/decrease", decreaseItemQuantity);

module.exports = router;