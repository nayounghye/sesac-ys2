import { useForm } from "react-hook-form";

export default function Prac2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>React hook form 실습</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        이름 :{" "}
        <input
          type="text"
          {...register("name", { required: " 이름은 필수 항목입니다." })}
        />
        {errors.name?.message}
        <br />
        <br />
        나이 :{" "}
        <input
          type="text"
          {...register("age", {
            required: " 나이는 필수 항목입니다.",
            valueAsNumber: true,
            // 방법1. validate 를 사용해 유효성 검사하는 방법
            validate: (value) => !isNaN(value) && parseFloat(value) >= 0,
          })}
          // 방법2. min 을 사용해 유효성 검사하는 방법
          // {...register("age", {
          //     min: {
          //       value: 0,
          //       message: "0이상의 숫자만 입력 가능합니다.",
          //     }}
        />
        {errors.age &&
          (errors.age.message || " 0 이상의 숫자만 입력 가능합니다.")}
        <br />
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
