import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import "dayjs/locale/th";
import { useState } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

import DateAdapter from "../../../Utils/DateAdapter";
import { useDisclosure } from "@hooks/useDisclosure";

type FormDatePickerProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> &
    DatePickerProps<Dayjs> & {
      placeholder?: string;
    };

const FormDatePicker = <TFieldValues extends FieldValues = FieldValues>(
  props: FormDatePickerProps<TFieldValues>,
): JSX.Element => {
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController({
    ...props,
    name: props.name,
  });

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    error?.message,
  );

  const [openedCalendar, { open: openCalendar, close: closeCalendar }] =
    useDisclosure();

  return (
    <LocalizationProvider
      dateAdapter={DateAdapter}
      adapterLocale="th"
      dateFormats={{
        year: "BBBB",
      }}
    >
      <DatePicker
        format="DD MMMM BBBB"
        {...field}
        {...props}
        ref={ref}
        onError={(newError) => {
          if (newError === "invalidDate") {
            setErrorMessage("วันที่ไม่ถูกต้อง");
          } else {
            setErrorMessage(undefined);
          }
        }}
        slotProps={{
          ...props.slotProps,
          textField: {
            error: !!(errorMessage || error),
            placeholder: props.placeholder || "กรุณาเลือกวัน เดือน ปี",
            helperText: errorMessage || error?.message,
            onClick: openCalendar,
          },
        }}
        open={openedCalendar}
        onOpen={openCalendar}
        onClose={closeCalendar}
      />
    </LocalizationProvider>
  );
};

export default FormDatePicker;
