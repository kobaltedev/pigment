import { As } from "@kobalte/core";
import { Anchor, Button, Checkbox, Surface } from "@kobalte/pigment";
import { createForm, required, setValue, SubmitHandler } from "@modular-forms/solid";

type SignUpForm = {
  newsletter: boolean;
};

export function ModularFormsExample() {
  const [signupForm, { Form, Field }] = createForm<SignUpForm>({
    validateOn: "submit",
  });

  const handleSubmit: SubmitHandler<SignUpForm> = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Surface
      variant="raised"
      border="all"
      class="flex flex-col w-full max-w-md p-5 rounded-lg"
      asChild
    >
      <As component={Form} onSubmit={handleSubmit}>
        <h2 class="text-2xl text-content font-bold mb-0.5">Welcome to Pigment</h2>
        <p class="text-base text-content-subtle">Sign up to continue</p>
        <div class="flex flex-col gap-5 my-6">
          [TODO]: add more components when available
          <Field
            name="newsletter"
            type="boolean"
            validate={[required("You must accept our terms and conditions")]}
          >
            {(field, props) => (
              <Checkbox
                ref={props.ref}
                name={props.name}
                checked={field.value}
                onChange={checked => setValue(signupForm, "newsletter", checked)}
                inputProps={{
                  onInput: props.onInput,
                  onChange: props.onChange,
                  onBlur: props.onBlur,
                }}
                invalid={!!field.error}
                label={
                  <>
                    I have read and agree to the{" "}
                    <span class="font-medium">terms and conditions</span>
                  </>
                }
                description={
                  <span>
                    Read our{" "}
                    <Anchor href="/" external>
                      terms and conditions
                    </Anchor>
                  </span>
                }
                errorMessage={field.error}
              />
            )}
          </Field>
        </div>
        <Button type="submit" variant="solid">
          Sign up
        </Button>
      </As>
    </Surface>
  );
}
