import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onVaild = (data) => {
    console.log("성공", data);
  };

  const onInvaild = (err) => {
    console.log("실패", err);
  };

  const genderRegister = register("gender", {
    required: "성별을 꼭 체크해야한다니니!",
  });

  console.log(watch("ID"));

  return (
    <>
      <h4>React hook form 테스트</h4>
      {/* handleSubmit(onVaild [,onInvaild] ) */}
      {/* onVaild : 폼을 정상적으로 제출할 수 있는 상태일 때, 실행시킬 함수이다. */}
      {/* onInvaild : (선택값) 폼을 제출할 수 없을 때 실행시킬 함수이다. */}
      <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        ID :{" "}
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", { required: "아이디는 꼭 적어야한다니니!" })}
        />
        {errors.ID?.message}
        <br />
        {/* register("ID") => {name : id} */}
        이름 :{" "}
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 꼭 적어야한다니니!",
            minLength: {
              value: 2, // 최소값 지정
              message: "이름은 두 글자 이상 입력해야한다니니!", // 최소값을 만족하지 못했을 때 보여줄 메시지
            },
          })}
        />
        {errors.username?.message}
        <br />
        이메일 :{" "}
        <input
          type="text"
          placeholder="이메일"
          {...register("usermail", {
            required: "이메일은 꼭 적어야한다니니!",
            // pattern: {
            //   value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
            //   message: "이메일 형식으로 적어야한다니니!", // 최소값을 만족하지 못했을 때 보여줄 메시지
            // },
            // 💡 만약 특정 메일(지메일)만 넣을 수 있게 하고싶다면?
            validate: (v) =>
              v.includes("gmail.com") || "지메일만 사용가능하다니니!",
          })}
        />
        {errors.usermail?.message}
        {/* ?는 존재했을 땐 머머하고 존재안할 땐 머머한다~ 머 그런 의미이다. */}
        <br />
        성별 :
        <label htmlFor="gender-men">
          {" "}
          남{" "}
          <input type="radio" value="남" id="gender-men" {...genderRegister} />
        </label>
        <label htmlFor="gender-women">
          여{" "}
          <input
            type="radio"
            id="gender-women"
            value="여"
            {...genderRegister}
          />{" "}
        </label>
        {errors.gender?.message}
        <br />
        <select
          {...register("color", { required: "필수로 선택해야한다니니!" })}
        >
          <option value=""> 옵션 </option>
          <option value="option-1"> 빨강 </option>
          <option value="option-2"> 노랑 </option>
          <option value="option-3"> 초록 </option>
          <option value="option-4"> 파랑 </option>
        </select>
        {errors.color?.message}
        <br />
        <button type="submit">회원가입이다니니</button>
      </form>
    </>
  );
}
