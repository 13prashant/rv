const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const WaterTank = require('../models/WaterTank')

// @desc        Get all water tanks
// @route       GET /api/v1/options/water-tanks
// @access      Public
exports.getWaterTanks = asyncHandler(async (req, res, next) => {
    const waterTanks = await WaterTank.find()

    res.status(200).json({ success: true, count: waterTanks.length, data: waterTanks })
})