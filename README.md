# react-linkedin-profile-badge
Easily add a LinkedIn profile badge widget to your React applications.

![LinkedIn profile badge](assets/linkedin-profile-badge.png)

<br />

## Installation

Run `npm i react-linkedin-profile-badge` OR `yarn add react-linkedin-profile-badge`

<br />

## Usage

Using this package is as simple as importing the `LinkedInProfileBadge` component from the library and passing props from the API. Only the profileId prop is required.

```
import React from 'react';
import LinkedInProfileBadge from 'react-linkedin-profile-badge';

const App: React.FC = () => {
	return <LinkedInProfileBadge profileId='ikemefunanwankwo' theme='dark' size='large' orientation='horizontal' />
}

export default App;

```

<br />

## Props API

The following props can be passed to the `LinkedInProfileBadge` component, in addition to any HTML div element attributes.

| Prop              | Required  | Datatype   | Possible Values          | Default Value | Description       | 
| ------------      | --------  | --------   | ------------------------ | ------------- | ----------------- |
| `profileId`       | Yes       | string     |                          | None          | Your LinkedIn profile ID, as identified by xxxx in the URL https://www.linkedin.com/in/xxxx/ |
| `theme`           | No        | string     | light \| dark            | light         | Widget theme color |
| `size`            | No        | string     | medium \| large          | medium        | Widget size |
| `orientation`     | No        | string     | vertical \| horizontal   | vertical      | Widget orientation type |
| `version`         | No        | string     | v1                       | v1            | LinkedIn profile badge API version |
| `locale`          | No        | string     | en_US \| en_GB           | en_US         | LinkedIn profile badge API localization |
| `showLink`        | No        | boolean    | true \| false            | false         | Show anchor link to LinkedIn profile below the badge |
| `linkText`        | No        | string     |                          | `null`        | Link text to show if `showLink` is enabled |