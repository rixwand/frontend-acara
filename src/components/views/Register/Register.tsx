import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import cn from "@/utils/cn";

interface PropsType {}
const Register = ({}: PropsType) => {
  const {
    handleVisiblePassword,
    visiblePassword,
    control,
    errors,
    handleRegister,
    handleSubmit,
    isPendingRegister,
  } = useRegister();
  return (
    <div className="flex w-full items-center justify-center flex-col gap-10 lg:flex-row lg:gap-20">
      <div className="flex flex-col w-full lg:w-1/3 justify-center items-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="acara logo svg"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          className="lg:w-full w-2/3"
          alt="acara login logo svg"
          width={1024}
          height={1024}
        />
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl text-danger-500 font-bold">Create Account</h2>
          <p className="text-sm mb-4">
            Have an account?&nbsp;
            <Link href="/auth/login" className="text-danger-400 font-semibold">
              Login here
            </Link>
          </p>
          {errors.root && (
            <p className="mb-2 text-sm text-danger">{errors.root?.message}</p>
          )}
          <form
            action=""
            className={cn(
              "flex flex-col w-80",
              Object.keys(errors).length > 0 ? "gap-y-2" : "gap-y-4"
            )}
            onSubmit={handleSubmit(handleRegister)}>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Fullname"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.fullName != undefined}
                  errorMessage={errors.fullName?.message}
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Username"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.username != undefined}
                  errorMessage={errors.username?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  label="Email"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.email != undefined}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.password ? "text" : "password"}
                  label="Password"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.password != undefined}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword("password")}>
                      {visiblePassword.password ? (
                        <FaEye className="text-xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={
                    visiblePassword.passwordConfirmation ? "text" : "password"
                  }
                  label="Confirmation Password"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.confirmPassword != undefined}
                  errorMessage={errors.confirmPassword?.message}
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={() =>
                        handleVisiblePassword("passwordConfirmation")
                      }>
                      {visiblePassword.passwordConfirmation ? (
                        <FaEye className="text-xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
              )}
            />
            <Button color="danger" type="submit" size="lg">
              {isPendingRegister ? (
                <Spinner color="white" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
