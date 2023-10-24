-- select 문 (데이터 조회)
-- select [속성...] from [테이블이름] where [조건]alter
-- 아래 명령어는 'user라는 테이블의 모든 값을 조회하겠다.'라는 뜻이다.
select * from user;
-- user 테이블의 id 속성을 모두 조회
select id,  password from user;

CREATE TABLE customer
( 
custid CHAR(10) NOT NULL PRIMARY KEY,
custname VARCHAR(10) NOT NULL, 
addr CHAR(10) NOT NULL, 
phone CHAR(11), 
birth DATE
); 

-- INT AUTO_INCREMENT 은 내가 1,2,3.. 으로 적지않아도 알아서 1++ 같은 개념 알아서 숫자를 증가시켜줌.
CREATE TABLE orders
( 
orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
custid CHAR(10) NOT NULL, 
prodname CHAR(6) NOT NULL, 
price INT NOT NULL, 
amount SMALLINT NOT NULL,
-- on delete cascade : 부모 테이블에서 값을 삭제하면 참조 테이블에서도 삭제하겠다는 명령어이다. 안그럼 부모에서 먼저 삭제, 뒤에 참조테이블로 돌아가 다시 삭제해야함.
FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade;

);

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01')

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

select * from orders;
select * from customer;
-- custid가 bunny인 회원을 찾는 명령어 
select * from customer where custid='bunny';

-- custid가 bunny인 회원이 아닌 모든 사람을 찾는 명령어 (아래꺼)
select * from customer where custid !='bunny';
select * from customer where not custid = 'bunny';

-- 2000-01-01 이후에 태어난 회원을 조회하는 명령어
select * from customer where birth >= '2000-01-01';

-- 2000-01-01 ~ 2005-01-01 사이에 태어난 회원을 조회하는 명령어
select * from customer where birth between '2000-01-01' and '2005-01-01';

-- addr 이 대한민국 서울, 미국 뉴욕 둘 중 하나라면 조회되는 명령어
select * from customer where addr in ('대한민국 서울','미국 뉴욕');

-- addr에 대한민국을 포함하고 있는 회원을 조회하는 명령어
select * from customer where addr like '%대한민국%';
-- custname 에 세글자 문자 중 마지막 글자가 수로 끝나는 회원을 조회하는 명령어
select * from customer where custname like '__수';
-- custname 에 마지막 글자가 수로 끝나는 회원을 조회하는 명령어
select * from customer where custname like '%수';
-- custname 에 마지막에서 두번째 글자가 해로 끝나는 회원을 조회하는 명령어
select * from customer where custname like '%해_';

-- custname이 null값인 회원을 조회하는 명령어
select * from customer where custname is null;

-- AND, OR, NOT --
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' OR birth <= '2000-05-05';

-- custname 을 기준으로 오름차순
select * from customer order by custname ASC;
-- addr에 대한민국을 포함하는 회원을 조회를 먼저 후 결과를 내림차순 정렬해야하므로, order by는 where과 함께 쓰려면, 반드시 where뒤에 써야한다.
select * from customer where addr like '%대한민국%' order by custname DESC;

-- addr에 대한민국을 포함하는 회원을 조회를 먼저 후 결과를 내림차순 정렬한 뒤 위에서 2명의 데이터만 가져와야하므로, 
-- where -> order by -> limit 순으로 써야한다.
select * from customer where addr like '%대한민국%' order by custname DESC limit 2;


-- update/delete 반드시 프라이머리키를 기준으로 선택 후 업뎃,삭제를 해야함.
UPDATE customer set custname = '강해란' where custid = 'bunny';

-- 지우려는 값이 외래값으로 설정되어 있으면 삭제가 안된다. -> 외래값이 참조하고 있는 테이블에서 먼저 해당 값을 삭제 후 다시 현 테이블로 돌아와서 삭제해야함.
DELETE from orders where custid = 'wow123';

-- < select문 심화 >
-- customer 테이블에 존재하는 addr의 종류를 알고 싶다.
select distinct addr from customer;

-- orders 테이블에 존재하는 주문 개수 
select count(*) as 'total_orders' from orders;

-- 사람별 주문 건수
-- select에서 group by를 쓸 때, group by뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력. (다른 prodname 등등의 속성은 출력 X)
select custid, count(*) as 'count' from orders group by custid;

-- 사람별로 구매한 상품의 개수
select * from orders;
select custid, sum(amount) as 'total_amount' from orders group by custid;

-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회하고 그중 custid != 'bunny'인 사람을 출력
select custid, sum(amount) as 'total_amount' from orders 
where custid != 'bunny' 
group by custid 
having sum(amount) >= 5;

-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_price' from orders group by custid;

-- customer, orders을 inner join > 주문별로 배송지를 알고 싶을땐? 아래같이 입력
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;

-- customer 테이블의 custid와 order 테이블의 custid가 동일한 경우 그 값을 출력해줌.
select * from customer inner join orders on customer.custid = orders.custid;
-- 위 명령어에서 주문별로 배송지를 보기 위해 수정하면 아래같이 됨! // customer, order를 inner join처리한 것!
select customer.addr,orders.* from customer inner join orders on customer.custid = orders.custid;