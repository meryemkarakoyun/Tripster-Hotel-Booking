import * as yup from "yup";

export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("İsim alanı zorunludur.")
    .min(3, "İsim en az 3 karakter olmalıdır.")
    .max(40, "İsim en fazla 40 karakter olabilir."),
  location: yup
    .string()
    .required("Konum alanı zorunludur.")
    .min(3, "Konum en az 3 karakter olmalıdır.")
    .max(40, "Konum en fazla 40 karakter olabilir."),
  address: yup
    .string()
    .required("Adres alanı zorunludur.")
    .min(3, "Adres en az 3 karakter olmalıdır.")
    .max(40, "Adres en fazla 40 karakter olabilir."),
  description: yup
    .string()
    .required("Açıklama alanı zorunludur.")
    .min(10, "Açıklama en az 10 karakter olmalıdır.")
    .max(200, "Açıklama en fazla 200 karakter olabilir."),
  amenities: yup
    .string()
    .required("Özellikler alanı zorunludur.")
    .min(3, "Özellikler alanı en az 3 karakter olmalıdır.")
    .max(80, "Özellikler alanı en fazla 80 karakter olabilir."),
  rating: yup
    .number()
    .required("Puan zorunludur.")
    .min(1, "Puan en az 1 olmalıdır.")
    .max(5, "Puan en fazla 5 olmalıdır."),
  price_per_night: yup
    .number()
    .required("Fiyat zorunludur.")
    .positive("Fiyat pozitif olmalıdır.")
    .max(999999, "Fiyat en fazla 999999 olmalıdır."),
  availability: yup.boolean(),
});
