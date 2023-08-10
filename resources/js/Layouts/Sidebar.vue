<template>
    <aside :class="[isOpen?'w-72':'close']"
           class="absolute min-h-screen bg-[#222B2F] flex-shrink-0 border-r sm:relative">
        <!--                logo-->
        <div class="w-full logo-container flex justify-center items-center">
            <img :src="logo" class="h-16 " alt="Logo"/>
        </div>
        <button type="button" @click="toggleSidebar"
                :class="[isOpen?'-right-4':'-right-12']"
                class="text-white absolute -right-12 top-4 bg-primary p-2 rounded-full border-2 border-white">
            <IconChevronLeft v-if="isOpen"/>
            <IconChevronRight v-else/>
        </button>
        <!--                Menus-->
        <div class="mt-4 menu-container">
            <ul class="space-y-2">
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconDashboard class="w-6 h-6"/>
                        <span class="">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <div class="bg-[#222B2F]">
                        <div
                            class="flex justify-between text-gray-300 items-center space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out cursor-pointer">
                            <div class="flex space-x-2">
                                <IconBasket class="w-6 h-6"/>
                                <span class="">Items</span>
                            </div>
                            <IconChevronDown class="w-6 h-6"/>
                        </div>
                        <!--                               sub menus-->
                        <div class="pl-10">
                            <ul class="space-y-1">
                                <li>
                                    <Link :href="route('dashboard')"
                                          class="flex items-center text-gray-300 px-4 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out rounded-l-full">
                                        <IconPointFilled size="16"/>
                                        <span class="">Categories</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link :href="route('dashboard')"
                                          class="flex items-center text-gray-300 px-4 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out rounded-l-full">
                                        <IconPointFilled size="16"/>
                                        <span class="">Items</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link :href="route('dashboard')"
                                          class="flex items-center text-gray-300 px-4 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out rounded-l-full">
                                        <IconPointFilled size="16"/>
                                        <span class="">
                                                    Inventory Adjustments
                                                </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconUser class="w-6 h-6"/>
                        <span class="">Customers</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconGardenCart class="w-6 h-6"/>
                        <span class="">Sales Orders</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconFileInvoice class="w-6 h-6"/>
                        <span class="">Invoices</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconWallet class="w-6 h-6"/>
                        <span class="">Payments</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconReceipt class="w-6 h-6"/>
                        <span class="">Bills</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconReceiptRefund class="w-6 h-6"/>
                        <span class="">Returns</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconUsers class="w-6 h-6"/>
                        <span class="">Suppliers</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconShoppingBag class="w-6 h-6"/>
                        <span class="">Purchase Orders</span>
                    </Link>
                </li>
                <li>
                    <Link :href="route('dashboard')"
                          class="flex items-center text-gray-300 space-x-2 px-8 py-2 rounded-none hover:bg-primary transition duration-150 ease-in-out">
                        <IconTimeline class="w-6 h-6"/>
                        <span class="">Reports</span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {
    IconTimeline,
    IconShoppingBag,
    IconUsers,
    IconDashboard,
    IconBasket,
    IconChevronDown,
    IconPointFilled,
    IconUser,
    IconGardenCart,
    IconFileInvoice,
    IconWallet,
    IconReceipt,
    IconReceiptRefund, IconChevronLeft, IconChevronRight
} from "@tabler/icons-vue";
import {Link} from '@inertiajs/vue3';
import logo from '@/Assets/logo.png';

let props = defineProps({
    sidebarOpen: {
        type: Boolean,
        required: true
    }
});
let isOpen = ref(props.sidebarOpen);
const updateSidebarState = () => {
    isOpen.value = window.innerWidth >= 640;
};
const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};
onMounted(() => {
    // Initial setup
    updateSidebarState();
    // Listen to window resize event and update sidebar state
    window.addEventListener("resize", updateSidebarState);
});

onBeforeUnmount(() => {
    // Clean up the event listener
    window.removeEventListener("resize", updateSidebarState);
});


</script>
