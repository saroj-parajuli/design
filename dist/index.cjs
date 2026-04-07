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

// src/index.ts
var src_exports = {};
__export(src_exports, {
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
  CssBaseline: () => import_material2.CssBaseline,
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
  ThemeProvider: () => import_material2.ThemeProvider,
  Toolbar: () => import_material.Toolbar,
  Tooltip: () => import_material.Tooltip,
  Typography: () => import_material.Typography,
  UploadFileIcon: () => import_UploadFile.default,
  VerifiedIcon: () => import_Verified.default,
  WorkspacePremiumIcon: () => import_WorkspacePremium.default,
  Zoom: () => import_material.Zoom,
  accentGradient: () => accentGradient,
  accountStyles: () => accountStyles,
  bgRadial1: () => bgRadial1,
  bgRadial2: () => bgRadial2,
  breakpoints: () => breakpoints,
  cardBg: () => cardBg,
  colorWithAlpha: () => colorWithAlpha,
  commonStyles: () => commonStyles,
  createServiceGradient: () => createServiceGradient,
  cssVar: () => cssVar,
  getMuiIcon: () => getMuiIcon,
  muiIconMap: () => muiIconMap,
  muiTheme: () => muiTheme,
  primary: () => primary,
  secondary: () => secondary,
  serviceCardStyles: () => serviceCardStyles,
  spacing: () => spacing2,
  theme: () => theme,
  useMediaQuery: () => import_useMediaQuery.default,
  useTheme: () => import_styles.useTheme
});
module.exports = __toCommonJS(src_exports);

// src/mui/index.ts
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

// src/theme/theme.ts
var import_material2 = require("@mui/material");
var import_styles2 = require("@mui/material/styles");
var spacing = 8;
var muiTheme = (0, import_styles2.createTheme)({
  palette: {
    mode: "light",
    primary: {
      main: "#115A95",
      light: "#5888c5",
      dark: "#003266",
      contrastText: "#fff"
    },
    secondary: {
      main: "#dc004e",
      light: "#e33371",
      dark: "#9a0036",
      contrastText: "#fff"
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#2e7d32",
      contrastText: "#fff"
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em"
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
      lineHeight: 1.25,
      letterSpacing: "-0.00833em"
    },
    h3: {
      fontWeight: 600,
      fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
      lineHeight: 1.3,
      letterSpacing: "0em"
    },
    h4: {
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
      lineHeight: 1.4,
      letterSpacing: "0.00735em"
    },
    h5: {
      fontWeight: 600,
      fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
      lineHeight: 1.5,
      letterSpacing: "0em"
    },
    h6: {
      fontWeight: 600,
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      lineHeight: 1.6,
      letterSpacing: "0.0075em"
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em"
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em"
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em"
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      letterSpacing: "0.01071em"
    },
    button: {
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "none",
      letterSpacing: "0.02857em"
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.03333em"
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase"
    }
  },
  shape: {
    borderRadius: 8
  },
  spacing,
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 22px",
          fontSize: "0.875rem",
          fontWeight: 600,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
          },
          "&:active": {
            transform: "translateY(0)"
          }
        },
        contained: {
          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)"
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        },
        rounded: {
          borderRadius: 8
        },
        elevation1: {
          boxShadow: "0px 2px 4px rgba(0,0,0,0.08)"
        },
        elevation2: {
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.4)"
              }
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: 2
              }
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 6,
          fontSize: "0.75rem",
          padding: "8px 12px"
        }
      }
    }
  }
});
var theme = muiTheme;
var accountStyles = (theme2 = muiTheme) => ({
  accountsListCard: {
    display: "flex",
    alignItems: "center",
    gap: theme2.spacing(2),
    marginBottom: theme2.spacing(2),
    paddingLeft: theme2.spacing(2),
    paddingRight: theme2.spacing(2),
    paddingTop: theme2.spacing(1.5),
    paddingBottom: theme2.spacing(1.5),
    borderRadius: Number(theme2.shape.borderRadius) * 1.5,
    backgroundColor: theme2.palette.background.paper,
    boxShadow: theme2.shadows[1],
    cursor: "pointer",
    transition: theme2.transitions.create(["box-shadow", "outline", "background"], {
      duration: theme2.transitions.duration.short
    }),
    outline: "none",
    position: "relative",
    "&:hover": {
      boxShadow: theme2.shadows[3],
      backgroundColor: theme2.palette.action.hover
    },
    "&:focus-visible": {
      outline: `2px solid ${theme2.palette.primary.main}`,
      outlineOffset: 2,
      zIndex: 2,
      backgroundColor: theme2.palette.action.focus
    },
    '&[aria-selected="true"]': {
      outline: `2px solid ${theme2.palette.primary.main}`,
      boxShadow: theme2.shadows[3],
      backgroundColor: theme2.palette.action.selected
    },
    '&[aria-disabled="true"], &[disabled]': {
      opacity: theme2.palette.action.disabledOpacity,
      pointerEvents: "none",
      backgroundColor: theme2.palette.action.disabledBackground
    },
    "&:active": {
      backgroundColor: theme2.palette.action.active
    }
  },
  accountCardSelected: {
    outline: `2px solid ${theme2.palette.primary.main}`,
    boxShadow: theme2.shadows[3],
    backgroundColor: theme2.palette.action.selected
  },
  accountAvatar: {
    backgroundColor: theme2.palette.primary.light,
    color: theme2.palette.primary.contrastText,
    width: theme2.spacing(6),
    // 48px if spacing=8
    height: theme2.spacing(6),
    fontSize: theme2.typography.h4.fontSize,
    border: `2px solid ${theme2.palette.primary.main}`,
    transition: theme2.transitions.create("border", {
      duration: theme2.transitions.duration.short
    }),
    "&:focus": {
      borderColor: theme2.palette.secondary.main
    }
  },
  accountCardBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme2.spacing(0.5),
    minWidth: 0
  },
  accountChipRow: {
    marginTop: theme2.spacing(1),
    display: "flex",
    gap: theme2.spacing(1)
  },
  accountChip: {
    fontWeight: theme2.typography.fontWeightMedium,
    borderRadius: theme2.shape.borderRadius,
    paddingLeft: theme2.spacing(1),
    paddingRight: theme2.spacing(1),
    transition: theme2.transitions.create(["background", "color"], {
      duration: theme2.transitions.duration.short
    }),
    "&:focus": {
      outline: `2px solid ${theme2.palette.secondary.main}`,
      outlineOffset: 2
    }
  }
});

