<template>
  <div class="connectivity-container">
    <img :src="icon" :alt="`icon ${name}`" />
    <span class="connectivy--name font-size-medium color-gray">
      {{ name }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ConnectivityType } from "@/types";
import WifiIcon from "@/assets/icons/wifi.svg";
import EthernetIcon from "@/assets/icons/ethernet.svg";
import UnknowIcon from "@/assets/icons/unknow.svg";

export default defineComponent({
  name: "Connectivity",
  props: {
    connectivityType: {
      type: String as PropType<ConnectivityType>,
      required: true,
    },
  },
  setup(props) {
    const isWifi = ConnectivityType.Wifi === props.connectivityType;
    const isEthernet = ConnectivityType.Ethernet === props.connectivityType;

    const name = isWifi
      ? ConnectivityType.Wifi
      : isEthernet
      ? ConnectivityType.Ethernet
      : ConnectivityType.Unknown;

    const icon = isWifi ? WifiIcon : isEthernet ? EthernetIcon : UnknowIcon;

    return {
      name,
      icon,
    };
  },
});
</script>

<style scoped>
.connectivy--name {
  text-transform: capitalize;
  margin-left: 5px;
}
</style>
