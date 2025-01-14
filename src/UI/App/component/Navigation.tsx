
import { isStandalone } from "../utils/standaloneChecker";
import { BrowserNavigation } from "./BrowserNavigation";
import { StandAloneNavigation } from "./StandAloneNavigation";

export const Navigation = () => {

    if (isStandalone) return <StandAloneNavigation />; 

    return <BrowserNavigation />
}
