import { useForm, SubmitHandler, SubmitErrorHandler, Controller, RegisterOptions, LiteralUnion } from "react-hook-form";
import { Checkbox, FormControlLabel, TextField, ThemeProvider } from "@mui/material";
import { ReactElement } from "react"
import styles from "./Form.module.scss";
import { useSendFormMutation } from "@/store/services";
import LoadingButton from '@mui/lab/LoadingButton';
import { themeOptions } from "@/theme";
import { IFormDTO } from "@/models";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
  text: string;
  check: boolean;
}

export const Form = (): ReactElement<HTMLFormElement> => {
  const [sendForm, resObject] = useSendFormMutation({ fixedCacheKey: "shared-send-form" });

  const { handleSubmit, formState, watch, control, setValue, reset } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      text: "",
      check: false
    },
    mode: "onChange"
  });

  const [nameInput, emailInput, phoneInput, message, check] = watch(["name", "email", "phone", "text", "check"]);

  const isEmailError = () => {
    if (!emailInput) return true

    if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i)) return true

    return false
  };

  const isPhoneError = () => {
    if (!phoneInput) return true

    if (!phoneInput.match(/(\+\d{1})-(\d{3})-(\d{3})-(\d{2})-(\d{2})/)) return true

    return false
  };

  const isSubmitActive = () => {
    if (nameInput.length < 2) return false;

    if (!message) return false;

    if (formState.errors.name?.type) return false;

    if (!isPhoneError() && !isEmailError()) return true;

    if (!isPhoneError() && !emailInput) return true;

    if (!isEmailError() && !phoneInput) return true;

    return false;
  }

  const onOkSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formDto = {} as IFormDTO;
    formDto.name = data.name;
    formDto.message = data.text;
    if (data.email) formDto.email = data.email;
    if (data.phone) formDto.phone = data.phone;

    const res = await sendForm(formDto);

    if (res.data) onSuccess();
    if (res.error) onError();
  }

  const onErrorSubmit: SubmitErrorHandler<IFormInput> = (err) => {
    console.error("ERROR:\n", err);
  }

  const onSuccess = () => {
    console.log(resObject);
    reset();
  };

  const onError = () => {
    console.error(resObject);
  }

  const getHelperText = (type: LiteralUnion<keyof RegisterOptions, string>, length?: number): string => {
    if (type === "required") return "Требуется ввести текст сообщения";
    if (type === "pattern") return "Некорректный формат";
    if (type === "minLength" && length) return `Минимальная длина - ${length} символов`;

    else return "Что-то вообще не то..."
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onOkSubmit, onErrorSubmit)} noValidate>
      <ThemeProvider theme={themeOptions}>
        <section>
          <Controller
            name="name"
            control={control}
            rules={{ required: true, pattern: /^[A-Za-zА-Яа-я ]+$/i, minLength: 2 }}
            render={({ field }) =>
              <TextField
                id="name"
                color="info"
                label="Ваше имя"
                type="text"
                helperText={!!nameInput && formState.errors.name && getHelperText(formState.errors.name.type, 2)}
                variant="outlined"
                error={!!field.value && !!formState.errors.name?.type}
                fullWidth
                value={field.value}
                onChange={field.onChange}
                required
              />
            }
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: isPhoneError(), pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }}
            render={({ field }) =>
              <TextField
                id="email"
                color="info"
                label="Email"
                helperText={field.value && formState.errors.email && getHelperText(formState.errors.email?.type)}
                error={!!field.value && !!formState.errors.email?.type}
                variant="outlined"
                fullWidth
                type="email"
                value={field.value}
                onChange={field.onChange}
                required={isPhoneError()}
              />
            }
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: isEmailError(),
              pattern: /(\+\d{1})-(\d{3})-(\d{3})-(\d{2})-(\d{2})/,
              maxLength: 16,
              minLength: 16,
              onChange(event) {
                const cleanNumber: string = event.target.value.replaceAll(/\D|\s/g, "");

                let resultValue: string = cleanNumber[0] === "7"
                  ? cleanNumber.slice(0, 11)
                  : cleanNumber.length
                    ? "7".concat(cleanNumber.slice(0, 10))
                    : "";

                if (resultValue.length >= 10) {
                  resultValue = resultValue.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{1,2})/, '+$1-$2-$3-$4-$5')
                }
                if (resultValue.length >= 8 && resultValue.length < 10) {
                  resultValue = resultValue.replace(/(\d{1})(\d{3})(\d{3})(\d{1,2})/, '+$1-$2-$3-$4')
                }
                if (resultValue.length >= 5 && resultValue.length < 8) {
                  resultValue = resultValue.replace(/(\d{1})(\d{3})(\d{1,3})/, '+$1-$2-$3')
                }
                if (resultValue.length >= 2 && resultValue.length < 5) {
                  resultValue = resultValue.replace(/(\d{1})(\d{1,3})/, '+$1-$2')
                }
                if (resultValue.length === 1) {
                  resultValue = resultValue.replace(/(\d{1})/, '+$1-')
                }

                if (resultValue.length === 6 || resultValue.length === 10 || resultValue.length === 13) {
                  resultValue = resultValue.concat("-");
                }

                setValue("phone", resultValue);
              }
            }}
            render={({ field }) =>
              <TextField
                id="phone"
                color="info"
                type="tel"
                prefix="+"
                label="Телефон"
                style={{
                  marginBottom: "1rem"
                }}

                helperText={field.value && formState.errors.phone && getHelperText(formState.errors.phone.type, 11)}
                error={!!field.value && !!formState.errors.phone?.type}
                variant="outlined"
                fullWidth
                value={field.value}
                onChange={field.onChange}
                required={isEmailError()}
              />
            }
          />
          <Controller
            name="text"
            control={control}
            rules={{
              required: true,
              minLength: 20
            }}
            render={({ field }) =>
              <TextField
                id="text"
                color="info"
                label="Сообщение"
                type="text"
                helperText={field.value && formState.errors.text && getHelperText(formState.errors.text.type, 20)}
                error={!!field.value && !!formState.errors.text?.type}
                multiline
                minRows={3}
                variant="outlined"
                fullWidth
                value={field.value}
                onChange={field.onChange}
                required
              />
            }
          />

        </section>

        <Controller
          name="check"
          control={control}
          render={({ field }) =>
            <FormControlLabel
              style={{
                marginTop: "2.5rem",
                marginBottom: "5rem"
              }}
              control={
                <Checkbox
                  checked={field.value}
                  onChange={field.onChange}
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 25 }
                  }}
                  color="info"
                />}
              label="Согласие на обработку персональных данных"
            />
          }
        />

        <div className={styles["submit-wrapper"]}>
          <LoadingButton
            loading={resObject.isLoading}
            loadingPosition="center"
            disabled={!isSubmitActive() || !check}
            type="submit"
            variant="contained"
            color="primary"
          >
            {resObject.isLoading ? "..." : "Обсудить проект"}
          </LoadingButton>
        </div>
      </ThemeProvider>
    </form>
  )
};