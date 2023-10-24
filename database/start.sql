

use sesac_test

-- 데이터 베이스를 생성하는 명령어
CREATE DATABASE sesac_test DEFAULT CHRACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode

-- 테이블을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

--만들어진 테이블에
-- 컬럼을 추가하는 명령어
alter table user add gender enum('여자','남자');

-- 컬럼을 삭제하는 명령어
alter table user drop column;

-- 컬럼의 속성을 수정하는 명령어
alter table user modify gender varchar(2) not null;

-- 테이블을 삭제하는 명령어
drop table user;


-- insert문
insert into user (id, password) values ('jordy','1234');
-- 필드를 명시하지 않는 경우 테이블의 모든 컬럼에 값을 순서대로 추가해야 함
insert into user values ('nardy', '1234', 31, '여자');
 
-- select 문 (데이터 조회)
-- select [속성...] from [테이블이름] where [조건]alter
-- 아래 명령어는 'user라는 테이블의 모든 값을 조회하겠다.'라는 뜻이다.
select * from user;
-- user 테이블의 id 속성을 모두 조회
select id,  password from user;