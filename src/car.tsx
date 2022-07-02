import { useEffect, useRef } from 'react';
export default function CarAnimation ()  {
	const refHighway: any = useRef();
	const refCity: any = useRef();
	const refImgCar: any = useRef();
	const refFrontWheel: any = useRef();
	const refBackWheel: any = useRef();
	var highwayAnimation = [{transform: 'translateX(-3400px)'}];
	var cityAnimation = [{transform: 'translateX(-1400px)'}];
	var wheelAnimation = [{transform: 'rotate(360deg)'}];
	var imgCarAnimation = [
		{transform: 'translateY(-1px)', offset: 0},
		{transform: 'translateY(1px)', offset: 0.5},
		{transform: 'translateY(-1px)'},
	];	

	useEffect(() => {
		const highWayAniamation=refHighway.current.animate(highwayAnimation, {
			duration: 5000,
			iterations: Infinity,
		});
		const cityAniamation=refCity.current.animate(cityAnimation, {
			duration: 20000,
			iterations: Infinity,
		});
		const imgCarAniamation=refImgCar.current.animate(imgCarAnimation, {
			duration: 1000,
			iterations: Infinity,
		});
		const frontWheelAniamation=refFrontWheel.current.animate(wheelAnimation, {
			duration: 1000,
			iterations: Infinity,
		});
		const backWheelAniamation=refBackWheel.current.animate(wheelAnimation, {
			duration: 1000,
			iterations: Infinity,
		});
		return ()=>{
			highWayAniamation.cancel();
			cityAniamation.cancel();
			imgCarAniamation.cancel();
			frontWheelAniamation.cancel();
			backWheelAniamation.cancel();
		}
	}, []);
	return (
		<div
			key='hero'
			style={{
				margin: 0,
				padding: 0,
				height: '100vh',
				width: '100%',
				backgroundImage: 'url(/assets/car/sky.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
				overflowX: 'hidden',
			}}>
			<div
				key='highway'
				ref={refHighway}
				style={{
					margin: 0,
					padding: 0,
					height: '200px',
					width: '500%',
					zIndex: '1',
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					display: 'block',
					backgroundImage: 'url(/assets/car/road.jpg)',
					backgroundRepeat: 'repeat-x',
				}}></div>
			<div
				key='city'
				style={{
					margin: 0,
					padding: 0,
					height: '250px',
					width: '500%',
					zIndex: 1,
					position: 'absolute',
					bottom: '200px',
					left: 0,
					right: 0,
					display: 'block',
					backgroundImage: 'url(/assets/car/city.png)',
					backgroundRepeat: 'repeat-x',
				}}
				ref={refCity}></div>
			<div
				key='car'
				style={{
					margin: 0,
					padding: 0,
					left: '50%',
					bottom: '100px',
					position: 'absolute',
					width: '400px',
					transform: 'translateX(-50%)',
					zIndex: 2,
				}}>
				<img src='/assets/car/car.png' ref={refImgCar} style={{width: '100%'}} />
			</div>
			<div
				key='wheel'
				style={{
					margin: 0,
					padding: 0,
					left: '50%',
					bottom: '178px',
					transform: 'translateX(-50%)',
					position: 'absolute',
					zIndex: 2,
				}}>
				<img
					src='/assets/car/wheel.png'
					key='back-wheel'
					style={{
						margin: 0,
						padding: 0,
						width: '72px',
						height: '72px',
						left: '-165px',
						position: 'absolute',
						maxWidth: 'fit-content' 
					}}
					ref={refBackWheel}
				/>
				<img
					src='/assets/car/wheel.png'
					key='front-wheel'
					ref={refFrontWheel}
					style={{
						margin: 0,
						padding: 0,
						width: '72px',
						height: '72px',
						left: '80px',
						position: 'absolute',
						maxWidth: 'fit-content' 
					}}
				/>
			</div>
		</div>
	);
};

