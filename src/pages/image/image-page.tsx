import React from 'react';
import ImageDemo from './image';
import SrcBindindDemo from './src-binding';

const ImagePage: React.FunctionComponent = () => {
	return (
		<div className="demoList">
			<ImageDemo />
			<SrcBindindDemo />
		</div>
	);
}

export default ImagePage;
