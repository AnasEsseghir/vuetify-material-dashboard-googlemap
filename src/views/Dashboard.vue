<template>
<div>
<core-toolbar />
<core-drawer />
<div class="mapouter">
<div class="gmap_canvas">
<GmapMap
:center="center"
:zoom="7"
style="width: 100%; height: 100%"
>
<GmapMarker
:zoom="7"
:key="index"
v-for="(m, index) in internship"
:position="{lat:m.lat,lng:m.lng}"

:clickable="true"
@click="toggleInfoWindow(m,index)"
>
</GmapMarker> 
<gmap-info-window :opened="infoWindow.open" :position="infoWindow.position" @closeclick="infoWindow.open=false" :options="{
              pixelOffset: {
                width: 0,
                height: -35
              }
            }">
                <div v-html="infoContent"></div>

</gmap-info-window>
</GmapMap>
</div>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      internship: [],
      paginate: ["internship"],
      selectedmarker: null,
      center: { lat: 48.864716, lng: 2.349014 },
      infoContent: null,
      infoWindow: {
        open: false,
        position: null
      },
      positionmarker: { lat: null, lng: null },
      currentMidx: null
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindow.position = { lat: marker.lat, lng: marker.lng };
      this.infoContent = this.getInfoWindowContent(marker);
      this.selectedmarker = marker;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWindow.open = !this.infoWindow.open;
      } else {
        //if different marker set infowindow to open and reset current marker index
        this.infoWindow.open = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function(marker) {
      return `<br/><div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <h4>${marker.title}</h4>
      </div>
    </div>
    <div class="content">
      ${marker.companyContact.company.corporateName}
    </div>      
  </div><br/>
</div>`;
    }
  },
  mounted() {
    this.$http
      .get("Course")
      .then(resp => {
        this.internship = resp.data;
        resolve(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style>
.mapouter {
  height: 100%;
  width: 100%;
  position: absolute;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>
