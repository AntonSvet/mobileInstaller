 
import { WithErrorBoundary } from "../../../../utils/ErrorBoundary/ErrorBoundary";
 
import MonitoringPage from "../Monitoring/MonitoringPage";
import LanPage from "../LAN/LanPage";
import ZonesPage from "../Zones/ZonesPage";
import GeneralSettingsPage from "../GeneralSettings/GeneralSettingsPage";

const LanPageWithErrorBoundary = WithErrorBoundary(LanPage);
const ZonesPageWithErrorBoundary = WithErrorBoundary(ZonesPage);
const GeneralSettingsPageWithErrorBoundary = WithErrorBoundary(GeneralSettingsPage);
//const MonitoringPageWithErrorBoundary = WithErrorBoundary(MonitoringPage);

const PageRoute = ({ route, callback }: { route: string; callback: (el: string) => void }) => {
  switch (route) {
    case "Мониторинг":
      return <MonitoringPage route={route} callback={callback} />;
    case "Общие":
      return <GeneralSettingsPageWithErrorBoundary />;

    case "Зоны":
      return <ZonesPageWithErrorBoundary />;
    case "Параметры связи":
      return <LanPageWithErrorBoundary />;
    case "Коды пользователя":
      return <LanPageWithErrorBoundary />;
    default:
      return <MonitoringPage route={route} callback={callback} />;
  }
};
export default PageRoute;
