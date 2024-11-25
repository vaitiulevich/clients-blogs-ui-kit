import React from 'react';
export interface SocialIconProps {
    name: 'twitter' | 'instagram' | 'facebook' | 'linkedin';
    bgColor?: 'dark' | 'light';
    className?: string;
}
export declare const SocialIcon: React.FC<SocialIconProps>;
