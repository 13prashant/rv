const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const Toolbox = require('../models/Toolbox')

// @desc        Get all toolboxes
// @route       GET /api/v1/options/toolboxes
// @access      Public
exports.getToolboxes = asyncHandler(async (req, res, next) => {
    const toolboxes = await Toolbox.find()

    res.status(200).json({ success: true, count: toolboxes.length, data: toolboxes })
})