
-- 수업16_실습3_create문

create table practice(
    id VARCHAR(10) not null primary key,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM( 'F', 'M', '' ) default '',
    birthday DATE not null,
    age int(3) not null default 0
)

-- 수업16_실습4_insert문

insert into practice values ('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', 33);
insert into practice values ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into practice values ('power70', 'qxurgsda', '변사또', 'M', '1970-05-02', 53);
insert into practice values ('hanyo', '1k48fn4', '한조', 'M', '1984-10-18', 39);
insert into practice values ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
insert into practice values ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into practice values ('jungkrat', '41fhaf', '정크랫','M', '1999-11-11', 24);


-- 수업16_실습5_select문
--1. 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
select * from practice order by birthday ASC;
--2. 회원 목쪽 중 gender 컬럼의 값이 'm'인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
select * from practice where gender like 'm' order by name DESC;
--3. 1990 년대에 태어난 회원의 1d, name 컬럼을 가져와 목록으로 보여주시오.
select id, name from practice where birthday like '1990%';
--4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
select * from practice where birthday like '%6___' order by birthday ASC;
--5. gender 컬럼의 값이 'm' 이고, 1970년대에 태어난 회원의 목록을 가져오시오.
select * from practice where gender like 'm' AND birthday = '1980%';
--6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.

--7. 모든 회원 목쪽 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오.
--8. 1d 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
--9. 1d 컬럼의 값이 Jungkrat인 레코드를 삭제하시오.

