import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SavingsIcon from '@mui/icons-material/Savings';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

type MuiIconComponent = typeof HomeIcon;

export {
  AccountBalanceIcon,
  AccountBoxIcon,
  AppRegistrationIcon,
  BuildIcon,
  BusinessCenterIcon,
  CodeIcon,
  ContactMailIcon,
  CreditCardIcon,
  DashboardIcon,
  DeleteIcon,
  EditIcon,
  EmailIcon,
  EmojiEventsIcon,
  ExpandMoreIcon,
  GroupsIcon,
  HandshakeIcon,
  HelpOutlineIcon,
  HomeIcon,
  InfoIcon,
  KeyboardArrowUpIcon,
  LinkIcon,
  LocationOnIcon,
  LoginIcon,
  LogoutIcon,
  MailOutlineIcon,
  MenuIcon,
  PeopleIcon,
  PhoneIcon,
  PublicIcon,
  RocketLaunchIcon,
  SavingsIcon,
  ScheduleIcon,
  SecurityIcon,
  SettingsIcon,
  SpeedIcon,
  StarIcon,
  UploadFileIcon,
  VerifiedIcon,
  WorkspacePremiumIcon,
};

export const muiIconMap = {
  AccountBalance: AccountBalanceIcon,
  AccountBox: AccountBoxIcon,
  AppRegistration: AppRegistrationIcon,
  Build: BuildIcon,
  BusinessCenter: BusinessCenterIcon,
  Code: CodeIcon,
  ContactMail: ContactMailIcon,
  CreditCard: CreditCardIcon,
  Dashboard: DashboardIcon,
  Delete: DeleteIcon,
  Edit: EditIcon,
  Email: EmailIcon,
  EmojiEvents: EmojiEventsIcon,
  ExpandMore: ExpandMoreIcon,
  Groups: GroupsIcon,
  Handshake: HandshakeIcon,
  Home: HomeIcon,
  Info: InfoIcon,
  KeyboardArrowUp: KeyboardArrowUpIcon,
  Link: LinkIcon,
  LocationOn: LocationOnIcon,
  Login: LoginIcon,
  Logout: LogoutIcon,
  MailOutline: MailOutlineIcon,
  Menu: MenuIcon,
  People: PeopleIcon,
  Phone: PhoneIcon,
  Public: PublicIcon,
  RocketLaunch: RocketLaunchIcon,
  Savings: SavingsIcon,
  Schedule: ScheduleIcon,
  Security: SecurityIcon,
  Settings: SettingsIcon,
  Speed: SpeedIcon,
  Star: StarIcon,
  UploadFile: UploadFileIcon,
  Verified: VerifiedIcon,
  WorkspacePremium: WorkspacePremiumIcon,
} as const satisfies Record<string, MuiIconComponent>;

export type MuiIconName = keyof typeof muiIconMap;


const normalizedIconMap: Record<string, MuiIconComponent> = Object.entries(muiIconMap).reduce(
  (acc, [key, value]) => {
    acc[key.toLowerCase()] = value;
    acc[key.replace(/[-_\s]/g, '').toLowerCase()] = value;
    return acc;
  },
  {} as Record<string, MuiIconComponent>
);

export const getMuiIcon = (iconName?: string): MuiIconComponent => {
  const normalizedKey = iconName?.trim().replace(/[-_\s]/g, '').toLowerCase();

  if (!normalizedKey) {
    return HelpOutlineIcon;
  }

  return normalizedIconMap[normalizedKey] ?? HelpOutlineIcon;
};
