const express = require('express')

const { getWaterTanks } = require('../controllers/waterTanks')

const router = require('express').Router()

router.route('/')
    .get(getWaterTanks)

module.exports = router