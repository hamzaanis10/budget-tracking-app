//rrd imports
import { redirect } from "react-router-dom";

// helper functions
import { deleteItem } from "../helpers";

export const logoutAction = async () => {
  deleteItem({ key: "userName" });
  return redirect("/");
};
