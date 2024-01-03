import dayjs from "dayjs";
import { AwesomeButton } from "react-awesome-button";
import { CardActions, CardMedia, TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useAuth } from "@providers/auth-provider";
import { StyledCard, StyledCardContent } from "./profile.styles";
import { useProfile } from "@providers/profile-provider";
import { useTelegramAuth } from "@hooks/use-telegram-login";

export const Profile = () => {
  const { TelegramButton } = useTelegramAuth({ botName: "test_petproj1_bot" });
  const { logoutProfile, unAuthTelegramProfile } = useAuth();
  const { profile } = useProfile();

  return (
    <StyledCard>
      <CardMedia sx={{ height: 140 }} image={profile?.avatar_url} title={profile?.login} />
      <StyledCardContent>
        <TextField value={profile?.id} label="ID" variant="outlined" disabled />
        <TextField value={profile?.email} label="Email" variant="outlined" type="email" disabled />
        <TextField value={profile?.first_name} label="First name" variant="outlined" disabled />
        <TextField value={profile?.last_name} label="Last name" variant="outlined" disabled />
        <TextField value={profile?.login} label="Login" variant="outlined" disabled />
        <TextField value={profile?.role} label="Role" variant="outlined" disabled />
        <DemoItem label="Created profile">
          <DateField defaultValue={dayjs(profile?.created_at)} disabled />
        </DemoItem>
        <DemoItem label="Updated profile">
          <DateField defaultValue={dayjs(profile?.updated_at)} disabled />
        </DemoItem>
        <TextField
          value={profile?.isBlocked ? "True" : "False"}
          label="Account is blocked"
          variant="outlined"
          disabled
        />
        <TextField
          value={profile?.telegram_verified ? "True" : "False"}
          label="Telegram verified"
          variant="outlined"
          disabled
        />
      </StyledCardContent>
      <CardActions>
        <AwesomeButton onPress={() => logoutProfile()} type="primary">
          Logout
        </AwesomeButton>
        {!profile?.telegram_verified ? (
          TelegramButton
        ) : (
          <AwesomeButton onPress={() => unAuthTelegramProfile()} type="primary">
            Unlink Telegram
          </AwesomeButton>
        )}
      </CardActions>
    </StyledCard>
  );
};
