 
import { WithErrorBoundary } from "../../../../utils/ErrorBoundary/ErrorBoundary";
import GprsPage from "../GPRS/GprsPage";
import MonitoringPage from "../Monitoring/MonitoringPage";
import LanPage from "../LAN/LanPage";
import GeneralSettingsPage from "../GeneralSettings/GeneralSettingsPage";

const LanPageWithErrorBoundary = WithErrorBoundary(LanPage);
const GprsPageWithErrorBoundary = WithErrorBoundary(GprsPage);
const GeneralSettingsPageWithErrorBoundary = WithErrorBoundary(GeneralSettingsPage);
//const MonitoringPageWithErrorBoundary = WithErrorBoundary(MonitoringPage);

const PageRoute = ({ route, callback }: { route: string; callback: (el: string) => void }) => {
  switch (route) {
    case "Мониторинг":
      return <MonitoringPage route={route} callback={callback} />;
    case "Общие":
      return <GeneralSettingsPageWithErrorBoundary />;

    case "GPRS":
      return <GprsPageWithErrorBoundary />;
    case "LAN":
      return <LanPageWithErrorBoundary />;

    default:
      return <MonitoringPage route={route} callback={callback} />;
  }
};
export default PageRoute;
