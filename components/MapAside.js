import { getCenter } from 'geolib';
import Map, { Marker, Popup } from 'react-map-gl';

function MapAside({ searchResults }) {
	const mapResults = searchResults.map((item) => ({
		latitude: item.lat,
		longitude: item.long,
	}));
	const center = getCenter(mapResults);
	return (
		<Map
			initialViewState={{
				longitude: center.longitude,
				latitude: center.latitude,
				zoom: 8,
			}}
			mapStyle='mapbox://styles/sami-abar-mapbox1/clavnhfaf00ce14ohql828pf2'
			mapboxAccessToken={process.env.mapbox_key}>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}>
						<p className='cursor-ponter text-2xl animate-bounce'>📌</p>
					</Marker>
				</div>
			))}
		</Map>
	);
}

export default MapAside;
