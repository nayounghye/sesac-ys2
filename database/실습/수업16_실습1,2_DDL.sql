
-- 수업16_실습1_DDL.sql

create table member(
	id varchar(20) primary key not null,
    name varchar(5) not null,
    age int unsigned,
    gender varchar(2) not null,
    email varchar(50) 
    promotion varchar(2) DEFAULT 'x'
);

-- 수업16_실습2_DDL.sql (id 컬럼: 값형식 변경, age 컬럼: 삭제, interest컬럼: 추가)

alter table member modify id varchar(10);
alter table member drop column age;
alter table member add interest varchar(100);