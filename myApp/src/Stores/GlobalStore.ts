import { writable } from "svelte/store";
import type { NavigationTab } from "../enum/navigationTabs";

export const currentTab = writable(null as NavigationTab);
