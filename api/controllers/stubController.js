'use strict';

const express = require('express');
const stubFakeDatas = require("../services/stubFakeDatas");
const fakeDatas = new stubFakeDatas();

module.exports = class StubController {
    constructor () {
    }

    homepageAction(_, res) {
        return res.status(200).json({"message": "stub api homepage"});
    }

    getAllMusclesAction(_, res) {
        return res.status(200).json(fakeDatas.getAllMuscles());
    }
}
