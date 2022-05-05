import { reactive } from "vue";

export default function useAgent() {
  const device = reactive({
    mobile: false,
    desktop: false,
  });

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    device.mobile = true;
    device.desktop = false;
  } else {
    device.desktop = true;
    device.mobile = false;
  }

  return device;
};
