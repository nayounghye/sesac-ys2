

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

