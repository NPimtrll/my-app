import { useEffect } from "react";
import { useLocation } from "react-router";
import serviceContainer from "../../../Services/ServiceContainer";
import SessionService from "../../../Services/SessionService";
import { IProfileService } from "../../../Domains/User/ProfileService";
import { IProfile } from "../../../Domains/User/Profile";
import EnvService from "../../../Services/EnvService";

// Component to listen to query parameter changes
const QueryTokenListener = () => {
  const env = serviceContainer.get<EnvService>(EnvService);
  const location = useLocation(); // React Router location object

  useEffect(() => {
    const sessionService = serviceContainer.get<SessionService>(SessionService);
    sessionService
      .create()
      .then((token: string) => {
        const profileService =
          serviceContainer.get<IProfileService>("IProfileService");
        profileService.resolveFrom(token).then((profile: IProfile) => {
          sessionService.setProfile(profile);
        });
      })
      .catch(() => {
        window.location.href = env.get("SETLINK_URL");
      });
  }, [location.search]); // Runs when the search string changes

  return null; // No UI output
};

export default QueryTokenListener;
