const express = require('express');
const LikeService = require('../services/likes.service');

const router = express.Router();

router.get('/:userId', LikeService.getUserLikes);
router.put('/:userId/:vacId', LikeService.userLike);
router.delete('/:userId/:vacId', LikeService.userUnlike);

module.exports = router;