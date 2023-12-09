import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Prac1() {
  const [photo, setPhoto] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50; // 한 페이지당 표시할 아이템 수
  const [totalPages, setTotalPages] = useState(0);

  const getPhoto = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await res.json();
    setPhoto(photos);
    setTotalPages(Math.ceil(photos.length / itemsPerPage));
  };

  useEffect(() => {
    getPhoto();
  }, []);

  //   현재 페이지에 해당하는 데이터만 추출
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = photo.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지네이션을 위한 버튼 렌더링
  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <h1>Prac1</h1>
      <div className="container">
        {currentItems.map((value) => (
          <div key={value.id}>
            <img className="imgex" src={value.url}></img>
          </div>
        ))}
      </div>
      <div className="pagination">{renderPageNumbers()}</div>
    </>
  );
}
