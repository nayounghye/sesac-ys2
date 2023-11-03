const express = require('express');
const user = require('../controller/Cuser');
const router = express.Router();

router.get('/', user.index); // index 를 렌더

router.get('/signup', user.signup); // 회원가입 페이지를 렌더
router.post('/signup', user.post_signup); // 회원가입 버튼 클릭 시 post 요청을 이용해 ()안에 있는 api를 가져옴,

router.get('/signin', user.signin); // 로그인 페이지를 렌더
router.post('/signin', user.post_signin); // 로그인 버튼 클릭 시 post 저노

router.post('/profile', user.profile); // 프로필 페이지를 렌더 (임시로 일반 post 폼 전송을 사용, 아직 우리는 로그인을 유지시키는 기술을 안배움.)
router.patch('/profile/edit/:id', user.profile_edit); // 회원정보 수정 버튼 클릭 시 patch요청을 이용해 ()안에 있는 api 가져옴.
router.delete('/profile/delete/:id', user.profile_delete); // 회원 탈퇴 버튼 클릭 시

module.exports = router;
