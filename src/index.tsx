import React from 'react';
import { ILinkedInProfileBadge } from './@types';
import useScript from './hooks/useScript';

const LinkedInProfileBadge: React.FC<ILinkedInProfileBadge> = (props) => {
    
    useScript('https://platform.linkedin.com/badges/js/profile.js');

    const { 
        profileId,
        linkText = null, 
        theme = 'light', 
        locale = 'en_US', 
        size = 'medium',
        orientation = 'vertical',
        version = 'v1',
        showLink = false,
        ...rest
    } = props;

    if (showLink && !linkText) {
        console.error(`Linked Profile Badge setup error: prop 'linkText' must be set if prop 'showLink' is enabled!`);
    }

    return (
        <div 
            className={`badge-base LI-profile-badge ${rest?.className}`}
            data-locale={locale} 
            data-size={size} 
            data-theme={theme} 
            data-type={orientation.toUpperCase()} 
            data-vanity={profileId}
            data-version={version}>
                {showLink && linkText &&
                    <a className="badge-base__link LI-simple-link" href={`https://linkedin.com/in/${profileId}?trk=profile-badge`}>{linkText}</a>
                }
        </div>
    );

}

export default LinkedInProfileBadge;