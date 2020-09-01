//Core
import React from 'react';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { css } from '@emotion/core';

const customCss = css`
	display: block;
	margin: 60% 38%;

	@media (min-width: 768px) {
		margin: 10% 45%;
	}

	@media (min-width: 1024px) {
		margin: 25% 45%;
	}

	@media (min-width: 1440px) {
		margin: 15% auto;
	}
`;

const Loader = () => <BeatLoader size={20} color={'#1e3799'} loading={true} css={customCss} />;

export default Loader;
