import Person from "@material-ui/icons/Person";

import EditTable from "views/TableList/EditTable.js";

const board = [
  {
    path: "/edittable",
    name: "게시판",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: EditTable,
    layout: "/admin/table",
  },
];

export default board;
