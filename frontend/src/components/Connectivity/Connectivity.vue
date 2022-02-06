<template>
  <div class="connectivity">
    <img :src="icon" :alt="`icon ${name}`" />
    <span class="connectivy--name">{{ name }}</span>
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

<style scoped lang="scss">
.connectivity {
  .connectivy--name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #8e98a7;
    text-transform: capitalize;
    margin-left: 5px;
  }
}
</style>
