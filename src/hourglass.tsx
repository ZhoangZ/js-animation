import {useEffect, useRef} from 'react';
export default function HourGlass (props:any) {
	const refTop: any = useRef();
	const refLoader: any = useRef();
	const refLine: any = useRef();
	const refBottom: any = useRef();
	var bottomAnimation = [
		{transform: 'scale(0)', offset: 0.1},
		{transform: 'scale(1)', offset: 0.9},
		{transform: 'scale(1)'},
	];
	var loaderAnimation = [
		{transform: 'rotate(0deg)', offset: 0.9},
		{transform: 'rotate(180deg)'}
	];
	var lineAnimation = [{height: '20px', offset: 0.1}, {height: '20px'}];
	var topAnimation = [{transform: 'scale(0)', offset: 0.9}, {transform: 'scale(0)'}];
	const myEvent = function () {
		console.log('Animation');
		refTop.current.animate(topAnimation, {
			duration: 5000,
			iterations: Infinity,
		});
		refLine.current.animate(lineAnimation, {
			duration: 5000,
			iterations: Infinity,
		});
		refBottom.current.animate(bottomAnimation, {
			duration: 5000,
			iterations: Infinity,
		});
		refLoader.current.animate(loaderAnimation, {
			duration: 5000,
			iterations: Infinity,
		});
	};
	useEffect(() => {
		if (typeof window !== undefined) {
			console.log('Add event');
			myEvent();
		}
	}, []);
	return (
		<div style={{background: '#DB7769', position: 'relative', width: props.width, height: props.height}}>
			<div id='loader' ref={refLoader} style={{ position: 'absolute', width: '40px', height: '41px'}}>
				<div
					ref={refTop}
					id='top'
					style={{
						borderTop: '20px solid #fff',
						borderRight: '20px solid transparent',
						borderLeft: '20px solid transparent',
						height: '0px',
						width: '1px',
						transformOrigin: '50% 100%',
					}}></div>
				<div
					ref={refBottom}
					id='bottom'
					style={{
						borderRight: '20px solid transparent',
						borderBottom: '20px solid #fff',
						borderLeft: '20px solid transparent',
						height: '0px',
						width: '1px',
						transform: 'scale(0)',
						transformOrigin: '50% 100%',
					}}></div>
				<div
					ref={refLine}
					id='line'
					style={{
						borderLeft: '1px dotted #fff',
						height: '0px',
						width: '0px',
						position: 'absolute',
						top: '20px',
						left: '20px',
					}}></div>
			</div>
		</div>
	);
}
