"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mui/index.ts
var mui_exports = {};
__export(mui_exports, {
  Accordion: () => import_material.Accordion,
  AccordionDetails: () => import_material.AccordionDetails,
  AccordionSummary: () => import_material.AccordionSummary,
  AccountBalanceIcon: () => import_AccountBalance.default,
  AccountBoxIcon: () => import_AccountBox.default,
  Alert: () => import_material.Alert,
  AlertTitle: () => import_material.AlertTitle,
  AppBar: () => import_material.AppBar,
  AppRegistrationIcon: () => import_AppRegistration.default,
  Autocomplete: () => import_material.Autocomplete,
  Avatar: () => import_material.Avatar,
  Backdrop: () => import_material.Backdrop,
  Badge: () => import_material.Badge,
  BottomNavigation: () => import_material.BottomNavigation,
  BottomNavigationAction: () => import_material.BottomNavigationAction,
  Box: () => import_material.Box,
  Breadcrumbs: () => import_material.Breadcrumbs,
  BuildIcon: () => import_Build.default,
  BusinessCenterIcon: () => import_BusinessCenter.default,
  Button: () => import_material.Button,
  ButtonGroup: () => import_material.ButtonGroup,
  Card: () => import_material.Card,
  CardActions: () => import_material.CardActions,
  CardContent: () => import_material.CardContent,
  CardHeader: () => import_material.CardHeader,
  Checkbox: () => import_material.Checkbox,
  Chip: () => import_material.Chip,
  CircularProgress: () => import_material.CircularProgress,
  CodeIcon: () => import_Code.default,
  Collapse: () => import_material.Collapse,
  ContactMailIcon: () => import_ContactMail.default,
  Container: () => import_material.Container,
  CreditCardIcon: () => import_CreditCard.default,
  DashboardIcon: () => import_Dashboard.default,
  DeleteIcon: () => import_Delete.default,
  Dialog: () => import_material.Dialog,
  DialogActions: () => import_material.DialogActions,
  DialogContent: () => import_material.DialogContent,
  DialogTitle: () => import_material.DialogTitle,
  Divider: () => import_material.Divider,
  Drawer: () => import_material.Drawer,
  EditIcon: () => import_Edit.default,
  EmailIcon: () => import_Email.default,
  EmojiEventsIcon: () => import_EmojiEvents.default,
  ExpandMoreIcon: () => import_ExpandMore.default,
  Fade: () => import_material.Fade,
  FormControl: () => import_material.FormControl,
  FormControlLabel: () => import_material.FormControlLabel,
  FormHelperText: () => import_material.FormHelperText,
  Grid: () => import_material.Grid,
  GroupsIcon: () => import_Groups.default,
  Grow: () => import_material.Grow,
  HandshakeIcon: () => import_Handshake.default,
  HelpOutlineIcon: () => import_HelpOutline.default,
  HomeIcon: () => import_Home.default,
  Icon: () => import_material.Icon,
  IconButton: () => import_material.IconButton,
  InfoIcon: () => import_Info.default,
  InputLabel: () => import_material.InputLabel,
  KeyboardArrowUpIcon: () => import_KeyboardArrowUp.default,
  LinearProgress: () => import_material.LinearProgress,
  Link: () => import_material.Link,
  LinkIcon: () => import_Link.default,
  List: () => import_material.List,
  ListItem: () => import_material.ListItem,
  ListItemButton: () => import_material.ListItemButton,
  ListItemIcon: () => import_material.ListItemIcon,
  ListItemText: () => import_material.ListItemText,
  LocationOnIcon: () => import_LocationOn.default,
  LoginIcon: () => import_Login.default,
  LogoutIcon: () => import_Logout.default,
  MailOutlineIcon: () => import_MailOutline.default,
  Menu: () => import_material.Menu,
  MenuIcon: () => import_Menu.default,
  MenuItem: () => import_material.MenuItem,
  MenuItemNav: () => import_material.MenuItem,
  Modal: () => import_material.Modal,
  Paper: () => import_material.Paper,
  PeopleIcon: () => import_People.default,
  PhoneIcon: () => import_Phone.default,
  Popover: () => import_material.Popover,
  Popper: () => import_material.Popper,
  PublicIcon: () => import_Public.default,
  Radio: () => import_material.Radio,
  RadioGroup: () => import_material.RadioGroup,
  RocketLaunchIcon: () => import_RocketLaunch.default,
  SavingsIcon: () => import_Savings.default,
  ScheduleIcon: () => import_Schedule.default,
  SecurityIcon: () => import_Security.default,
  Select: () => import_material.Select,
  SettingsIcon: () => import_Settings.default,
  Skeleton: () => import_material.Skeleton,
  Slide: () => import_material.Slide,
  Slider: () => import_material.Slider,
  Snackbar: () => import_material.Snackbar,
  SpeedIcon: () => import_Speed.default,
  Stack: () => import_material.Stack,
  StarIcon: () => import_Star.default,
  Switch: () => import_material.Switch,
  Tab: () => import_material.Tab,
  Table: () => import_material.Table,
  TableBody: () => import_material.TableBody,
  TableCell: () => import_material.TableCell,
  TableContainer: () => import_material.TableContainer,
  TableHead: () => import_material.TableHead,
  TablePagination: () => import_material.TablePagination,
  TableRow: () => import_material.TableRow,
  Tabs: () => import_material.Tabs,
  TextField: () => import_material.TextField,
  Toolbar: () => import_material.Toolbar,
  Tooltip: () => import_material.Tooltip,
  Typography: () => import_material.Typography,
  UploadFileIcon: () => import_UploadFile.default,
  VerifiedIcon: () => import_Verified.default,
  WorkspacePremiumIcon: () => import_WorkspacePremium.default,
  Zoom: () => import_material.Zoom,
  getMuiIcon: () => getMuiIcon,
  muiIconMap: () => muiIconMap,
  useMediaQuery: () => import_useMediaQuery.default,
  useTheme: () => import_styles.useTheme
});
module.exports = __toCommonJS(mui_exports);
var import_material = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);

