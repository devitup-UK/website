import { LIcon, LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'MapLocation',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon
    },
    data () {
        return {
            data: {
                url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                zoom: 16,
                center: [50.802,-1.20046],
                bounds: null,
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                icon: {
                    size: [90,72],
                    anchor: [45, 72]
                }
            }
        };
    }
    
}