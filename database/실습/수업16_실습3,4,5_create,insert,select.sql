
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

--3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
select id, name from practice where birthday like '1990%';

--4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
select * from practice where birthday like '%6___' order by birthday ASC;

--5. gender 컬럼의 값이 'm' 이고, 1970년대에 태어난 회원의 목록을 가져오시오.
select * from practice where gender like 'm' AND birthday like '1970%';
g
--6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
select * from practice order by age DESC limit 3;

--7. 모든 회원 목쪽 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오.
select * from practice where age between 25 and 50;

--8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
update practice set pw = '12345678' where id = 'hong1234';

select id, pw from practice where id = 'hong1234'; -- 로 조회해보면 변경한 걸 알 수 있음. 

-- 삽질의 흔적
-- insert into practice (password) values ('12345678');
-- alter table practice (pw) modify id = 'hong1234' 12345678;
-- select * from practice where id = 'hong1234', ....????

--9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오.
delete from practice where id = 'jungkrat';

