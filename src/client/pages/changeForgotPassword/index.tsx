import {
  Button,
  FormProvider,
  Input,
  useScopedParams,
} from "@arkyn/components";
import { Check, Lock, Shield } from "lucide-react";
import {
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router";

import { useTranslate } from "~/client/hooks/useTranslate";
import { CheckCircle, FormContainer, PageContainer } from "./styles";

function ChangeForgotPasswordPage() {
  const translate = useTranslate("changeForgotPassword");

  const data = useActionData();
  const { state } = useNavigation();

  const navigate = useNavigate();
  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  const passwordChanged = scopedParams.getParam("passwordChanged");

  function handleNavigateToLogin() {
    navigate("/sign-in");
  }

  if (passwordChanged === "true") {
    return (
      <PageContainer>
        <CheckCircle>
          <div>
            <Check />
          </div>
        </CheckCircle>

        <div className="headerContainer">
          <strong>{translate.changedTitle}</strong>
          <p>{translate.changedDescription}</p>
        </div>

        <Button onClick={handleNavigateToLogin}>{translate.backToLogin}</Button>
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
          name="newPassword"
          type="text"
          label={translate.newPasswordInputLabel}
          leftIcon={Lock}
        />

        <Input
          showAsterisk
          name="confirmPassword"
          type="text"
          label={translate.confirmPasswordInputLabel}
          leftIcon={Shield}
        />

        <Button
          name="_action"
          value="changeForgotPassword"
          isLoading={state === "submitting"}
        >
          {translate.button}
        </Button>

        <strong className="formErrorMessage">{data?.message}</strong>
      </FormProvider>
    </PageContainer>
  );
}

export { ChangeForgotPasswordPage };
