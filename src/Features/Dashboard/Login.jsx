import useTitle from "@/Hooks/useTitle";
import Loading from "@/UI/Loading";
import TextField from "@/UI/TextField";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useAuth, useAuthActions } from "src/Context/AuthContext";

const LoginPage = () => {
  const title = useTitle(" ورود به حساب کاربری | کافه رستوران میم");
  const router = useRouter()
  const dispatch = useAuthActions();
  const { loading , user} = useAuth();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const LoginHandler = async (data) => {
    dispatch({ type: "LOGIN", payload: data });
  };

    useEffect(() => {
      if(user) router.push("/dashboard/blogs")
   },[])
  return (
    <main className="w-full h-screen bg-gradient-to-t from-primary-500 to-primary-50">
      <section className="container h-screen flex-center">
        <div className="w-full max-w-2xl flex flex-col items-center bg-white rounded-xl p-5">
          <Image
            width={250}
            height={110}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL="/Logo/logo2.webp"
            src="/Logo/logo2.webp"
            className="object-cover mb-3"
          />
          <h2 className="text-xl mb-3"> ورود به حساب کاربری</h2>
          <form
            onSubmit={handleSubmit(LoginHandler)}
            className="w-full max-w-sm mb-4 space-y-9"
          >
            <TextField
              name="identifier"
              placeholder="لطفا نام کاربری خود را وارد نمایید"
              label=" نام کاربری "
              required
              register={register}
              validationSchema={{
                required: "لطفا نام کاربری خود را وارد نمایید",
                minLength: {
                  value: 6,
                  message: "حداقل ۶ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 30,
                  message: "حداکثر ۳۰ کاراکتر وارد نمایید",
                },
                pattern: {
                    value: /^[a-zA-Z0-9_-]{8,15}$/g,
                    message: "نام کاربری معتبر نمی باشد کاراکترهای (a-zA-Z0-9_-) مجاز می باشند",
                  },
              }}
              errors={errors}
            />
            <TextField
              name="password"
              type={isShowPassword ? "text" : "password"}
              placeholder="لطفا کلمه عبور خود را وارد نمایید"
              label="   کلمه عبور "
              required
              register={register}
              validationSchema={{
                required: "لطفا عبور خود را وارد نمایید",
                minLength: {
                  value: 8,
                  message: "حداقل ۸ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر ۲۰ کاراکتر وارد نمایید",
                },
                pattern: {
                  value:
                    /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
                  message:
                    "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد",
                },
              }}
              errors={errors}
            >
              <button
                type="button"
                className="absolute h-full left-2 top-0"
                onClick={() => setIsShowPassword((prev) => !prev)}
              >
                {isShowPassword ? (
                  <HiOutlineEyeOff className="size-5 stroke-slate-600" />
                ) : (
                  <HiOutlineEye className="size-5 stroke-slate-600" />
                )}
              </button>
            </TextField>
            {loading ? (
          <Loading />
        ) : (
          <div>
          <Button
            type="submit"
            color="primary"
            className="w-full hover:bg-secondary hover:opacity-100 py-6"
          >
            ورود به حساب کاربری
          </Button>
          </div>
        )}
          </form>
         
        </div>
      </section>
    </main>
  );
};

export default LoginPage;


