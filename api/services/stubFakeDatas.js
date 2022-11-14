'use strict';
const express = require('express');

module.exports = class FakeDatas {
    constructor () {
    }

    // All muscles stub function
    getAllMuscles() {
        return {
                0: {
                    "id": 1,
                    "name": "Avant-Bras",
                    "Description": "",
                },
                1: {
                    "id": 2,
                    "name": "Biceps",
                    "Description": "",
                },
                2: {
                    "id": 3,
                    "name": "Triceps",
                    "Description": "",
                },
                3: {
                    "id": 4,
                    "name": "Pecs",
                    "Description": "",
                },
        }
    }

    getMuscleById(muscleId) {
        return {
            "id": muscleId,
            "name": "Pecs",
            "Description": ""
        }
    }

}