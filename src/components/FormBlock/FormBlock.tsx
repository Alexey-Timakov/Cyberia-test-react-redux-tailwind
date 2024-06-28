import { Form, FormMessage } from "@/components";

export const FormBlock = () => {
  return (
    <section>
      <h2 className="max-w-xl text-light-grey text-4xl font-semibold mt0 mb-36">Расскажите о вашем проекте:</h2>
      <Form />
      <FormMessage />
    </section>
  )
}