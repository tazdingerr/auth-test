import { useTelegramAuth } from "@hooks/use-telegram-login";
import { Card, CardActions, CardContent, CardMedia, TextField } from "@mui/material";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import { useAuth } from "@providers/auth-provider";
import { AwesomeButton } from "react-awesome-button";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

export const Profile = () => {
  const { TelegramButton } = useTelegramAuth({ botName: "test_petproj1_bot" });
  const { profile, logoutProfile } = useAuth();

  return (
    profile && (
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia sx={{ height: 140 }} image={profile.avatar_url} title="green iguana" />
        <CardContent>
          <TextField value={profile.id} label="ID" variant="outlined" required />
          <TextField value={profile.email} label="Email" variant="outlined" type="email" required />
          <TextField value={profile.first_name} label="First name" variant="outlined" required />
          <TextField value={profile.last_name} label="Last name" variant="outlined" required />
          <TextField value={profile.login} label="Login" variant="outlined" required />
          <TextField value={profile.role} label="Role" variant="outlined" required />
          <DatePicker />
          <DatePicker />
          <DemoItem label="Created profile">
            <DateField defaultValue={dayjs(profile.created_at)} />
          </DemoItem>
          <DemoItem label="Updated profile">
            <DateField defaultValue={dayjs(profile.updated_at)} />
          </DemoItem>
          <TextField
            value={profile.isBlocked ? "True" : "False"}
            label="Account is blocked"
            variant="outlined"
            required
          />
          <TextField
            value={profile.telegram_verified ? "True" : "False"}
            label="Telegram verified"
            variant="outlined"
            required
          />
        </CardContent>
        <CardActions>
          <AwesomeButton onPress={() => logoutProfile()} type="primary">
            Logout
          </AwesomeButton>
          {!profile.telegram_verified && TelegramButton}
        </CardActions>
      </Card>
    )
  );
};
