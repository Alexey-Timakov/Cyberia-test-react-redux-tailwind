import { useSendFormMutation } from "@/store/services";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react";
import { themeOptions } from "@/theme";
import { isErrorDTO, isFetchBaseQueryError } from "@/helpers/typeGuads";

export const FormMessage = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [, res] = useSendFormMutation({
    fixedCacheKey: "shared-send-form"
  });

  useEffect(() => {
    if (res.isSuccess || res.isError) {
      setIsOpened(true);
      console.warn(res)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res.isSuccess, res.isError])

  return (
    <ThemeProvider theme={themeOptions}>
      <Dialog
        open={isOpened}
        onClose={() => setIsOpened(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {res.isSuccess && "Отлично!"}
          {res.isError && "Произошла ошибка!"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {res.isSuccess && res.data.message &&
              "Мы получили вашу информацию! Спасибо!"
            }
          </DialogContentText>
          {res.isError && isFetchBaseQueryError(res.error) && isErrorDTO(res.error.data)
            ? <pre className="text-pre">{JSON.stringify(res.error.data.errors, null, 2)}</pre>
            : <pre className="text-pre">{JSON.stringify(res.error, null, 2)}</pre>
          }
        </DialogContent>
        <DialogActions >
          <Button
            variant="contained"
            disableElevation
            color={res.isError ? "error" : "primary"}
            className="text-base"
            onClick={() => setIsOpened(false)}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider >
  )
}