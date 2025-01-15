const navigation:any = navigator;
export const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigation.standalone  ? true : false