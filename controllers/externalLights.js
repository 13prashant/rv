const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const ExternalLight = require('../models/ExternalLight')

// @desc        Get all external lights
// @route       GET /api/v1/options/external-lights
// @access      Public
exports.getExternalLights = asyncHandler(async (req, res, next) => {
    const externalLights = await ExternalLight.find()

    res.status(200).json({ success: true, count: externalLights.length, data: externalLights })
})