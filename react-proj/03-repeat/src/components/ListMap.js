import { useState } from "react";

function ListMap() {
  const productList = [
    { id: 1, product: "가방" },
    { id: 2, product: "신발" },
    { id: 3, product: "패딩" },
    { id: 4, product: "목도리" },
    { id: 5, product: "장갑" },
  ];
  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState("");

  const addProduct = () => {
    // list와 추가할 객체를 합쳐줘야 한다.
    // 원래라며 새로운 상품을 백엔드에서 insert하고 생긴 고유 pk값을 가져와 id에 담으면 되나, 여기선 백에 연결한게 아니므로 list.length로 하드코딩함.
    const newObj = { id: list[list.label - 1].id + 1, product: newProduct };
    // const newList = [...list, newObj];
    //18번줄을 아래처럼 메소드를 사용해서 쓸 수도 있음. 둘이 같은 내용.
    const newList = list.concat(newObj);
    setList(newList);
    setNewProduct("");
  };

  const deleteProduct = (id) => {
    // list에서 더블클릭한 상품을 삭제해야 함.
    // filter 메소드는 앞에 있는 배열에 대해서 반복한다.
    // filter 메소드의 return값은 조건이 되어야 한다.
    // 조건에 true일 경우 해당 원소는 새로운 배열에 포함되고, false인 경우는 새로운 배열에 포함하지 않는다.
    const newList = list.filter((value) => value.id != id);
    // rendering할 때 list배열을 이용한다. -> list 배열에서 원하는 원소를 삭제해야 한다.
    // 삭제 후  삭제된 버전의 배열을 다시 setList를 이용하여 list상태를 변경한다.
    setList(newList);
  };

  //   map은 앞에 있는 배열에 대해서 반복을 하면서, map의 인자로 넘어가는 callback함수의 return값을 이용해 새로운 배열을 생성한다.
  //   배열값 : [li>jordy</li>], [li>scapy</li>], [li>angmond</li>]
  return (
    <>
      {/* map은 JS문법이므로 {}안에 적어야한다. */}
      {/*배열을 그냥 불러오면 하나의 문자열처럼 좌르륵 출력된다. 출력: jordyskapyangmond but, 배열 안에 객체로 있으면 오류 발생*/}
      <label>추가할 상품 : </label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
      />
      <button onClick={addProduct}>추가</button>
      <ul>
        {list.map((value) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={value.id}
              onDoubleClick={() => {
                deleteProduct(value.id);
              }}
            >
              {value.product}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListMap;
