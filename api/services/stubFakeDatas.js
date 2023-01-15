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

    getExerciseById(exerciseId) {
        return {
            "id": exerciseId,
            "id_muscle": 1,
            "id_user": 1,
            "name": "Développé Couché de fou malade",
            "description": "",
            "image_url": ""
        }
    }

    getUserExercises(userId) {
        return {
            0: {
                "id": 1,
                "id_muscle": 1,
                "id_user": 1,
                "name": "Développé Couché de fou malade",
                "description": "",
                "image_url": ""
            },
            1: {
                "id": 2,
                "id_muscle": 2,
                "id_user": userId,
                "name": "Développé Incliné du seigneur",
                "description": "",
                "image_url": ""
            },
            2: {
                "id": 1,
                "id_muscle": 3,
                "id_user": userId,
                "name": "Curl du seigneur",
                "description": "",
                "image_url": ""
            },
            3: {
                "id": 1,
                "id_muscle": 2,
                "id_user": 1,
                "name": "Tirage vertical du seigneur",
                "description": "",
                "image_url": ""
            },
        }
    }
    
    getAllGroupSeance(userId) {
        return {
            0: {
                "id": 1,
                "id_user": 1,
                "name": "Avant-Bras",
                "Description": "",
            },
            1: {
                "id": 2,
                "id_user": userId,
                "name": "Biceps",
                "Description": "",
            },
            2: {
                "id": 3,
                "id_user": 1,
                "name": "Triceps",
                "Description": "",
            },
            3: {
                "id": 4,
                "id_user": 1,
                "name": "Pecs",
                "Description": "",
            },
        }
    }

    getSeanceById(id) {
        return {
            "id": id,
            "user_id": 2,
            "group_id": 2,
            "name": "Push",
            "notes": ""
        }
    }

    getUserSeances(userId) {
        return {
            0: {
                "id": 1,
                "user_id": userId,
                "group_id": 2,
                "name": "Push du lundi",
                "notes": ""
            },
            1: {
                "id": 4,
                "user_id": userId,
                "group_id": 3,
                "name": "Pull du mardi",
                "notes": ""
            },
            2: {
                "id": 12,
                "user_id": userId,
                "group_id": 3,
                "name": "Legs du mercredi",
                "notes": ""
            }
        }
    }
}