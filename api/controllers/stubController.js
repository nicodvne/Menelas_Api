'use strict';

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

    getMuscleById(req, res) {
        let muscleId = req.body.muscleId;
        if (!muscleId || !(typeof muscleId == 'number') || muscleId <= 0) {
            return res.status(500).json({"message": "c'est pété mon reuf"});
        }
        
        return res.status(200).json(fakeDatas.getMuscleById(muscleId))
    }
}