// src/theme/index.ts
var import_styles3 = require("@mui/material/styles");
var commonStyles = {
  interactiveCard: {
    borderRadius: 2,
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: muiTheme.shadows[8]
    },
    "&:active": {
      transform: "translateY(-2px)"
    }
  },
  // Elevated card with shadow
  elevatedCard: {
    borderRadius: 2,
    boxShadow: muiTheme.shadows[3],
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: muiTheme.shadows[6]
    }
  },
  // Gradient background
  gradientBackground: {
    background: `linear-gradient(135deg, ${muiTheme.palette.primary.main} 0%, ${muiTheme.palette.primary.dark} 100%)`,
    color: muiTheme.palette.primary.contrastText
  },
  // Glass morphism effect
  glassMorphism: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    borderRadius: 2,
    border: "1px solid rgba(255, 255, 255, 0.3)"
  },
  // Centered flex container
  centeredFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  // Responsive padding
  responsivePadding: {
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 3, sm: 4, md: 6 }
  },
  // Section spacing
  sectionSpacing: {
    py: { xs: 6, sm: 8, md: 10 }
  },
  // Smooth transition
  smoothTransition: {
    transition: muiTheme.transitions.create(["all"], {
      duration: muiTheme.transitions.duration.standard
    })
  },
  // Focus visible styles for accessibility
  focusVisible: {
    "&:focus-visible": {
      outline: `2px solid ${muiTheme.palette.primary.main}`,
      outlineOffset: 2
    }
  },
  // Truncate text with ellipsis
  truncateText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  // Multiline truncate
  clampText: (lines = 2) => ({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }),
  // Scrollable container with custom scrollbar
  customScrollbar: {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 8
    },
    "&::-webkit-scrollbar-track": {
      background: muiTheme.palette.grey[100],
      borderRadius: 4
    },
    "&::-webkit-scrollbar-thumb": {
      background: muiTheme.palette.grey[400],
      borderRadius: 4,
      "&:hover": {
        background: muiTheme.palette.grey[600]
      }
    }
  },
  // Skeleton loading animation
  skeletonPulse: {
    animation: "pulse 1.5s ease-in-out infinite",
    "@keyframes pulse": {
      "0%": {
        opacity: 1
      },
      "50%": {
        opacity: 0.5
      },
      "100%": {
        opacity: 1
      }
    }
  },
  // Fade in animation
  fadeIn: {
    animation: "fadeIn 0.5s ease-in",
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
        transform: "translateY(10px)"
      },
      to: {
        opacity: 1,
        transform: "translateY(0)"
      }
    }
  },
  // Status colors
  statusSuccess: {
    color: muiTheme.palette.success.main,
    backgroundColor: muiTheme.palette.success.light + "20"
  },
  statusError: {
    color: muiTheme.palette.error.main,
    backgroundColor: muiTheme.palette.error.light + "20"
  },
  statusWarning: {
    color: muiTheme.palette.warning.main,
    backgroundColor: muiTheme.palette.warning.light + "20"
  },
  statusInfo: {
    color: muiTheme.palette.info.main,
    backgroundColor: muiTheme.palette.info.light + "20"
  }
};
var spacing2 = {
  xs: muiTheme.spacing(0.5),
  // 4px
  sm: muiTheme.spacing(1),
  // 8px
  md: muiTheme.spacing(2),
  // 16px
  lg: muiTheme.spacing(3),
  // 24px
  xl: muiTheme.spacing(4),
  // 32px
  xxl: muiTheme.spacing(6)
  // 48px
};
var breakpoints = {
  up: (key) => muiTheme.breakpoints.up(key),
  down: (key) => muiTheme.breakpoints.down(key),
  between: (start, end) => muiTheme.breakpoints.between(start, end)
};
var colorWithAlpha = (color, alpha2) => {
  return `${color}${Math.round(alpha2 * 255).toString(16).padStart(2, "0")}`;
};
var cssVar = (name, fallback) => `var(${name}, ${fallback})`;
var createServiceGradient = (mainColor, lightColor, angle = 135) => {
  return `linear-gradient(${angle}deg, ${mainColor} 0%, ${lightColor} 100%)`;
};
var serviceCardStyles = {
  container: {
    position: "relative",
    borderRadius: 3,
    overflow: "hidden",
    transition: muiTheme.transitions.create(["transform", "box-shadow"], {
      duration: muiTheme.transitions.duration.standard
    }),
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: muiTheme.shadows[12]
    },
    "&:active": {
      transform: "translateY(-4px) scale(1.01)"
    }
  },
  header: (gradient) => ({
    background: gradient,
    color: "#fff",
    padding: muiTheme.spacing(3),
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.1)",
      transition: "opacity 0.3s ease"
    },
    "&:hover::before": {
      opacity: 0
    }
  }),
  icon: {
    fontSize: "3rem",
    marginBottom: muiTheme.spacing(2),
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
  },
  title: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.2,
    textShadow: "0 1px 3px rgba(0,0,0,0.2)"
  },
  description: {
    padding: muiTheme.spacing(2.5, 3),
    color: muiTheme.palette.text.secondary,
    lineHeight: 1.6
  },
  actions: {
    padding: muiTheme.spacing(2, 3),
    borderTop: `1px solid ${muiTheme.palette.divider}`,
    display: "flex",
    gap: muiTheme.spacing(1.5)
  }
};
var primary = muiTheme.palette.primary.main;
var secondary = muiTheme.palette.secondary.main;
var accentGradient = `linear-gradient(180deg, ${primary} 0%, ${secondary} 100%)`;
var cardBg = `linear-gradient(135deg, ${primary}10 0%, ${secondary}10 100%)`;
var bgRadial1 = `radial-gradient(circle, ${primary}14 0%, transparent 70%)`;
var bgRadial2 = `radial-gradient(circle, ${(0, import_styles3.alpha)(secondary, 0.06)} 0%, transparent 70%)`;
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
  CssBaseline,
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
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  UploadFileIcon,
  VerifiedIcon,
  WorkspacePremiumIcon,
  Zoom,
  accentGradient,
  accountStyles,
  bgRadial1,
  bgRadial2,
  breakpoints,
  cardBg,
  colorWithAlpha,
  commonStyles,
  createServiceGradient,
  cssVar,
  getMuiIcon,
  muiIconMap,
  muiTheme,
  primary,
  secondary,
  serviceCardStyles,
  spacing,
  theme,
  useMediaQuery,
  useTheme
});
//# sourceMappingURL=index.cjs.map