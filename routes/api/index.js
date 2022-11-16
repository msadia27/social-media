const router = require("express").Router();
const userRoutes = require("./users-route");
const thoughtRoutes = require("./thoughts-route");

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;
