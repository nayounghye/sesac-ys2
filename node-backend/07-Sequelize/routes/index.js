const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 임시 라우터
router.get('visitor/test/:id', controller.getTest);

// ---------------------- 방명록 관련 ----------------------
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

// ---------------------- 회원가입 페이지 관련 ----------------------

// ~~~~~:8000/index -> index2.ejs render
router.get('/index', controller.index2);

// 회원가입 페이지를 렌더
router.get('/signup', controller.signup);

// 회원가입 버튼 클릭 시 post 요청을 이용해 ()안에 있는 api를 가져옴
router.post('/signup', controller.post_signup);

// 로그인 페이지를 렌더
router.get('/signin', controller.signin);

// 로그인 버튼 클릭 시 post 전송
router.post('/signin', controller.post_signin);

// 프로필 페이지를 렌더 (임시로 일반 post 폼 전송을 사용, 아직 우리는 로그인을 유지시키는 기술을 안배움.)
router.post('/profile', controller.profile);

// 회원정보 수정 버튼 클릭 시 patch요청을 이용해 ()안에 있는 api 가져옴.
router.patch('/profile/edit/:id', controller.profile_edit);

// 회원 탈퇴 버튼 클릭 시
router.delete('/profile/delete/:id', controller.profile_delete);

module.exports = router;
