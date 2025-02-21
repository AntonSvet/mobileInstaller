 
import { WithErrorBoundary } from "../../../../utils/ErrorBoundary/ErrorBoundary";
import GprsPage from "../GPRS/GprsPage";
import MonitoringPage from "../Monitoring/MonitoringPage";
import LanPage from "./LAN/LanPage";

const LanPageWithErrorBoundary = WithErrorBoundary(LanPage);
const GprsPageWithErrorBoundary = WithErrorBoundary(GprsPage);
const MonitoringPageWithErrorBoundary = WithErrorBoundary(MonitoringPage);
 

const PageRoute = ({ route }: { route: string }) => {
  switch (route) {
    case "Мониторинг":
      return <MonitoringPageWithErrorBoundary />;

    case "GPRS":
      return <GprsPageWithErrorBoundary />;
    case "LAN":
      return <LanPageWithErrorBoundary />;

    default:
      return <MonitoringPageWithErrorBoundary />;
  }
};
export default PageRoute;
