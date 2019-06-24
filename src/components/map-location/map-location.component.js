import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'MapLocation',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data () {
        return {
            data: {
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 3,
                center: [47.413220, -1.219482],
                bounds: null
            }
        };
      },
      methods: {
        zoomUpdated (zoom) {
          this.data.zoom = zoom;
        },
        centerUpdated (center) {
          this.data.center = center;
        },
        boundsUpdated (bounds) {
          this.data.bounds = bounds;
        }
      }
}