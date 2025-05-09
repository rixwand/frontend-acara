import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useRegister from "./useRegister";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

interface PropsType {}
const Register = ({}: PropsType) => {
  const { handleVisiblePassword, visiblePassword } = useRegister();
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
            <Link href="#" className="text-danger-400 font-semibold">
              Login here
            </Link>
          </p>
          <form action="" className="flex flex-col w-80 gap-y-4">
            <Input
              type="text"
              label="Fullname"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              type="text"
              label="Username"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              type="email"
              label="Email"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              type={visiblePassword.password ? "text" : "password"}
              label="Password"
              variant="bordered"
              autoComplete="off"
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
            <Input
              type={visiblePassword.passwordConfirmation ? "text" : "password"}
              label="Confirmation Password"
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("passwordConfirmation")}>
                  {visiblePassword.passwordConfirmation ? (
                    <FaEye className="text-xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            <Button color="danger" type="submit" size="lg">
              Register
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
