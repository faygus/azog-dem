import  React from 'react';
import LabelWFDemo from './label-wf/label-wf';
import LabelTextBindingDemo from './text-binding/text-binding';
import LabelColorBindingDemo from './color-binding/color-binding';
import LabelSizeBindingDemo from './size-binding/size-binding';

const LabelPage: React.FunctionComponent = () => {
	return (
		<div className="demoList">
			<LabelWFDemo />
			<LabelTextBindingDemo />
			<LabelColorBindingDemo />
			<LabelSizeBindingDemo />
		</div>
	);
}

export default LabelPage;
