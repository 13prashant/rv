const express = require('express')

const { getWheels } = require('../controllers/wheels')

const router = require('express').Router()

router.route('/')
    .get(getWheels)

module.exports = router