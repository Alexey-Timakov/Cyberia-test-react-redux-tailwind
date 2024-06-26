import { Form, FormMessage } from "@/components";
import styles from "./FormBlock.module.scss";

export const FormBlock = () => {
  return (
    <section className={styles["form-block"]}>
      <h2 className={styles.title}>Расскажите о вашем проекте:</h2>
      <Form />
      <FormMessage />
    </section>
  )
}