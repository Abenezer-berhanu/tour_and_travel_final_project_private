import DashboardLayout from "@/components/uiComponents/DashboardLayout";
import React from "react";

function layout({ children }) {
  return (
    <div className="min-h-[680px] w-full mx-auto grid grid-cols-11 gap-5">
      <div className="col-span-11 md:col-span-3 shadow-md h-fit">
        <DashboardLayout />
      </div>
      <div className="col-span-11 md:col-span-8 shadow-md p-2">{children}</div>
    </div>
  );
}

export default layout;
