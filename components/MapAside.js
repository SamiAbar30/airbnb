import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL , { Marker, Popup } from 'react-map-gl';

function MapAside({ searchResults }) {

 const [selectedLocation, setSelectedLocation] = useState()
	const mapResults = searchResults.map((item) => ({
		latitude: item.lat,
		longitude: item.long,
	}));
	const center = getCenter(mapResults);
	const [viewState, setViewState] = useState({
		width:"100%",
		height:"100%",
		longitude: center.longitude,
		latitude: center.latitude,
		zoom: 11,
	});
	return (
		<ReactMapGL 
			{...viewState}
			mapStyle='mapbox://styles/sami-abar-mapbox1/clavnhfaf00ce14ohql828pf2'
			onViewportChange={evt => setViewState(evt)}
			mapboxApiAccessToken={process.env.mapbox_key}>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
					role="img"
						longitude={result.long}
						latitude={result.lat}
						offsetTop={-10}
						offsetLeft={-20}
						
						>
						<p onClick={()=>setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'
						aria-label='push-pin'
						>📌</p>
					</Marker>
					{selectedLocation?.long === result.long&&(
						<Popup 
						onClose={()=>setSelectedLocation({})} 
						closeOnClick={true} 
						longitude={result.long}
						latitude={result.lat}
						>
							{result.title}
						</Popup>
					)}
				</div>
			))}
		</ReactMapGL>
	);
}

export default MapAside;
