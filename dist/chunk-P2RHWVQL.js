// src/mui/index.ts
import {
  Box,
  Container,
  Grid,
  Stack,
  Paper,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Divider,
  Typography,
  Icon,
  TextField,
  Button,
  ButtonGroup,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Avatar,
  Badge,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Alert,
  AlertTitle,
  CircularProgress,
  LinearProgress,
  Skeleton,
  Snackbar,
  Backdrop,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem as MenuItem2,
  Drawer,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Collapse,
  Fade,
  Grow,
  Slide,
  Zoom,
  Modal,
  Popover,
  Popper
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { default as default2 } from "@mui/material/useMediaQuery";

// src/mui/icons.tsx
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SavingsIcon from "@mui/icons-material/Savings";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import StarIcon from "@mui/icons-material/Star";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
var muiIconMap = {
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
  WorkspacePremium: WorkspacePremiumIcon
};
var normalizedIconMap = Object.entries(muiIconMap).reduce(
  (acc, [key, value]) => {
    acc[key.toLowerCase()] = value;
    acc[key.replace(/[-_\s]/g, "").toLowerCase()] = value;
    return acc;
  },
  {}
);
var getMuiIcon = (iconName) => {
  const normalizedKey = iconName?.trim().replace(/[-_\s]/g, "").toLowerCase();
  if (!normalizedKey) {
    return HelpOutlineIcon;
  }
  return normalizedIconMap[normalizedKey] ?? HelpOutlineIcon;
};

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
  muiIconMap,
  getMuiIcon,
  Box,
  Container,
  Grid,
  Stack,
  Paper,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Divider,
  Typography,
  Icon,
  TextField,
  Button,
  ButtonGroup,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Avatar,
  Badge,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Alert,
  AlertTitle,
  CircularProgress,
  LinearProgress,
  Skeleton,
  Snackbar,
  Backdrop,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem2,
  Drawer,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Collapse,
  Fade,
  Grow,
  Slide,
  Zoom,
  Modal,
  Popover,
  Popper,
  useTheme,
  default2 as default
};
//# sourceMappingURL=chunk-P2RHWVQL.js.map