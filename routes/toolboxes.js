const express = require('express')

const { getToolboxes } = require('../controllers/toolboxes')

const router = require('express').Router()

router.route('/')
    .get(getToolboxes)

module.exports = router