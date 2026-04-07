import { muiTheme } from "./theme";
import { alpha as muiAlpha, SxProps, Theme } from '@mui/material/styles';

export { ThemeProvider, CssBaseline } from './theme';
export { accountStyles, muiTheme, theme } from './theme';

/**
 * Common reusable style patterns for consistent UX
 */
export const commonStyles = {
  interactiveCard: {
    borderRadius: 2,
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: muiTheme.shadows[8],
    },
    '&:active': {
      transform: 'translateY(-2px)',
    },
  } as SxProps<Theme>,

  // Elevated card with shadow
  elevatedCard: {
    borderRadius: 2,
    boxShadow: muiTheme.shadows[3],
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: muiTheme.shadows[6],
    },
  } as SxProps<Theme>,

  // Gradient background
  gradientBackground: {
    background: `linear-gradient(135deg, ${muiTheme.palette.primary.main} 0%, ${muiTheme.palette.primary.dark} 100%)`,
    color: muiTheme.palette.primary.contrastText,
  } as SxProps<Theme>,

  // Glass morphism effect
  glassMorphism: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: 2,
    border: '1px solid rgba(255, 255, 255, 0.3)',
  } as SxProps<Theme>,

  // Centered flex container
  centeredFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as SxProps<Theme>,

  // Responsive padding
  responsivePadding: {
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 3, sm: 4, md: 6 },
  } as SxProps<Theme>,

  // Section spacing
  sectionSpacing: {
    py: { xs: 6, sm: 8, md: 10 },
  } as SxProps<Theme>,

  // Smooth transition
  smoothTransition: {
    transition: muiTheme.transitions.create(['all'], {
      duration: muiTheme.transitions.duration.standard,
    }),
  } as SxProps<Theme>,

  // Focus visible styles for accessibility
  focusVisible: {
    '&:focus-visible': {
      outline: `2px solid ${muiTheme.palette.primary.main}`,
      outlineOffset: 2,
    },
  } as SxProps<Theme>,

  // Truncate text with ellipsis
  truncateText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as SxProps<Theme>,

  // Multiline truncate
  clampText: (lines: number = 2) => ({
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }) as SxProps<Theme>,

  // Scrollable container with custom scrollbar
  customScrollbar: {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-track': {
      background: muiTheme.palette.grey[100],
      borderRadius: 4,
    },
    '&::-webkit-scrollbar-thumb': {
      background: muiTheme.palette.grey[400],
      borderRadius: 4,
      '&:hover': {
        background: muiTheme.palette.grey[600],
      },
    },
  } as SxProps<Theme>,

  // Skeleton loading animation
  skeletonPulse: {
    animation: 'pulse 1.5s ease-in-out infinite',
    '@keyframes pulse': {
      '0%': {
        opacity: 1,
      },
      '50%': {
        opacity: 0.5,
      },
      '100%': {
        opacity: 1,
      },
    },
  } as SxProps<Theme>,

  // Fade in animation
  fadeIn: {
    animation: 'fadeIn 0.5s ease-in',
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(10px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  } as SxProps<Theme>,

  // Status colors
  statusSuccess: {
    color: muiTheme.palette.success.main,
    backgroundColor: muiTheme.palette.success.light + '20',
  } as SxProps<Theme>,

  statusError: {
    color: muiTheme.palette.error.main,
    backgroundColor: muiTheme.palette.error.light + '20',
  } as SxProps<Theme>,

  statusWarning: {
    color: muiTheme.palette.warning.main,
    backgroundColor: muiTheme.palette.warning.light + '20',
  } as SxProps<Theme>,

  statusInfo: {
    color: muiTheme.palette.info.main,
    backgroundColor: muiTheme.palette.info.light + '20',
  } as SxProps<Theme>,
};

/**
 * Spacing utilities
 */
export const spacing = {
  xs: muiTheme.spacing(0.5),  // 4px
  sm: muiTheme.spacing(1),    // 8px
  md: muiTheme.spacing(2),    // 16px
  lg: muiTheme.spacing(3),    // 24px
  xl: muiTheme.spacing(4),    // 32px
  xxl: muiTheme.spacing(6),   // 48px
};

/**
 * Responsive breakpoint helpers
 */
export const breakpoints = {
  up: (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => muiTheme.breakpoints.up(key),
  down: (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => muiTheme.breakpoints.down(key),
  between: (start: 'xs' | 'sm' | 'md' | 'lg' | 'xl', end: 'xs' | 'sm' | 'md' | 'lg' | 'xl') =>
    muiTheme.breakpoints.between(start, end),
};

/**
 * Color utilities with alpha
 */
export const colorWithAlpha = (color: string, alpha: number) => {
  return `${color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`;
};

/**
 * CSS Custom Property utility with fallback
 * Generates `var(--custom-prop, fallback)` for runtime CSS variable resolution
 */
export const cssVar = (name: string, fallback: string): string => `var(${name}, ${fallback})`;

/**
 * Service card gradient utility
 * Creates CSS gradient from color stops with CSS variable support
 */
export const createServiceGradient = (
  mainColor: string,
  lightColor: string,
  angle: number = 135
): string => {
  return `linear-gradient(${angle}deg, ${mainColor} 0%, ${lightColor} 100%)`;
};

/**
 * Service card styles with enhanced visual effects
 */
export const serviceCardStyles = {
  container: {
    position: 'relative',
    borderRadius: 3,
    overflow: 'hidden',
    transition: muiTheme.transitions.create(['transform', 'box-shadow'], {
      duration: muiTheme.transitions.duration.standard,
    }),
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: muiTheme.shadows[12],
    },
    '&:active': {
      transform: 'translateY(-4px) scale(1.01)',
    },
  } as SxProps<Theme>,

  header: (gradient: string) => ({
    background: gradient,
    color: '#fff',
    padding: muiTheme.spacing(3),
    minHeight: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.1)',
      transition: 'opacity 0.3s ease',
    },
    '&:hover::before': {
      opacity: 0,
    },
  }) as SxProps<Theme>,

  icon: {
    fontSize: '3rem',
    marginBottom: muiTheme.spacing(2),
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
  } as SxProps<Theme>,

  title: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.2,
    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
  } as SxProps<Theme>,

  description: {
    padding: muiTheme.spacing(2.5, 3),
    color: muiTheme.palette.text.secondary,
    lineHeight: 1.6,
  } as SxProps<Theme>,

  actions: {
    padding: muiTheme.spacing(2, 3),
    borderTop: `1px solid ${muiTheme.palette.divider}`,
    display: 'flex',
    gap: muiTheme.spacing(1.5),
  } as SxProps<Theme>,
};

export const primary = muiTheme.palette.primary.main;
export const secondary = muiTheme.palette.secondary.main;
export const accentGradient = `linear-gradient(180deg, ${primary} 0%, ${secondary} 100%)`;
export const cardBg = `linear-gradient(135deg, ${primary}10 0%, ${secondary}10 100%)`;
export const bgRadial1 = `radial-gradient(circle, ${primary}14 0%, transparent 70%)`;
export const bgRadial2 = `radial-gradient(circle, ${muiAlpha(secondary, 0.06)} 0%, transparent 70%)`;