// src/mui/icons.tsx
var import_AccountBalance = __toESM(require("@mui/icons-material/AccountBalance"), 1);
var import_AccountBox = __toESM(require("@mui/icons-material/AccountBox"), 1);
var import_AppRegistration = __toESM(require("@mui/icons-material/AppRegistration"), 1);
var import_Build = __toESM(require("@mui/icons-material/Build"), 1);
var import_BusinessCenter = __toESM(require("@mui/icons-material/BusinessCenter"), 1);
var import_Code = __toESM(require("@mui/icons-material/Code"), 1);
var import_ContactMail = __toESM(require("@mui/icons-material/ContactMail"), 1);
var import_CreditCard = __toESM(require("@mui/icons-material/CreditCard"), 1);
var import_Dashboard = __toESM(require("@mui/icons-material/Dashboard"), 1);
var import_Delete = __toESM(require("@mui/icons-material/Delete"), 1);
var import_Edit = __toESM(require("@mui/icons-material/Edit"), 1);
var import_Email = __toESM(require("@mui/icons-material/Email"), 1);
var import_EmojiEvents = __toESM(require("@mui/icons-material/EmojiEvents"), 1);
var import_ExpandMore = __toESM(require("@mui/icons-material/ExpandMore"), 1);
var import_Groups = __toESM(require("@mui/icons-material/Groups"), 1);
var import_Handshake = __toESM(require("@mui/icons-material/Handshake"), 1);
var import_HelpOutline = __toESM(require("@mui/icons-material/HelpOutline"), 1);
var import_Home = __toESM(require("@mui/icons-material/Home"), 1);
var import_Info = __toESM(require("@mui/icons-material/Info"), 1);
var import_KeyboardArrowUp = __toESM(require("@mui/icons-material/KeyboardArrowUp"), 1);
var import_Link = __toESM(require("@mui/icons-material/Link"), 1);
var import_LocationOn = __toESM(require("@mui/icons-material/LocationOn"), 1);
var import_Login = __toESM(require("@mui/icons-material/Login"), 1);
var import_Logout = __toESM(require("@mui/icons-material/Logout"), 1);
var import_MailOutline = __toESM(require("@mui/icons-material/MailOutline"), 1);
var import_Menu = __toESM(require("@mui/icons-material/Menu"), 1);
var import_People = __toESM(require("@mui/icons-material/People"), 1);
var import_Phone = __toESM(require("@mui/icons-material/Phone"), 1);
var import_Public = __toESM(require("@mui/icons-material/Public"), 1);
var import_RocketLaunch = __toESM(require("@mui/icons-material/RocketLaunch"), 1);
var import_Savings = __toESM(require("@mui/icons-material/Savings"), 1);
var import_Schedule = __toESM(require("@mui/icons-material/Schedule"), 1);
var import_Security = __toESM(require("@mui/icons-material/Security"), 1);
var import_Settings = __toESM(require("@mui/icons-material/Settings"), 1);
var import_Speed = __toESM(require("@mui/icons-material/Speed"), 1);
var import_Star = __toESM(require("@mui/icons-material/Star"), 1);
var import_UploadFile = __toESM(require("@mui/icons-material/UploadFile"), 1);
var import_Verified = __toESM(require("@mui/icons-material/Verified"), 1);
var import_WorkspacePremium = __toESM(require("@mui/icons-material/WorkspacePremium"), 1);
var muiIconMap = {
  AccountBalance: import_AccountBalance.default,
  AccountBox: import_AccountBox.default,
  AppRegistration: import_AppRegistration.default,
  Build: import_Build.default,
  BusinessCenter: import_BusinessCenter.default,
  Code: import_Code.default,
  ContactMail: import_ContactMail.default,
  CreditCard: import_CreditCard.default,
  Dashboard: import_Dashboard.default,
  Delete: import_Delete.default,
  Edit: import_Edit.default,
  Email: import_Email.default,
  EmojiEvents: import_EmojiEvents.default,
  ExpandMore: import_ExpandMore.default,
  Groups: import_Groups.default,
  Handshake: import_Handshake.default,
  Home: import_Home.default,
  Info: import_Info.default,
  KeyboardArrowUp: import_KeyboardArrowUp.default,
  Link: import_Link.default,
  LocationOn: import_LocationOn.default,
  Login: import_Login.default,
  Logout: import_Logout.default,
  MailOutline: import_MailOutline.default,
  Menu: import_Menu.default,
  People: import_People.default,
  Phone: import_Phone.default,
  Public: import_Public.default,
  RocketLaunch: import_RocketLaunch.default,
  Savings: import_Savings.default,
  Schedule: import_Schedule.default,
  Security: import_Security.default,
  Settings: import_Settings.default,
  Speed: import_Speed.default,
  Star: import_Star.default,
  UploadFile: import_UploadFile.default,
  Verified: import_Verified.default,
  WorkspacePremium: import_WorkspacePremium.default
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
    return import_HelpOutline.default;
  }
  return normalizedIconMap[normalizedKey] ?? import_HelpOutline.default;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccountBalanceIcon,
  AccountBoxIcon,
  Alert,
  AlertTitle,
  AppBar,
  AppRegistrationIcon,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  BuildIcon,
  BusinessCenterIcon,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  CircularProgress,
  CodeIcon,
  Collapse,
  ContactMailIcon,
  Container,
  CreditCardIcon,
  DashboardIcon,
  DeleteIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  EditIcon,
  EmailIcon,
  EmojiEventsIcon,
  ExpandMoreIcon,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  GroupsIcon,
  Grow,
  HandshakeIcon,
  HelpOutlineIcon,
  HomeIcon,
  Icon,
  IconButton,
  InfoIcon,
  InputLabel,
  KeyboardArrowUpIcon,
  LinearProgress,
  Link,
  LinkIcon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  LocationOnIcon,
  LoginIcon,
  LogoutIcon,
  MailOutlineIcon,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemNav,
  Modal,
  Paper,
  PeopleIcon,
  PhoneIcon,
  Popover,
  Popper,
  PublicIcon,
  Radio,
  RadioGroup,
  RocketLaunchIcon,
  SavingsIcon,
  ScheduleIcon,
  SecurityIcon,
  Select,
  SettingsIcon,
  Skeleton,
  Slide,
  Slider,
  Snackbar,
  SpeedIcon,
  Stack,
  StarIcon,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  UploadFileIcon,
  VerifiedIcon,
  WorkspacePremiumIcon,
  Zoom,
  getMuiIcon,
  muiIconMap,
  useMediaQuery,
  useTheme
});
//# sourceMappingURL=index.cjs.map