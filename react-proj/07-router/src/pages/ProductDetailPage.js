import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("Loading...");
  const { id } = useParams();
  console.log(id);
  // 현재: product/:id
  //   params => { id: value}

  //  1 . 자주 사용하는 것 : setQuery
  //~~~?id=2&name=jordy 형식으로 되어있는 쿼리를 가져오고 싶을땐?
  const [query, setQuery] = useSearchParams();
  console.log(query); // 출력: URLSearchParams {size: 1}
  console.log(query.get("name")); // 출력 : jordy

  //  2. 자주 사용하는 것 : useNavigate()
  //   Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성해야할 때 사용한다.
  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      // 오류가 날 수도 있는 코드를 try 안에 넣는다.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        throw Error("존재하지 않는 상품입니다.");
      }

      //   const res = await axios(
      //     `https://jsonplaceholder.typicode.com/posts/${id}`
      //   );

      //   const prod = res.data
      //   setProduct(prod);
    } catch (error) {
      console.log(error);
      setError(error.message);
      // try 안에서 오류가 발생하면 catch로 이동함.
    }
    // navigator(-1);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>여기는 상품 상세 페이지다니니!</div>
      {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고 이동한다. */}
      <button onClick={() => navigator(-1)}>
        useNavigate 테스트(전페이지로 이동)
      </button>
      <button onClick={() => navigator("/")}>useNavigate 테스트(홈이동)</button>

      <button onClick={() => setQuery({ name: "jordy" })}>
        setQuery 테스트
      </button>
      {product ? (
        <ul>
          <li>번호 : {product.id}</li>
          <li>상품명 : {product.title}</li>
        </ul>
      ) : (
        <div>Loading중이다니니!</div>
      )}
    </>
  );
  //   나중에 이 onClick에 백엔드와 연결해서 사용하면됨!
}
