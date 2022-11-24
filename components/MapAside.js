import Map from 'react-map-gl';
function MapAside() {
	return (
		<Map
			initialViewState={{
				longitude: -100,
				latitude: 40,
				zoom: 3.5,
			}}
			style={{ width: 600, height: 400 }}
			mapStyle='mapbox://styles/sami-abar-mapbox1/clavnhfaf00ce14ohql828pf2'
		/>
	);
}

export default MapAside;
