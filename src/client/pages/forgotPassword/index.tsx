import {
  Button,
  FormProvider,
  Input,
  useScopedParams,
} from "@arkyn/components";
import { Mail } from "lucide-react";
import { Link, useActionData, useLocation, useNavigation } from "react-router";

import { useTranslate } from "~/client/hooks/useTranslate";
import { FormContainer, NavigateContainer, PageContainer } from "./styles";

function ForgotPasswordPage() {
  const translate = useTranslate("forgotPassword");

  const data = useActionData();
  const { state } = useNavigation();

  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  const emailSent = scopedParams.getParam("emailSent");

  if (emailSent === "true") {
    return (
      <PageContainer>
        <div className="headerContainer">
          <strong>{translate.sentTitle}</strong>
          <p>{translate.sentDescription}</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="headerContainer">
        <strong>{translate.title}</strong>
        <p>{translate.description}</p>
      </div>

      <FormProvider
        fieldErrors={data?.fieldErrors}
        form={<FormContainer method="POST" />}
      >
        <Input
          showAsterisk
          name="email"
          type="text"
          label={translate.emailInputLabel}
          leftIcon={Mail}
        />

        <Button
          name="_action"
          value="ForgotPassword"
          isLoading={state === "submitting"}
        >
          {translate.button}
        </Button>

        <strong className="formErrorMessage">{data?.message}</strong>
      </FormProvider>

      <NavigateContainer>
        <p>{translate.backToLogin}</p>
        <Link to="/sign-in">{translate.switchType}</Link>
      </NavigateContainer>
    </PageContainer>
  );
}

export { ForgotPasswordPage };
