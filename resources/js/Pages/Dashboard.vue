<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import {IconCalendarFilled, IconCoin, IconChartPieFilled, IconNotes, IconChartDonut} from "@tabler/icons-vue";
</script>

<template>
    <Head><title>Dashboard</title></Head>

    <AuthenticatedLayout>


        <div class="">
            <div class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                <div class="flex justify-between flex-col md:flex-row my-3">
                    <h1 class="text-2xl font-semibold">Dashboard</h1>
                    <div class="flex justify-between md:justify-normal items-center gap-4">
                        <div class="text-xs text-gray-600">
                            Compared to April 18-May 17, 2023
                        </div>
                        <button type="button"
                                class="inline-flex gap-2 text-xs font-semibold items-center border px-3 py-2 rounded-lg">
                            <IconCalendarFilled/>
                            Last 30 days
                        </button>
                    </div>
                </div>
                <div class="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex p-4 items-center">
                        <div class="bg-primary/10 p-4 text-primary rounded-lg mr-4">
                            <IconCoin size="32"/>
                        </div>
                        <div>
                            <div class=" text-gray-600 mb-1">Total Revenue</div>
                            <div class="text-3xl font-semibold">$ 1,000</div>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex p-4 items-center">
                        <div class="bg-primary/10 p-4 text-primary rounded-lg mr-4">
                            <IconNotes size="32"/>
                        </div>
                        <div>
                            <div class=" text-gray-600 mb-1">Total Items</div>
                            <div class="text-3xl font-semibold">1,300</div>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex p-4 items-center">
                        <div class="bg-primary/10 p-4 text-primary rounded-lg mr-4">
                            <IconChartPieFilled size="32"/>
                        </div>
                        <div>
                            <div class=" text-gray-600 mb-1">Average Sale</div>
                            <div class="text-3xl font-semibold">$99,9</div>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex p-4 items-center">
                        <div class="bg-primary/10 p-4 text-primary rounded-lg mr-4">
                            <IconChartDonut size="32"/>
                        </div>
                        <div>
                            <div class=" text-gray-600 mb-1">Count of Sale</div>
                            <div class="text-3xl font-semibold">667</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
