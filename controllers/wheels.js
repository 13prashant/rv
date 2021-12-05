const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const Wheel = require('../models/Wheel')

// @desc        Get all wheels
// @route       GET /api/v1/options/wheels
// @access      Public
exports.getWheels = asyncHandler(async (req, res, next) => {
    const wheels = await Wheel.find()

    res.status(200).json({ success: true, count: wheels.length, data: wheels })
})