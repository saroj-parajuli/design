import { SxProps, Theme } from '@mui/material/styles';
import * as csstype from 'csstype';
import * as _mui_material from '@mui/material';
export { CssBaseline, ThemeProvider } from '@mui/material';

declare const muiTheme: _mui_material.Theme;
declare const theme: _mui_material.Theme;
declare const accountStyles: (theme?: _mui_material.Theme) => {
    accountsListCard: {
        display: string;
        alignItems: string;
        gap: string;
        marginBottom: string;
        paddingLeft: string;
        paddingRight: string;
        paddingTop: string;
        paddingBottom: string;
        borderRadius: number;
        backgroundColor: string;
        boxShadow: string;
        cursor: string;
        transition: string;
        outline: string;
        position: string;
        '&:hover': {
            boxShadow: string;
            backgroundColor: string;
        };
        '&:focus-visible': {
            outline: string;
            outlineOffset: number;
            zIndex: number;
            backgroundColor: string;
        };
        '&[aria-selected="true"]': {
            outline: string;
            boxShadow: string;
            backgroundColor: string;
        };
        '&[aria-disabled="true"], &[disabled]': {
            opacity: number;
            pointerEvents: string;
            backgroundColor: string;
        };
        '&:active': {
            backgroundColor: string;
        };
    };
    accountCardSelected: {
        outline: string;
        boxShadow: string;
        backgroundColor: string;
    };
    accountAvatar: {
        backgroundColor: string;
        color: string;
        width: string;
        height: string;
        fontSize: csstype.Property.FontSize<string | number> | undefined;
        border: string;
        transition: string;
        '&:focus': {
            borderColor: string;
        };
    };
    accountCardBody: {
        flex: number;
        display: string;
        flexDirection: string;
        gap: string;
        minWidth: number;
    };
    accountChipRow: {
        marginTop: string;
        display: string;
        gap: string;
    };
    accountChip: {
        fontWeight: csstype.Property.FontWeight | undefined;
        borderRadius: string | number;
        paddingLeft: string;
        paddingRight: string;
        transition: string;
        '&:focus': {
            outline: string;
            outlineOffset: number;
        };
    };
};

/**
 * Common reusable style patterns for consistent UX
 */
declare const commonStyles: {
    interactiveCard: SxProps<Theme>;
    elevatedCard: SxProps<Theme>;
    gradientBackground: SxProps<Theme>;
    glassMorphism: SxProps<Theme>;
    centeredFlex: SxProps<Theme>;
    responsivePadding: SxProps<Theme>;
    sectionSpacing: SxProps<Theme>;
    smoothTransition: SxProps<Theme>;
    focusVisible: SxProps<Theme>;
    truncateText: SxProps<Theme>;
    clampText: (lines?: number) => SxProps<Theme>;
    customScrollbar: SxProps<Theme>;
    skeletonPulse: SxProps<Theme>;
    fadeIn: SxProps<Theme>;
    statusSuccess: SxProps<Theme>;
    statusError: SxProps<Theme>;
    statusWarning: SxProps<Theme>;
    statusInfo: SxProps<Theme>;
};
/**
 * Spacing utilities
 */
declare const spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
/**
 * Responsive breakpoint helpers
 */
declare const breakpoints: {
    up: (key: "xs" | "sm" | "md" | "lg" | "xl") => string;
    down: (key: "xs" | "sm" | "md" | "lg" | "xl") => string;
    between: (start: "xs" | "sm" | "md" | "lg" | "xl", end: "xs" | "sm" | "md" | "lg" | "xl") => string;
};
/**
 * Color utilities with alpha
 */
declare const colorWithAlpha: (color: string, alpha: number) => string;
/**
 * CSS Custom Property utility with fallback
 * Generates `var(--custom-prop, fallback)` for runtime CSS variable resolution
 */
declare const cssVar: (name: string, fallback: string) => string;
/**
 * Service card gradient utility
 * Creates CSS gradient from color stops with CSS variable support
 */
declare const createServiceGradient: (mainColor: string, lightColor: string, angle?: number) => string;
/**
 * Service card styles with enhanced visual effects
 */
declare const serviceCardStyles: {
    container: SxProps<Theme>;
    header: (gradient: string) => SxProps<Theme>;
    icon: SxProps<Theme>;
    title: SxProps<Theme>;
    description: SxProps<Theme>;
    actions: SxProps<Theme>;
};
declare const primary: string;
declare const secondary: string;
declare const accentGradient: string;
declare const cardBg: string;
declare const bgRadial1: string;
declare const bgRadial2: string;

export { accentGradient, accountStyles, bgRadial1, bgRadial2, breakpoints, cardBg, colorWithAlpha, commonStyles, createServiceGradient, cssVar, muiTheme, primary, secondary, serviceCardStyles, spacing, theme };
