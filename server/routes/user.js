const router = require("express").Router();
const user = require("../controller/user");
const verifyJwt = require("../middleware/verifyJwt");

router.route("/createNewUser").post(user.newUser)

router.route("/get-user-info").get(verifyJwt, user.getUserInfo);

router.route("/social-auth").post(user.socialAuth);

router.route("/refresh").get(user.refresh);

router.route("/set-user-image").put(verifyJwt, user.updateProfilePicture);

router.route("/logout").post(verifyJwt, user.logout);

module.exports = router;