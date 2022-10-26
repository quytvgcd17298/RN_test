import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nameRegExp = 
  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g;

export const validateSchema = Yup.object().shape({
  fullname: Yup.string().required("Bắt buộc").matches(nameRegExp, "Tên không hợp lệ").min(12, "Tên người dùng phải nhiều hơn 12 ký tự").max(255),
  idcard: Yup.string().required("Bắt buộc").matches(phoneRegExp, "Số cmnd không hợp lệ").min(9, "ID phải nhiều hơn 9 số").max(15, "Id dưới 15 số"),
  phone: Yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
});
// nt change