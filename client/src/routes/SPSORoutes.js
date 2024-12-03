import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PrinterManagement from "../pages/PrinterManagement";
import PrintHistory from "../pages/PrintHistory";
import PrintHistoryDetail from "../pages/PrintHistoryDetail";
import PrintReport from "../pages/PrintReport";
import PrintReportDetail from "../pages/PrintReportDetail";

// This is just a sample, can be changed later
function SPSORoutes() {
  return (
    <Routes>
      <Route path="printer">
        <Route index element={<PrinterManagement />} />{" "}
      </Route>
      <Route path="printlog">
        <Route index element={<PrintHistory />} />
        <Route path=":id" element={<PrintHistoryDetail />} />
      </Route>
      <Route path="report">
        <Route index element={<PrintReport />} />
        <Route path=":year/:month?" element={<PrintReportDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default SPSORoutes;
