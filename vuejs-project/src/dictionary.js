export default {
  en: {
    messages: {
      //=>แบบที่ 1
      // required() {
      //     return 'Must key !!!';
      // }
      required(field) {
        return `${field} must not be empty !!!`;
      },
      min(field, params) {
        console.log(params);
        return `${field} mus be at least ${params[0]} characters`;
      }
    },
    //=>จัดการเพื่อความ friendly กับผู้ใช้งาน
    //=>เป็นการ replace variable เป็น text
    attributes: {
      firstName: "First Name"
    }
  },

  th: {
    messages: {
      required() {}
    }
  }
};
