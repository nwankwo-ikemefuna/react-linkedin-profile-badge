
export interface ILinkedInProfileBadge extends Partial<HTMLDivElement> {
    profileId: string;
    theme?: 'light' | 'dark';
    locale?: 'en_US' | 'en_GB';
    size?: 'medium' | 'large';
    orientation?: 'vertical' | 'horizontal';
    version?: 'v1';
    showLink?: boolean;
    linkText?: string;
}