import { Button, FormProvider, Input } from "@arkyn/components";
import { Lock, Mail } from "lucide-react";
import { Link, useFetcher } from "react-router";

import { useTranslate } from "~/client/hooks/useTranslate";
import { FormContainer, PageContainer } from "./styles";

function SignInPage() {
  const { Form, state, data } = useFetcher();
  const translate = useTranslate("signIn");

  return (
    <PageContainer>
      <div className="headerContainer">
        <strong>{translate.title}</strong>
        <p>{translate.description}</p>
      </div>

      <FormProvider
        fieldErrors={data?.fieldErrors}
        form={<Form method="POST" />}
      >
        <FormContainer>
          <Input
            showAsterisk
            name="email"
            type="text"
            label={translate.emailInputLabel}
            placeholder={translate.emailInputPlaceholder}
            leftIcon={Mail}
          />

          <Input
            showAsterisk
            name="password"
            type="password"
            label={translate.passwordInputLabel}
            placeholder={translate.passwordInputPlaceholder}
            leftIcon={Lock}
          />

          <Link className="forgotPasswordLink" to="/forgot-password">
            {translate.forgotPassword}
          </Link>

          <Button
            name="_action"
            value="authAdmin"
            isLoading={state === "submitting"}
          >
            {translate.formButton}
          </Button>

          <strong className="formErrorMessage">{data?.message}</strong>
        </FormContainer>
      </FormProvider>
    </PageContainer>
  );
}

export { SignInPage };
