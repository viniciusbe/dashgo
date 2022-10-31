import { Flex, Button, Stack } from "@chakra-ui/react";
import { FieldPath, SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail is required")
    .email("Enter a valid e-mail"),
  password: yup.string().min(6, "Password must have at least 6 characters"),
});

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { isSubmitting, errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (formData) => {
    console.log(formData);
  };

  const composeInputProps = (name: FieldPath<SignInFormData>) => ({
    ...register(name),
    name,
    error: errors[name],
  });

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input {...composeInputProps("email")} type="text" label="E-mail" />
          <Input
            {...composeInputProps("password")}
            type="password"
            label="Password"
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}
