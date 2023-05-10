import { Button, Checkbox } from "@kobalte/pigment";
import { createForm, required, SubmitHandler } from "@modular-forms/solid";

type SignUpForm = {
  newsletter: boolean;
};

export function ModularFormsExample() {
  const [, { Form, Field }] = createForm<SignUpForm>({
    validateOn: "submit",
  });

  const handleSubmit: SubmitHandler<SignUpForm> = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Form
      class="flex flex-col w-full max-w-md p-5 rounded-lg shadow border border-line-subtle bg-surface-raised"
      onSubmit={handleSubmit}
    >
      <h2 class="text-2xl text-content font-bold mb-0.5">Welcome to Pigment</h2>
      <p class="text-base text-content-subtle">Sign up to continue</p>
      <div class="flex flex-col gap-5 my-6">
        [TODO]: add more components
        <Field
          name="newsletter"
          type="boolean"
          validate={[required("You must accept our terms and conditions")]}
        >
          {(field, props) => (
            <Checkbox
              ref={props.ref}
              name={props.name}
              inputProps={{
                onInput: props.onInput,
                onChange: props.onChange,
                onBlur: props.onBlur,
              }}
              invalid={!!field.error}
              label={
                <>
                  I have read and agree to the <span class="font-medium">terms and conditions</span>
                </>
              }
              description={
                <span>
                  Read our{" "}
                  <a href="/" target="_blank">
                    terms and conditions
                  </a>
                </span>
              }
              errorMessage={field.error}
              checked={field.value}
            />
          )}
        </Field>
      </div>
      <Button type="submit" variant="solid">
        Sign up
      </Button>
    </Form>
  );
}
