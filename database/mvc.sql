-- 사람별로 구매한 상품의 개수를 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회 (cunstic가 bunny인 사람)
select custid, sum(amount) as 'total_amount' from orders where custid != 'bunny' group by custid having sum(amount) >= 5;

-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_price' from orders group by custid having sum(amount) >= 5;

-- customer 테이블의 custid와 order 테이블의 custid가 동일한 경우 그 값을 출력해줌.
select * from customer inner join orders on customer.custid = orders.custid;
-- 위 명령어에서 주문별로 배송지를 보기 위해 수정하면 아래같이 됨! // customer, order를 inner join처리한 것!
select customer.addr,orders.* from customer inner join orders on customer.custid = orders.custid;
select id, name from practice where birthday like '1990%';
select * from customer;
select * from practice where birthday like '%6___' order by birthday ASC;

select * from practice where gender like 'm', '1980%';


select * from practice where gender like 'm' AND '1980%';
select * from practice where gender like 'm' AND '1980%';
select * from practice where gender like 'm' AND birthday like '1970%';
select * from practice order by age DESC limit 3;
select * from practice where age between 25 and 50;
alter table practice (pw) modify id = 'hong1234' 12345678;
update practice set pw = '12345678' where id = 'hong1234';
select id, pw from practice where id = 'hong1234';
delete from practice where id = 'jungkrat';
select * from practice where id;

use sesac_test;
create table visitor(
id int not null primary key auto_increment,
username varchar(10) not null,
comment mediumtext
);

insert into visitor (username, comment) values ('죠르디', '죠하!');
insert into visitor (username, comment) values ('앙몬드', '앙하!');

select * from visitor;

-- MySQL 사용자 추가하기
-- @ : 전체 호스트가 접근 가능하다. (localhost 로 적으면, 로컬호스트만 접근 가능)
CREATE USER 'user'@'%' IDENTIFIED BY 'qwe123!@#';

-- mysql 에 만들어진 계정을 조회하는 명령어
select host, user from mysql.user;

-- 위에 만든 user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
-- *.*은 전체 폴더를 접근
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- Mysql 비번 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql native password BY 'awa':