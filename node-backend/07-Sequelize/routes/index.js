const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 임시 라우터
router.get('visitor/test/:id', controller.getTest);

// ~~~~~:8000 -> index.ejs render
router.get('/', controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get('/visitors', controller.visitor);

// 방명록 등록
router.post('/visitor', controller.postVisitor);

// 방명록 수정
router.patch('/visitor', controller.patchVisitor);

// 방명록 하나 조회
// 고유값인 id (userid아님 주의!)을 갖고 조회하기로 결정!
router.get('/visitor/:id', controller.getVisitorById);

// 방명록 삭제
router.delete('/visitor/:id', controller.deleteVisitor);

module.exports = router;
