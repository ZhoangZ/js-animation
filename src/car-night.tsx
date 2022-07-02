
import {useEffect, useRef} from 'react';
export default function CarNightAnimation() {
	const refSurface: any = useRef();	
	const refCar: any = useRef();
	let animationSurface:any= null;
	let animationCar:any= null;
	let run=true;
	var surfaceAnimation = [{transform: 'translateX(-2950px)'}];
	
	var carAnimation = [
		{transform: 'translateY(-1px)', offset: 0},
		{transform: 'translateY(2px)', offset: 0.5},
		{transform: 'translateY(-1px)'},
	];
	
	function handleKeyPress(e:KeyboardEvent){
		// console.log(e)
		if(e.key == 'Enter'&& animationSurface!=null&& animationCar!=null){
			run=!run;
			if(run){
				animationSurface.play();
				animationCar.play();
				
			}else{
				animationSurface.pause();
				animationCar.pause();

			}
		}
	}

	useEffect(() => {
		animationSurface=refSurface.current.animate(surfaceAnimation, {
			duration: 6000,
			iterations: Infinity,
		});	
		animationCar=refCar.current.animate(carAnimation, {
			duration: 1000,
			iterations: Infinity,
		});
		document.addEventListener('keypress', handleKeyPress);
		return ()=>{
			document.removeEventListener('keypress', handleKeyPress);
			animationSurface.cancel();
			animationCar.cancel();
		};
	}, []);
	return (
		<div style={{
			margin: 0,
			backgroundImage: "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
			overflowY: "hidden"
		}}>
			<div
				key='night'
				style={{
					height: '80vh',
					width: '70vw',
					border: '1px solid black',
					margin: '5rem auto',
					background: 'url(/assets/car-night/Img_1.png)',
					backgroundSize: 'cover',
					position: 'relative',
					boxShadow: '1px 2px 60px rgba(0, 0, 0, 0.4)',
					overflowX: 'hidden',
				}}>
				<div
					key='surface'
					ref={refSurface}
					style={{
						margin: 0,
						height: '140px',
						width: '500%',
						background: 'url(/assets/car-night//Img_02.png)',
						display: 'block',
						position: 'absolute',
						bottom: '0%',
						left: '0%',
						backgroundRepeat: 'repeat-x',
					}}></div>
				<div
					key='car'
					ref={refCar}
					style={{
						margin: 0,
						position: 'absolute',
						bottom: '8%',
						left: '24%',
					}}>
					<img src='/assets/car-night/Img_06.png' />
				</div>
			</div>
		</div>
	);
}
