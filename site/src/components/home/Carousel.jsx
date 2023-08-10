import React from 'react'
import "../../styles/carousel.css"
import Bloomberg from '../../images/carousel/bloomberg.png'
import Boeing from '../../images/carousel/boeing.png'
import Deloitte from '../../images/carousel/deloitte.png'
import Goldman from '../../images/carousel/goldman.png'
import Google from '../../images/carousel/google.png'
import Harvard from '../../images/carousel/harvard.png'
import Lockheed from '../../images/carousel/lockheed.png'
import Microsoft from '../../images/carousel/microsoft.png'
import Northrop from '../../images/carousel/northrop.png'
import SpaceX from '../../images/carousel/spacex.png'
import Tesla from '../../images/carousel/tesla.png'
import Netflix from '../../images/carousel/netflix.png'

export default function Carousel() {
  return (
	<div className="carousel">
		<div className="slider">
			<div className="slide-track">
				<div className="slide">
					<img src={Bloomberg} height="100" width="250" alt="Bloomberg" />
				</div>
				<div className="slide">
					<img src={Boeing} height="100" width="250" alt="Boeing" />
				</div>
				<div className="slide">
					<img src={Deloitte} height="100" width="250" alt="Deloitte" />
				</div>
				<div className="slide">
					<img src={Goldman} height="100" width="250" alt="Goldman" />
				</div>
				<div className="slide">
					<img src={Google} height="100" width="250" alt="Google" />
				</div>
				<div className="slide">
					<img src={Harvard} height="100" width="250" alt="Harvard" />
				</div>
				<div className="slide">
					<img src={Lockheed} height="100" width="250" alt="Lockheed" />
				</div>
				<div className="slide">
					<img src={Microsoft} height="100" width="250" alt="Microsoft" />
				</div>
				<div className="slide">
					<img src={Northrop} height="100" width="250" alt="Northrop" />
				</div>
				<div className="slide">
					<img src={SpaceX} height="100" width="250" alt="SpaceX" />
				</div>
				<div className="slide">
					<img src={Tesla} height="100" width="250" alt="Tesla" />
				</div>
				<div className="slide">
					<img src={Netflix} height="100" width="250" alt="Netflix" />
				</div>
			</div>
		</div>
	</div>
  )
}
